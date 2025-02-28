"use client";
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useAppContext } from '@/context/AppContext';

import { Calendar } from '@/components/ui/calendar';
import { format, getDay } from 'date-fns';
import BlurFade from '@/components/ui/blur-fade';

interface ScheduleNoNavProps {
  onNext: () => void;
}

// Define a type for the valid keys of the timeSlots object
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const ScheduleNoNav: React.FC<ScheduleNoNavProps> = ({ onNext }) => {
  const { form, setForm, contractor, timezoneAbbr } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false); // State to control spinner
  const [selectedDayTimeSlots, setSelectedDayTimeSlots] = useState<string[]>([]); // State to store time slots for the selected day

  // Updated time slots to use an object with days of the week as keys
  const defaultTimeSlots: Record<DayOfWeek, string[]> = {
    Monday: ['10:00', '13:00', '14:00', '15:00', '17:00', '18:00'],
    Tuesday: ['13:00', '14:00', '16:00', '17:00', '20:00'],
    Wednesday: ['11:00', '13:00', '14:00', '15:00', '18:00', '19:00'],
    Thursday: ['13:00', '14:00', '16:00', '17:00', '20:00'],
    Friday: ['11:00', '13:00', '14:00', '15:00', '18:00', '19:00'],
    Saturday: ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    Sunday: [], // No time slots for Sunday
  };

  // Parse contractor.time_slots if it exists, otherwise use defaultTimeSlots
  const timeSlots: Record<DayOfWeek, string[]> = contractor.time_slots
    ? contractor.time_slots // Parse JSONB data
    : defaultTimeSlots;

  const formik = useFormik({
    initialValues: {
      date: form.date || '', 
      time: form.time || '',
    },
    validate: (values) => {
      const errors: { date?: string; time?: string } = {};
      if (!values.date) {
        errors.date = 'Date is required';
      }
      if (!values.time) {
        errors.time = 'Time is required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true); // Show spinner

      setForm((prevForm) => ({
        ...prevForm,
        date: values.date,
        time: values.time,
        timezone: contractor.timezone,
      }));

      setLoading(false); // Hide spinner
      onNext();
    },
  });
  
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      formik.setFieldValue('date', formattedDate);
  
      const dayOfWeek = getDay(date);
      const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const selectedDay = days[dayOfWeek];
      const newTimeSlots = timeSlots[selectedDay];
  
      setSelectedDayTimeSlots(newTimeSlots);
  
      // Clear invalid time selection
      if (formik.values.time && !newTimeSlots.includes(formik.values.time)) {
        formik.setFieldValue('time', '');
        setRawTime('');
      }
    }
  };

  const [rawTime, setRawTime] = useState<string>(form.time || '');

  useEffect(() => {
    setRawTime(form.time || '');
  }, [form.time]);

  // Function to convert 24-hour time to 12-hour time
  const convertTo12HourFormat = (time: string): string => {
    const [hour, minute] = time.split(':');
    const parsedHour = parseInt(hour, 10);
    const suffix = parsedHour >= 12 ? 'PM' : 'AM';
    const twelveHour = parsedHour % 12 || 12;
    return `${twelveHour}:${minute} ${suffix}`;
  };

  const handleTimeSelect = (time: string) => {
    setRawTime(time);
    formik.setFieldValue('time', time);
  };
  // Set initial time slots based on the current day
  useEffect(() => {
    const today = new Date();
    const dayOfWeek = getDay(today);
    const days: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[dayOfWeek];

    setSelectedDayTimeSlots(timeSlots[currentDay]);
  }, [timeSlots]);

  // Utility function to capitalize the first letter
  const capitalizeFirstLetter = (string: string | null) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('firstname');
  const firstname = capitalizeFirstLetter(initial);

  // Normalize holiday dates to midnight in the LOCAL timezone
  const disabledDates = contractor.disabled_dates;
  const holidays = disabledDates.holidays.map((dateStr: string) => {
    const [datePart] = dateStr.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    return new Date(year, month - 1, day); // Months are 0-based
  });

  return (
    <div className="container-form">
      <div className="max-w-xl mx-auto">
        <div className='flex justify-center text-center mb-8'>
          <div className="max-w-[40rem] text-center">
            <h1 className="heading-form">
              {firstname ? (
                <>
                  Hi {firstname}! Let's bring your{' '}
                  <span className="text-accentColor">future project</span> to life—<span className="text-accentColor">pick a date and time</span> that works for you
                </>
              ) : (
                <>
                  Hi there! Let's bring your{' '}
                  <span className="text-accentColor">future project</span> to life—<span className="text-accentColor">pick a date and time</span> that works for you
                </>
              )}

            {/* Pick a  
            <span className="text-accentColor"> date and time</span> that works for you */}
            </h1>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4 rounded-lg px-4 py-4 shadow-lg sm:px-6 sm:py-4 lg:px-8 bg-white">
            <BlurFade delay={0.1} duration={0.4} blur='0px' inView yOffset={0} className="flex-grow">
              {/* Show timezone abbreviation */}
              <div className="mt-0 text-center text-gray-700 dark:text-neutral-200 justify-center items-center">
                <div className='flex justify-center items-center'>
                  <img src="/images/globe.svg" alt="Clock" className="inline ml-0 mr-2 h-5" />
                  <p>
                    <span className="text-base text-gray-800">{timezoneAbbr}</span>
                  </p>
                </div>
              </div>
              <h2 className="text-center mt-2 mb-4 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Select a date
              </h2>
              <div className="flex justify-center mb-4">
                <div className="rounded-lg small-stepper:border small-stepper:border-gray-300 small-stepper:p-4 small-stepper:shadow-xl sm:p-6 lg:p-8 small-stepper:bg-white">
                  <Calendar
                    mode="single"
                    selected={
                      formik.values.date
                        ? new Date(
                            // Split the stored date string into parts and create a local Date
                            Number(formik.values.date.split('-')[0]), // Year
                            Number(formik.values.date.split('-')[1]) - 1, // Month (0-based)
                            Number(formik.values.date.split('-')[2]) // Day
                          )
                        : undefined
                    }
                    onSelect={handleDateChange}
                    initialFocus
                    disabled={[
                      // Disable dates before today
                      { before: new Date(new Date().setHours(0, 0, 0, 0)) },
                      // Disable dynamic "from" range
                      { 
                        from: new Date(), 
                        to: new Date(new Date().setDate(new Date().getDate() + disabledDates.from)) 
                      },
                      // Disable dynamic "after" range
                      { after: new Date(new Date().setDate(new Date().getDate() + disabledDates.after)) },
                      // Disable specific holidays
                      ...holidays
                    ]}
                  
                  />
                </div>
              </div>

              <h2 className="text-center mt-6 mb-4 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Select Time
              </h2>
              {formik.values.date ? ( // Check if a date has been selected
                selectedDayTimeSlots.length > 0 ? (
                  <div
                    className="flex flex-wrap justify-center pb-2"
                    style={{ gap: '10px', marginTop: '15px', width: '100%' }}
                  >
                    {selectedDayTimeSlots.map((time: string) => (
                      <button
                        key={time}
                        type="button"
                        className={`py-3 px-4 w-28 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300  ${
                          rawTime === time ? 'bg-accentColor text-white border-accentColor hover:bg-accentColor' : 'bg-white text-gray-800 hover:bg-gray-100'
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {convertTo12HourFormat(time)}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-700 dark:text-neutral-200">
                    No time slots available for the selected date.
                  </div>
                )
              ) : (
                <div className="text-center text-gray-700 dark:text-neutral-200">
                  Please select a date to view available time slots.
                </div>
              )}

              
            
            </BlurFade>
          </div>
          <div className="mt-4 flex flex-col space-y-4 sticky bottom-4">
            <button
              type="submit"
              className={`w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent ${
                formik.values.date && formik.values.time
                  ? 'bg-accentColor text-white hover:bg-accentDark transform transition-transform'
                  : 'bg-gray-200 text-white cursor-not-allowed'
              }`}
              disabled={!formik.values.date || !formik.values.time}
            >
              {loading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleNoNav;
