"use client";
import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";

const TermsOfService = () => {
  return (
    <div className="">
      <NavBar2 />
      <div className="fixed top-0 left-0 w-full h-[300px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top z-[-1]"></div>
      <div className="max-w-[85rem] mt-[100px] md:mt-[142px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 min-h-screen">
        <div className="text-left space-y-2 md:space-y-4">
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
              Terms of Use
            </li>
          </ol>
            <div className="text-left space-y-2 md:space-y-4">
            <div
              className="section_header pointer-events-none"
            >
              Terms of Use for <span className="text-accentColor">Fixr</span>
            </div>
          </div>
        </div>
        <h3 className="heading-secondary">Introduction</h3>
        <p className="paragraph">
          Welcome to our website. By accessing or using our website, you agree
          to comply with and be bound by these Terms of Use. Please read them
          carefully before using our services.
        </p>

        <h3 className="heading-secondary">Use of Our Website</h3>
        <p className="paragraph">
          You agree to use our website only for lawful purposes and in a way
          that does not infringe the rights of others or restrict or inhibit
          their use and enjoyment of the website. Prohibited behavior includes
          harassing or causing distress to any other user, transmitting obscene
          or offensive content, or disrupting the normal flow of dialogue within
          our website.
        </p>

        <h3 className="heading-secondary">Intellectual Property</h3>
        <p className="paragraph">
          All content on this website, including text, graphics, logos, and
          images, is the property of Fixr or its licensors and is protected by
          copyright and other intellectual property laws. You may not reproduce,
          distribute, or create derivative works from any content on this
          website without prior written permission.
        </p>

        <h3 className="heading-secondary">Limitation of Liability</h3>
        <p className="paragraph">
          We strive to ensure that the information on our website is accurate
          and up-to-date. However, we do not guarantee the completeness,
          accuracy, or reliability of any information. Your use of the website
          is at your own risk, and we are not liable for any damages arising
          from your use of the website.
        </p>

        <h3 className="heading-secondary">User Responsibilities</h3>
        <ul className="list-disc list-inside ml-2 mt-2">
          <li>
            You are responsible for maintaining the confidentiality of any
            account credentials you use on our website.
          </li>
          <li>
            You agree to notify us immediately of any unauthorized use of your
            account or any other breach of security.
          </li>
          <li>
            You must not attempt to gain unauthorized access to any part of our
            website or its systems.
          </li>
        </ul>

        <h3 className="heading-secondary">Changes to These Terms</h3>
        <p className="paragraph">
          We may update these Terms of Use from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We encourage you to review these terms periodically for any
          updates.
        </p>

        <h3 className="heading-secondary">Termination</h3>
        <p className="paragraph">
          We reserve the right to terminate or suspend your access to our
          website at any time, without notice, for any reason, including if you
          violate these Terms of Use.
        </p>

        <h3 className="heading-secondary">Contact Us</h3>
        <p className="paragraph">
          If you have any questions about these Terms of Use, please contact us
          at{" "}
          <a
            href="mailto:contact.fixr.com"
            className="text-accentColor underline"
          >
            contact.fixr.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
