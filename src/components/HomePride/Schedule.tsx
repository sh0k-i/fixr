"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Calendar } from '@/components/ui/calendar';
import { getDay } from 'date-fns';
import { central } from '@/lib/supabaseClient';
import { format } from 'date-fns-tz';
import { useAppContext } from '@/context/AppContext';
import NavButtons from '../ui/navButtons';

interface ScheduleProps {
  onNext: () => void;
  onBack: () => void;
  onReset: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onNext, onBack, onReset }) => {
  const { contractor } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [rawTime, setRawTime] = useState('');

  const formik = useFormik({
    initialValues: {
      date: localStorage.getItem('rehash_hp_date') || '',
      time: localStorage.getItem('rehash_hp_time') || '',
    },
    validate: values => {
      const errors: { date?: string; time?: string } = {};
      if (!values.date) errors.date = 'Date required';
      if (!values.time) errors.time = 'Time required';
      return errors;
    },
    onSubmit: async values => {
      localStorage.setItem('rehash_hp_date', values.date);
      localStorage.setItem('rehash_hp_time', values.time);
      onNext();
    },
  });

  const getSlotsForDate = (date: Date) => {
    const day = getDay(date);
    return [0, 5, 6].includes(day) ? [] : ['10 AM', '3 PM'];
  };

  const handleDateChange = async (date: Date | undefined) => {
    if (!date) return;

    const formattedDate = format(date, 'yyyy-MM-dd');
    const daySlots = getSlotsForDate(date);
    
    formik.setFieldValue('date', formattedDate);
    setRawTime('');
    setLoading(true);

    try {
      const { data } = await central
        .from('homepride_rehash')
        .select('time')
        .eq('date', formattedDate);

      const bookedTimes: string[] = data?.map((item: { time: string }) => item.time) || [];
      const filteredSlots = daySlots.filter(slot => !bookedTimes.includes(slot));
      
      setAvailableSlots(filteredSlots);
    } catch (error) {
      console.error('Availability check failed:', error);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const handleTimeSelect = (time: string) => {
    setRawTime(time);
    formik.setFieldValue('time', time);
  };

  return (
    <div className="container-form">
      <NavButtons handleBack={onBack} handleReset={onReset} />
      <div className="max-w-xl mx-auto">
        <div className='flex justify-center text-center mb-8'>
          <div className="max-w-[40rem] text-center">
            <h1 className="heading-form">
              Let's discuss your project — pick a
              <span className="text-accentColor"> date and time</span> for your callback
            </h1>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4 rounded-lg px-4 py-4 shadow-lg sm:px-6 sm:py-4 lg:px-8 bg-white">
            <div className="mt-0 text-center text-gray-700 justify-center items-center">
              <div className='flex justify-center items-center'>
                <img src="/images/globe.svg" alt="Clock" className="inline ml-0 mr-2 h-5" />
                <p className="text-base text-gray-800">
                  {format(new Date(), 'zzz', { timeZone: contractor?.timezone[0] })}
                </p>
              </div>
            </div>

            <h2 className="text-center mt-2 mb-4 text-xl font-semibold text-gray-800">
              Select a date
            </h2>

            <div className="flex justify-center mb-4">
              <div className="rounded-lg small-stepper:border small-stepper:border-gray-300 small-stepper:p-4 small-stepper:shadow-xl sm:p-6 lg:p-8 small-stepper:bg-white">
                <Calendar
                  mode="single"
                  selected={formik.values.date ? new Date(formik.values.date) : undefined}
                  onSelect={handleDateChange}
                  disabled={{ 
                    before: new Date(),
                    dayOfWeek: [0, 5, 6] // Disable Sundays (0), Fridays (5), Saturdays (6)
                  }}      
                />
              </div>
            </div>

            <h2 className="text-center mt-6 mb-4 text-xl font-semibold text-gray-800">
              Select Time
            </h2>

            {loading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin h-8 w-8 border-2 border-gray-300 rounded-full border-t-accentColor" />
              </div>
            ) : formik.values.date ? (
              availableSlots.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-2 pb-2" style={{ marginTop: '15px' }}>
                  {availableSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      className={`py-3 px-4 w-28 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border ${
                        rawTime === time 
                          ? 'bg-accentColor text-white border-accentColor hover:bg-accentColor' 
                          : 'bg-white text-gray-800 hover:bg-gray-100 border-gray-300'
                      }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-700">
                  No available time slots left, please choose a different day
                </div>
              )
            ) : (
              <div className="text-center text-gray-700">
                Please select a date to view available time slots
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col space-y-4 sticky bottom-4">
            <button
              type="submit"
              className={`w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent ${
                formik.values.date && formik.values.time
                  ? 'bg-accentColor text-white hover:bg-accentDark'
                  : 'bg-gray-200 text-white cursor-not-allowed'
              }`}
              disabled={!formik.values.date || !formik.values.time || loading}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedule;