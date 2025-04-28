// RehashOptions.tsx
import { useAppContext } from '@/context/AppContext';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



interface RehashOptionsProps {
  quote: string; // Now accepts string
}

const formatCurrency = (amount: string) => {
  const numericAmount = parseFloat(amount) || 0;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(numericAmount);
};

export const RehashOptions = ({ quote }: RehashOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState<'original' | 'custom' | 'installment'>('custom');
  const numericQuote = parseFloat(quote) || 0;
  const [selectedInstallment, setSelectedInstallment] = useState<'12' | '24' | '36'>('12');
  const { contractor } = useAppContext();
  const [slug, setSlug] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Calculate monthly payments
  const monthlyPayments = {
    twelve: numericQuote / 12,
    twentyFour: numericQuote / 24,
    thirtySix: numericQuote / 36,
  };

   // Function to append current URL parameters
   const navigateWithParams = (path: string) => {
    const currentParams = new URLSearchParams(location.search);
    navigate(`${path}?${currentParams.toString()}`);
  };

  useEffect(() => {
      if (contractor) {
        setSlug(contractor.slug);
      }
    }, [contractor]);

  const handleButtonClick = () => {

    navigateWithParams(`/rehash-hp/${slug}`);
  };

  // Reusable card classes
  const baseCardClasses = `flex flex-col border-2 rounded-xl p-8 transition-all duration-300 h-full bg-white`;
  const unselectedCardClasses = `${baseCardClasses} border-gray-200 hover:border-accentColor dark:border-neutral-800`;
  const selectedCardClasses = `${baseCardClasses} border-accentColor shadow-xl dark:border-accentColor`;

  const cardButton = 'py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border hover:bg-accentColor hover:text-white mt-auto';

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 mx-auto">
      {/* Title Section */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Flexible Payment Options
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Choose the option that works best for your budget and needs.
        </p>
      </div>

      {/* Options Grid */}
      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {/* Original Quote Card */}
        <div 
          className={selectedOption === 'original' ? selectedCardClasses : unselectedCardClasses}
          onClick={() => setSelectedOption('original')}
        >
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Your Original Quote
          </h4>
          <span className="mt-5 font-bold text-3xl text-gray-800 dark:text-neutral-200">
            {formatCurrency(quote)}
          </span>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
            Act now to lock in this rate—let's discuss your project!
          </p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-accentColor dark:text-accentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Priority scheduling
              </span>
            </li>
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-accentColor dark:text-accentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Priority scheduling
              </span>
            </li>
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-accentColor dark:text-accentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Priority scheduling
              </span>
            </li>
            {/* ... rest of list items ... */}
          </ul>

          <a href="#form" className={`${cardButton} ${
              selectedOption === 'original'
                ? 'border-transparent bg-accentColor text-white '
                : 'border-gray-200 bg-white text-gray-800'
            }`} onClick={handleButtonClick}>
            Lock In This Price →
          </a>
        </div>

        {/* Custom Offer Card (Pre-selected) */}
        <div 
          className={selectedOption === 'custom' ? selectedCardClasses : unselectedCardClasses}
          onClick={() => setSelectedOption('custom')}
        >
          <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
            Custom Offer
          </h4>
          <p className="mt-2">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-accentLight text-accentColor">
              Most Flexible
            </span>
          </p>
          <p className="mt-5 text-sm text-gray-500 dark:text-neutral-500">
            Discuss budget-friendly options with our team—no pressure.
          </p>

          <ul className="mt-7 space-y-2.5 text-sm">
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-accentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Project adjustments
              </span>
            </li>
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-accentColor dark:text-accentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Priority scheduling
              </span>
            </li>
            <li className="flex gap-x-2">
              <svg
                className="shrink-0 mt-0.5 size-4 text-accentColor dark:text-accentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-gray-800 dark:text-neutral-400">
                Terms subject to approval
              </span>
            </li>
          </ul>
          <a href="#form" className={`${cardButton} ${
              selectedOption === 'custom'
                ? 'border-transparent bg-accentColor text-white '
                : 'border-gray-200 bg-white text-gray-800'
            }`} onClick={handleButtonClick}>
            Make an Offer →
          </a>
        </div>

        {/* Installment Plan Card */}
        <div 
          className={`${selectedOption === 'installment' ? selectedCardClasses : unselectedCardClasses} flex flex-col`}
          onClick={() => setSelectedOption('installment')}
        >
          <div className="flex-1 mb-5">
            <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
              Installment Plans
            </h4>
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              0% APR financing available
            </p>

            <div className="mt-5 grid gap-2">
              {(['12', '24', '36'] as const).map((months) => (
                <div
                  key={months}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedInstallment(months);
                  }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedInstallment === months
                      ? 'border-accentColor shadow-md bg-accentLight'
                      : 'border-gray-200 hover:border-accentColor dark:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {/* Radio Indicator */}
                    <div
                      className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedInstallment === months
                          ? 'border-accentColor bg-accentLight'
                          : 'border-gray-300 dark:border-neutral-600'
                      }`}
                    >
                      {selectedInstallment === months && (
                        <div className="w-2 h-2 rounded-full bg-accentColor" />
                      )}
                    </div>
                    {/* Payment Info */}
                    <div className="flex justify-between items-center w-full text-sm ">
                      <div className="flex items-baseline gap-1">
                      
                        <span className={`font-medium  ${
                          selectedInstallment === months
                            ? 'text-accentColor'
                            : 'text-gray-500'
                          
                          }`}>
                          {formatCurrency(monthlyPayments[months === '12' ? 'twelve' : months === '24' ? 'twentyFour' : 'thirtySix'].toString())}
                        </span>

                        <span className="text-sm text-gray-500 dark:text-neutral-400">
                        {''} / month
                        </span>

                      </div>
                      
                      <span className="text-sm text-gray-500 dark:text-neutral-400">
                        {months} months
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anchored CTA Button */}
          <a 
            href="#form" 
            className={`${cardButton} ${
              selectedOption === 'installment'
                ? 'border-transparent bg-accentColor text-white '
                : 'border-gray-200 bg-white text-gray-800'
            }`} onClick={handleButtonClick}
          >
            Choose Plan →
          </a>
        </div>
      </div>
    </div>
  );
};

// generate me sample text copy for the list element in the option cards. Each card option will have 3 different list items. Don't generate any code. I just want list items like "Priority scheduling" "Warranty for..." etc