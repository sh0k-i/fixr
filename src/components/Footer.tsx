import { useAppContext } from "@/context/AppContext";

const Footer: React.FC = () => {
  const { contractor, services } = useAppContext();

  if (!contractor || !services) {
    return null; // Handle the case where data is not loaded yet
  }
  // Use dynamic links from contractor
  return (
    <footer className="bg-gray-100 ">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-24 py-16">
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-5">
          <div className="col-span-2 space-y-4">
            {/* logo */}
            <div className="">
              <a className="block" href="/">
                <img
                  src="/fixr-logo.png"
                  alt="Logo"
                  className="h-12 sm:h-14 lg:h-16"
                />
              </a>
            </div>

            <div className="max-w-xs section_description space-y-1">
              <p>123 Katipunan Street, Dumaguete City</p>
              <p>Negros Oriental, Philippines, 6201</p>
              <p>+6391234567890</p>
            </div>

            <ul className="mt-8 flex gap-6">
              {/* social links */}
              <li>
                <a
                  href="mailto:contact.fixr.com"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Gmail</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 32"
                    fill="none"
                    className="size-6"
                  >
                    <g clip-path="url(#clip0_156903_555)">
                      <path
                        d="M3.11937 28.4818H8.21025V16.1181L0.9375 10.6636V26.3C0.9375 27.5054 1.91387 28.4819 3.11937 28.4819V28.4818Z"
                        fill="currentColor"
                      />
                      <path
                        d="M25.6648 28.4818H30.7557C31.9612 28.4818 32.9375 27.5054 32.9375 26.2999V10.6636L25.6648 16.1181V28.4818Z"
                        fill="currentColor"
                      />
                      <path
                        d="M25.6648 6.66357V16.1181L32.9375 10.6636V7.75451C32.9375 5.05813 29.8594 3.51813 27.7012 5.13632L25.6648 6.66357Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.21021 16.1181V6.66357L16.9375 13.2091L25.6647 6.66357V16.1181L16.9375 22.6636L8.21021 16.1181Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.9375 7.75451V10.6636L8.21025 16.1181V6.66357L6.17387 5.13632C4.01562 3.51813 0.9375 5.05813 0.9375 7.75438V7.75451Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_156903_555">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.9375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/sh0k-i/fixr"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <p className="text-xs text-gray-500 pt-4">
              &copy; 2025. Fixr. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:col-span-3 sm:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/services"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Our Services{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/contact-us"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="/request-quotes"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Get Free Assessment{" "}
                  </a>
                </li>
              </ul>
            </div>



            <div className="space-y-6">
              <div>
                <p className="font-medium text-gray-900">Resources</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/faqs"
                      className="text-gray-700 transition hover:text-accentColor"
                    >
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/sitemap"
                      className="text-gray-700 transition hover:text-accentColor"
                    >
                      {" "}
                      Sitemap{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-gray-700 transition hover:text-accentColor"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/terms-of-service"
                      className="text-gray-700 transition hover:text-accentColor"
                    >
                      {" "}
                      Terms of Service{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="/filtered-services?category_id=2"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Bathroom Services
                  </a>
                </li>
                <li>
                  <a
                    href="/filtered-services?category_id=4"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Electrical & Lighting Services
                  </a>
                </li>
                <li>
                  <a
                    href="/filtered-services?category_id=6"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Flooring & Walls Services
                  </a>
                </li>
                <li>
                  <a
                    href="/filtered-services?category_id=1"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Kitchen Services
                  </a>
                </li>
                <li>
                  <a
                    href="/filtered-services?category_id=3"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Outdoor & Landscaping Services
                  </a>
                </li>
                <li>
                  <a
                    href="/filtered-services?category_id=7"
                    className="text-gray-700 transition hover:text-accentColor"
                  >
                    {" "}
                    Solar Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
