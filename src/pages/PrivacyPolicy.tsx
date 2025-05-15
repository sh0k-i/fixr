"use client";
import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";

const PrivacyPolicy = () => {
  return (
    <div className="">
      <NavBar2 />
      <div className="fixed top-0 left-0 w-full h-[300px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top z-[-1]"></div>
      <div className="max-w-[85rem] mt-[100px] md:mt-[142px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 min-h-screen">
        <div className="text-left space-y-2 md:space-y-4 mb-6 md:mb-8">
          <ol className="flex items-center whitespace-nowrap">
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-gray-500 hover:text-accentColor "
                href="/"
              >
                <svg
                  className="shrink-0 me-3 size-4"
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
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </a>
              <svg
                className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </li>
            <li
              className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
              aria-current="page"
            >
              Privacy Policy
            </li>
          </ol>
            <div className="text-left space-y-2 md:space-y-4">
            <div
              className="section_header pointer-events-none"
            >
              Privacy Policy for <span className="text-accentColor">Fixr</span>
            </div>
          </div>
        </div>
        <p className="paragraph font-semibold"><strong>Effective Date:</strong> May 1, 2025</p>
        <p className="paragraph">This Privacy Policy describes how Fixr ("we," "us," or "our") collects, uses, and shares personal information of visitors to our website. This policy aims to provide transparency about how we handle your information.</p>
        
        <h3 className="heading-secondary">Definition of Personal Information</h3>
        <p className="paragraph">For the purposes of this Privacy Policy, "Personal Information" means information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with a particular individual.</p>

        <h3 className="heading-secondary">Information We Collect</h3>
        <p className="paragraph">We collect information about you in the following ways:</p>
        <ul className="list-decimal list-inside mt-4">
          <li className="list-label">Information You Provide Directly:
            <dl className="list-description">Contact Information: When you contact us through our website (e.g., using a contact form), we may collect the following:
            <ul className="list-disc list-inside ml-2 mt-2">
                <li>First name</li>
                <li>Last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
            </ul>
            </dl>
          </li>
          <li className="list-label">Information Collected Automatically:
            <dl className="list-description">When you visit our website, we automatically collect certain information about your device and browsing activity, including:
            <ul className="list-none list-inside ml-2 mt-2">
                <li><strong>Geolocation Data:</strong> We may collect general location information based on your IP address.</li>
                <li><strong>Device and Usage Information:</strong> Information about your device, browser, and how you interact with our website.</li>
            </ul>
            </dl>
          </li>
        </ul>

        <h3 className="heading-secondary">How We Use Your Personal Information</h3>
        <p className="paragraph">We may use the Personal Information we collect for the following purposes:</p>
        <ul className="list-label list-inside mt-4">
          <li className="list-label">To Improve Our Website:
            <dl className="list-description">We use the data collected to understand how visitors use our website, identify trends, improve website performance and usability, and tailor content to better meet the needs of our audience.</dl>
          </li>
          <li className="list-label">To Personalize User Experiences:
            <dl className="list-description">We may use your Personal Information to personalize content and user experiences on our website.</dl>
          </li>
          <li className="list-label">To Connect You with Third-Party Service Providers:
            <dl className="list-description">We use the information you provide directly to match you with third-party contractors or service providers based on your indicated needs and preferences.</dl>
          </li>
        </ul>

        <h3 className="heading-secondary">Sharing of Your Personal Information</h3>
        <p className="paragraph">We may share your Personal Information with the following categories of third parties:</p>
        <ul className="list-label list-inside mt-4">
          <li className="list-label">Service Providers:
            <dl className="list-description">We share Personal Information with third-party service providers who perform services on our behalf. These service providers are contractually obligated to protect your Personal Information and use it only for the purposes for which we disclose it to them.</dl>
          </li>
          <li className="list-label">Third-Party Contractors:
            <dl className="list-description">We share your Contact Information and preferences with third-party contractors or service providers to facilitate connections based on your matched results.</dl>
          </li>
          <li className="list-label">Legal Compliance:
            <dl className="list-description">We may disclose your Personal Information to comply with applicable laws, regulations, legal processes, or governmental requests.</dl>
          </li>
        </ul>

        <h3 className="heading-secondary">Your Privacy Rights</h3>
        <p className="paragraph">Depending on your location, you may have certain rights regarding your Personal Information. These rights may include the right to:</p>
        <ul className="list-label list-inside mt-4">
          <li className="list-label">Right to Know:
            <dl className="list-description">Request information about the categories and specific pieces of Personal Information we have collected about you, the purposes for collecting it, and the categories of third parties with whom we share it.</dl>
          </li>
          <li className="list-label">Right to Access:
            <dl className="list-description">Request a copy of the Personal Information we have collected about you.</dl>
          </li> 
          <li className="list-label">Right to Correct:
            <dl className="list-description">Request that we correct inaccurate Personal Information we maintain about you.</dl>
          </li>
          <li className="list-label">Right to Delete:
            <dl className="list-description">Request that we delete Personal Information we have collected from you, subject to certain exceptions.</dl>
          </li>
        </ul>

        <h3 className="heading-secondary">Data Security</h3>
        <p className="paragraph">We take reasonable security measures designed to protect your Personal Information from loss, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

        <h3 className="heading-secondary">Data Retention</h3>
        <p className="paragraph">We will retain your Personal Information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

        <h3 className="heading-secondary">Children's Privacy</h3>
        <p className="paragraph">Our website is not intended for children under the age of 16, and we do not knowingly collect Personal Information from children under 16 without parental consent. If you are a parent or guardian and believe we have collected Personal Information from your child, please contact us immediately, and we will take steps to delete that information.</p>

        <h3 className="heading-secondary">Links to Other Websites</h3>
        <p className="paragraph">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these other websites and encourage you to review their privacy policies.</p>

        <h3 className="heading-secondary">Changes to this Privacy Policy</h3>
        <p className="paragraph">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post any changes on this page and update the "Effective Date" at the top of this policy. We encourage you to review this Privacy Policy periodically.</p>

        <h3 className="heading-secondary">Contact Us</h3>
        <p className="paragraph">If you have any questions about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:contact.fixr.com" className="text-accentColor underline">contact.fixr.com</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
