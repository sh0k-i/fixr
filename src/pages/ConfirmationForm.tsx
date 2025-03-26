import { useFormik } from 'formik';
import { useAppContext } from '@/context/AppContext';
import Navbar from '@/components/NavBar';
import { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';


const ConfirmationForm = () => {
  const { setForm, contractor } = useAppContext();
  const accent_rgba = contractor.colors.accent_rgba || '0 10px 25px -6px rgba(0, 0, 0, 0.1)';
  const animationRefs = useRef<{ [key: string]: any }>({});


  // Get URL parameters
  const params = new URLSearchParams(window.location.search);
  const addressParams = {
    address1: params.get('address1') || '',
    address2: params.get('address2') || '',
    city: params.get('city') || '',
    state: params.get('state') || '',
    zip: params.get('zip') || ''
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      homeowner: '',
      HomeOwnersPresent: '',
      AddressVerified: '',
      ...addressParams
    },
    onSubmit: async (values) => {
      try {
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

  const firstname = capitalizeWords(params.get('firstname') || '');

  const renderQuestion = (question: string, fieldName: string) => (
    <div className="mb-12">
      <h3 className="text-base sm:text-lg font-medium sm:font-semibold mb-4 text-center text-gray-800">{question}</h3>
      <div className="flex justify-center gap-4">
        {['Yes', 'No'].map((option) => {
          const isSelected = formik.values[fieldName as keyof typeof formik.values] === option;
          return (
            <button
              key={option}
              type="button"
              className={`cards-button-small relative ${
                isSelected ? 'border-accentColor bg-accentColor/10' : ''
              }`}
              style={{
                boxShadow: isSelected ? `${accent_rgba} 0px 10px 25px -6px` : '',
                borderColor: isSelected ? accent_rgba : ''
              }}
              onClick={() => {
                // Stop previous animation if changing selection
                if (animationRefs.current[fieldName]) {
                  animationRefs.current[fieldName].stop();
                }
                formik.setFieldValue(fieldName, option);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `${accent_rgba} 0px 10px 25px -6px`;
                e.currentTarget.style.borderColor = accent_rgba;
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 10px 25px -6px';
                  e.currentTarget.style.borderColor = 'rgba(157, 176, 197, 0.25)';
                }
              }}
            >
              {isSelected && (
                <Player
                  src={option === 'Yes' ? '/animations/check.json' : '/animations/wrong.json'}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-8"
                  autoplay
                  loop={false}
                  keepLastFrame={true}
                  ref={(ref) => (animationRefs.current[fieldName] = ref)}
                />
              )}
              <span className="cards-text text-center">{option}</span>
            </button>
          );
        })}
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
              
              {/* Custom Address Verification Section */}
              <div className="mb-12">
                <h3 className="text-base sm:text-lg font-medium sm:font-semibold text-center text-gray-800">
                  Is this your current address?
                </h3>
                
                {/* Display Address from URL Parameters */}
                <div className='flex justify-center'>
                  <div className="my-4 w-96 bg-gray-100 rounded-md pb-4 pt-4 space-y-2">
                    <p className="text-sm sm:text-base text-center text-gray-800">{addressParams.address1}, {addressParams.address2 && `${addressParams.address2},` } {addressParams.city}, {addressParams.state} {addressParams.zip} </p>
                  </div>
                </div>
                

                {/* Yes/No Buttons */}
                <div className="flex justify-center gap-4 items-center">
                  {['Yes', 'No'].map((option) => {
                    const isSelected = formik.values.AddressVerified === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        className={`cards-button-small relative ${
                          isSelected ? 'border-accentColor bg-accentColor/10' : ''
                        }`}
                        style={{
                          boxShadow: isSelected ? `${accent_rgba} 0px 10px 25px -6px` : '',
                          borderColor: isSelected ? accent_rgba : ''
                        }}
                        onClick={() => {
                          if (animationRefs.current.address) {
                            animationRefs.current.address.stop();
                          }
                          formik.setFieldValue('AddressVerified', option);
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `${accent_rgba} 0px 10px 25px -6px`;
                          e.currentTarget.style.borderColor = accent_rgba;
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 10px 25px -6px';
                            e.currentTarget.style.borderColor = 'rgba(157, 176, 197, 0.25)';
                          }
                        }}
                      >
                        {isSelected && (
                          <Player
                            src={option === 'Yes' ? '/animations/check.json' : '/animations/wrong.json'}
                            className="absolute left-4 top-1/2 -translate-y-1/2 h-8"
                            autoplay
                            keepLastFrame={true}
                            loop={false}
                            ref={(ref) => (animationRefs.current.address = ref)}
                          />
                        )}
                        <span className="cards-text text-center">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Address Input Fields for 'No' Answer */}
                {formik.values.AddressVerified === 'No' && (
                  <div className="mt-8 space-y-4 max-w-lg mx-auto">
                    <h3 className="text-base sm:text-lg font-medium sm:font-semibold text-center text-gray-800">
                      Please provide your current address
                    </h3>
                    <div>
                      <label className="input-label">Address Line 1</label>
                      <input
                        type="text"
                        name="address1"
                        value={formik.values.address1}
                        onChange={formik.handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="input-label">Address Line 2 (Optional)</label>
                      <input
                        type="text"
                        name="address2"
                        value={formik.values.address2}
                        onChange={formik.handleChange}
                        className="input-field"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="input-label">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="input-label">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="input-label">ZIP Code</label>
                        <input
                          type="text"
                          name="zip"
                          value={formik.values.zip}
                          onChange={formik.handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

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