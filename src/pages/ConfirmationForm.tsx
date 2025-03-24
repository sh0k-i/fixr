import { useFormik } from 'formik';
import { useAppContext } from '@/context/AppContext';
import Navbar from '@/components/NavBar';

const ConfirmationForm = () => {
  const { setForm, contractor } = useAppContext();
  const accent_rgba = contractor.colors.accent_rgba || '0 10px 25px -6px rgba(0, 0, 0, 0.1)';

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      homeowner: '',
      HomeOwnersPresent: '',
      AddressVerified: ''
    },
    onSubmit: async (values) => {
      try {
        // Send data to webhook
        await fetch('https://your-webhook-url.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            contractor: contractor?.id,
            timestamp: new Date().toISOString()
          }),
        });
        
        // Update global form state
        setForm(prev => ({ ...prev, ...values }));
      } catch (error) {
        console.error('Webhook error:', error);
      }
    },
  });

  const capitalizeWords = (str: string | null) => {
    if (!str) return '';
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const params = new URLSearchParams(window.location.search);
  const firstname = capitalizeWords(params.get('firstname') || '');

  const renderQuestion = (question: string, fieldName: string) => (
    <div className="mb-12">
      <h3 className="text-base sm:text-lg font-medium sm:font-semibold mb-4 text-center text-gray-800">{question}</h3>
      <div className="flex justify-center gap-4">
        {['Yes', 'No'].map((option) => (
          <button
            key={option}
            type="button"
            className={`cards-button-small ${
              formik.values[fieldName as keyof typeof formik.values] === option 
                ? 'border-accentColor bg-accentColor/10' 
                : ''
            }`}
            onClick={() => formik.setFieldValue(fieldName, option)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `${accent_rgba} 0px 10px 25px -6px`;
              e.currentTarget.style.borderColor = accent_rgba;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 10px 25px -6px';
              e.currentTarget.style.borderColor = 'rgba(157, 176, 197, 0.25)';
            }}
          >
            <span className="cards-text text-center">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className="container-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-8">
            <div className='flex justify-center text-center mb-8'>
              <div className="max-w-[60rem] text-center">
                <h1 className="heading-form">
                  Almost There, {firstname}! <span className="text-accentColor">Confirm Your Appointment</span> Now
                </h1> 
              </div>
            </div>

            <div className="mt-12 flex flex-col h-full">
              {renderQuestion("Are you the homeowner?", "homeowner")}
              {renderQuestion("Will all homeowners be present for at least 60-90 mins?", "HomeOwnersPresent")}
              {renderQuestion("Is this your current address?", "AddressVerified")}

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="py-3 px-8 bg-accentColor text-white rounded-lg hover:bg-accentDark transition-colors"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'Submitting...' : 'Confirm Appointment'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


  );
};

export default ConfirmationForm;