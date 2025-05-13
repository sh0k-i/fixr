import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import BlurFade from "@/components/ui/blur-fade";

const AboutUs = () => {
  return (
    <div>
      <NavBar2 />
      <div className="h-[92px] md:h-[180px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top">
      </div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20  space-y-12 sm:space-y-20 lg:space-y-24">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-12 pointer-events-none">
          {/* Photo - First on mobile, right on desktop */}
          <BlurFade
            delay={3 * 0.15}
            yOffset={0}
            className="max-w-xl md:order-2 mb-8 md:mb-0"
          >
            <img
              className="rounded-xl"
              src="/images/team.jpg"
              alt="About Us Image"
            />
          </BlurFade>

          {/* Content - Second on mobile, left on desktop */}
          <BlurFade delay={2 * 0.15} inView yOffset={0} className="md:order-1">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <div className="max-w-xl space-y-2 md:space-y-4">
                  <p className="text-accentColor font-semibold text-lg">
                    About Us
                  </p>
                  <div>
                    <p className="section_header">Our Story</p>
                  </div>

                  <div className="space-y-2 md:space-y-3 section_description">
                    <p>
                      At Fixr, we're redefining home improvement in the
                      Philippines—one project at a time. Born in the heart of
                      Dumaguete, Negros Oriental, in 2015, our journey began
                      with a simple mission: to connect homeowners with trusted
                      local professionals effortlessly.
                    </p>
                    <p>
                      What started as a small team of contractors and tech
                      enthusiasts has grown into a nationwide network of skilled
                      partners, serving thousands of happy homeowners.
                    </p>
                  </div>
                </div>
                <div className="max-w-xl space-y-2 md:space-y-2">
                  <p className="font-semibold text-lg sm:text-xl text-gray-800">
                    Mission
                  </p>
                  <div className="space-y-2 md:space-y-3 section_description">
                    <p>
                      To empower homeowners and contractors through technology,
                      creating seamless connections that transform houses into
                      dream homes. We prioritize transparency, affordability,
                      and trust, ensuring every project—big or small—is
                      stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
        {/* End Grid */}

        {/* Icon Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 ">
          <BlurFade
            delay={4 * 0.15}
            className="group flex gap-y-6 size-full bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-default"
          >
            <svg
              className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800 dark:text-white">
                  Local Expertise
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  From our Dumaguete roots, we’ve expanded to serve every major
                  Philippine city.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade
            delay={5 * 0.15}
            inView
            className="group flex gap-y-6 size-full bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-default"
          >
            <svg
              className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800 dark:text-white">
                  Vetted Professionals
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  Every contractor undergoes rigorous background checks and
                  training.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade
            delay={6 * 0.15}
            className="group flex gap-y-6 size-full bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-default"
          >
            <svg
              className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>

            <div>
              <div>
                <h3 className="block font-bold text-gray-800 dark:text-white">
                  Customer-Centric
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  Our 24/7 support team ensures you’re never alone in your
                  renovation journey.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
        {/* End Icon Section */}

        {/* Meet the team */}
        <div className="space-y-6 sm:space-y-8">
          <BlurFade
            delay={1 * 0.15}
            inView
            yOffset={0} className="space-y-2 md:space-y-4 text-center">
            <h2 className="section_header">
              Meet the <span className="text-accentColor">Team</span>
            </h2>
            <p className="section_description">
              Meet the dedicated team behind Fixr, a group of passionate minds
              committed to transforming the home improvement landscape in the
              Philippines.
            </p>
          </BlurFade>

          {/* Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlurFade
            delay={3 * 0.15}
            inView className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Tricia Angela Pastrano
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                  Developer
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I am an ambitious workaholic, but apart from that, pretty simple
                person.
              </p>

              {/* <!-- Social Brands --> */}
              <div className="mt-3 space-x-1">
                {/* facebook */}
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_156893_455)">
                      <path
                        d="M16 32.0022C24.8366 32.0022 32 24.8388 32 16.0022C32 7.16564 24.8366 0.00219727 16 0.00219727C7.16344 0.00219727 0 7.16564 0 16.0022C0 24.8388 7.16344 32.0022 16 32.0022Z"
                        fill="#1977F3"
                      />
                      <path
                        d="M22.2281 20.6283L22.9369 16.0023H18.4998V13.0007C18.4998 11.7362 19.1185 10.5009 21.1076 10.5009H23.1259V6.56337C23.1259 6.56337 21.2943 6.25061 19.5438 6.25061C15.8897 6.25061 13.5002 8.46464 13.5002 12.4765V16.0023H9.43665V20.6283H13.5002V31.8088C14.3147 31.937 15.1495 32.0023 16 32.0023C16.8505 32.0023 17.6853 31.9348 18.4998 31.8088V20.6283H22.2281Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_156893_455">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                {/* gmail */}
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_11766_122209)">
                      <path
                        d="M3.11931 28.4817H8.21019V16.1181L0.937439 10.6636V26.3C0.937439 27.5054 1.91381 28.4819 3.11931 28.4819V28.4817Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M25.6647 28.4817H30.7556C31.961 28.4817 32.9374 27.5054 32.9374 26.2999V10.6636L25.6647 16.1181V28.4817Z"
                        fill="#34A853"
                      />
                      <path
                        d="M25.6647 6.66356V16.1181L32.9374 10.6636V7.7545C32.9374 5.05812 29.8593 3.51812 27.701 5.13631L25.6647 6.66356Z"
                        fill="#FBBC04"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.21021 16.1181V6.66356L16.9375 13.2091L25.6647 6.66356V16.1181L16.9375 22.6636L8.21021 16.1181Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M0.937439 7.7545V10.6636L8.21019 16.1181V6.66356L6.17381 5.13631C4.01556 3.51813 0.937439 5.05813 0.937439 7.75438V7.7545Z"
                        fill="#C5221F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11766_122209">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.937439)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                {/* instagram */}
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4132_5799)">
                      <path
                        d="M16.0078 0.242416C9.42808 0.242416 7.50377 0.249204 7.12972 0.280233C5.77946 0.392472 4.93925 0.605072 4.02388 1.06082C3.31845 1.41111 2.7621 1.81716 2.21303 2.38635C1.21306 3.42438 0.607014 4.70143 0.387627 6.21945C0.280963 6.9564 0.249934 7.10669 0.243631 10.8709C0.241207 12.1257 0.243631 13.777 0.243631 15.992C0.243631 22.5663 0.250904 24.4887 0.282418 24.862C0.391505 26.1759 0.59756 27.0026 1.03391 27.9068C1.86782 29.6376 3.4605 30.937 5.33681 31.4218C5.98649 31.5891 6.70404 31.6812 7.62523 31.7249C8.01552 31.7418 11.9936 31.7539 15.9741 31.7539C19.9545 31.7539 23.935 31.7491 24.3156 31.7297C25.3823 31.6795 26.0016 31.5964 26.6865 31.4194C28.5749 30.9322 30.1385 29.6522 30.9894 27.8971C31.4172 27.0147 31.6342 26.1565 31.7324 24.9112C31.7537 24.6397 31.7627 20.3109 31.7627 15.9879C31.7627 11.6641 31.753 7.34329 31.7316 7.07179C31.6323 5.80637 31.4153 4.95549 30.9736 4.05612C30.6112 3.3199 30.2088 2.7701 29.6246 2.20793C28.5819 1.21208 27.3068 0.606042 25.7873 0.386897C25.0511 0.280476 24.9045 0.248962 21.1373 0.242416H16.0078Z"
                        fill="url(#paint0_radial_4132_5799)"
                      />
                      <path
                        d="M16.0078 0.242416C9.42808 0.242416 7.50377 0.249204 7.12972 0.280233C5.77946 0.392472 4.93925 0.605072 4.02388 1.06082C3.31845 1.41111 2.7621 1.81716 2.21303 2.38635C1.21306 3.42438 0.607014 4.70143 0.387627 6.21945C0.280963 6.9564 0.249934 7.10669 0.243631 10.8709C0.241207 12.1257 0.243631 13.777 0.243631 15.992C0.243631 22.5663 0.250904 24.4887 0.282418 24.862C0.391505 26.1759 0.59756 27.0026 1.03391 27.9068C1.86782 29.6376 3.4605 30.937 5.33681 31.4218C5.98649 31.5891 6.70404 31.6812 7.62523 31.7249C8.01552 31.7418 11.9936 31.7539 15.9741 31.7539C19.9545 31.7539 23.935 31.7491 24.3156 31.7297C25.3823 31.6795 26.0016 31.5964 26.6865 31.4194C28.5749 30.9322 30.1385 29.6522 30.9894 27.8971C31.4172 27.0147 31.6342 26.1565 31.7324 24.9112C31.7537 24.6397 31.7627 20.3109 31.7627 15.9879C31.7627 11.6641 31.753 7.34329 31.7316 7.07179C31.6323 5.80637 31.4153 4.95549 30.9736 4.05612C30.6112 3.3199 30.2088 2.7701 29.6246 2.20793C28.5819 1.21208 27.3068 0.606042 25.7873 0.386897C25.0511 0.280476 24.9045 0.248962 21.1373 0.242416H16.0078Z"
                        fill="url(#paint1_radial_4132_5799)"
                      />
                      <path
                        d="M16.0005 4.3635C12.8404 4.3635 12.4438 4.37732 11.2026 4.4338C9.96384 4.49053 9.11829 4.68664 8.37843 4.97439C7.61312 5.2716 6.96393 5.66916 6.31716 6.31617C5.66991 6.96294 5.27235 7.61213 4.97417 8.3772C4.6857 9.1173 4.48934 9.96309 4.43358 11.2014C4.37807 12.4425 4.36353 12.8394 4.36353 15.9995C4.36353 19.1597 4.37759 19.555 4.43383 20.7962C4.49079 22.035 4.68691 22.8805 4.97442 23.6204C5.27186 24.3857 5.66943 25.0349 6.31644 25.6816C6.96296 26.3289 7.61215 26.7274 8.37698 27.0246C9.11732 27.3124 9.96311 27.5085 11.2016 27.5652C12.4428 27.6217 12.8391 27.6355 15.9991 27.6355C19.1594 27.6355 19.5548 27.6217 20.796 27.5652C22.0347 27.5085 22.8813 27.3124 23.6216 27.0246C24.3867 26.7274 25.0349 26.3289 25.6814 25.6816C26.3287 25.0349 26.7262 24.3857 27.0244 23.6206C27.3105 22.8805 27.5068 22.0347 27.565 20.7965C27.6208 19.5553 27.6353 19.1597 27.6353 15.9995C27.6353 12.8394 27.6208 12.4428 27.565 11.2016C27.5068 9.96285 27.3105 9.1173 27.0244 8.37744C26.7262 7.61213 26.3287 6.96294 25.6814 6.31617C25.0342 5.66892 24.3869 5.27135 23.6209 4.97439C22.8791 4.68664 22.0331 4.49053 20.7943 4.4338C19.5531 4.37732 19.158 4.3635 15.9969 4.3635H16.0005ZM14.9567 6.46041C15.2665 6.45992 15.6122 6.46041 16.0005 6.46041C19.1073 6.46041 19.4756 6.47156 20.7024 6.52732C21.8369 6.57919 22.4527 6.76876 22.8628 6.92803C23.4059 7.13893 23.793 7.39105 24.2 7.79831C24.6073 8.20557 24.8594 8.59343 25.0708 9.13645C25.23 9.54613 25.4199 10.1619 25.4715 11.2964C25.5272 12.523 25.5394 12.8915 25.5394 15.9968C25.5394 19.1022 25.5272 19.4707 25.4715 20.6973C25.4196 21.8318 25.23 22.4476 25.0708 22.8572C24.8599 23.4003 24.6073 23.7869 24.2 24.1939C23.7928 24.6012 23.4061 24.8533 22.8628 25.0642C22.4532 25.2242 21.8369 25.4133 20.7024 25.4652C19.4758 25.5209 19.1073 25.533 16.0005 25.533C12.8934 25.533 12.5252 25.5209 11.2986 25.4652C10.1641 25.4128 9.54834 25.2232 9.13793 25.064C8.59491 24.8531 8.20705 24.601 7.79978 24.1937C7.39252 23.7864 7.14041 23.3995 6.92902 22.8563C6.76976 22.4466 6.57994 21.8309 6.52831 20.6963C6.47255 19.4697 6.4614 19.1012 6.4614 15.9939C6.4614 12.8866 6.47255 12.5201 6.52831 11.2935C6.58019 10.159 6.76976 9.54322 6.92902 9.13305C7.13993 8.59004 7.39252 8.20217 7.79978 7.79491C8.20705 7.38765 8.59491 7.13554 9.13793 6.92415C9.5481 6.76416 10.1641 6.57507 11.2986 6.52295C12.372 6.47447 12.788 6.45992 14.9567 6.4575V6.46041ZM22.2117 8.39247C21.4408 8.39247 20.8154 9.01718 20.8154 9.78831C20.8154 10.5592 21.4408 11.1846 22.2117 11.1846C22.9826 11.1846 23.608 10.5592 23.608 9.78831C23.608 9.01742 22.9826 8.39199 22.2117 8.39199V8.39247ZM16.0005 10.0239C12.7005 10.0239 10.0249 12.6995 10.0249 15.9995C10.0249 19.2995 12.7005 21.9739 16.0005 21.9739C19.3005 21.9739 21.9751 19.2995 21.9751 15.9995C21.9751 12.6995 19.3003 10.0239 16.0003 10.0239H16.0005ZM16.0005 12.1208C18.1425 12.1208 19.8792 13.8573 19.8792 15.9995C19.8792 18.1415 18.1425 19.8782 16.0005 19.8782C13.8583 19.8782 12.1218 18.1415 12.1218 15.9995C12.1218 13.8573 13.8583 12.1208 16.0005 12.1208Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_4132_5799"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(8.61513 34.181) rotate(-90) scale(31.2303 29.0545)"
                      >
                        <stop stop-color="#FFDD55" />
                        <stop offset="0.1" stop-color="#FFDD55" />
                        <stop offset="0.5" stop-color="#FF543E" />
                        <stop offset="1" stop-color="#C837AB" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_4132_5799"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-5.03723 2.51245) rotate(78.6776) scale(13.9602 57.559)"
                      >
                        <stop stop-color="#3771C8" />
                        <stop offset="0.128" stop-color="#3771C8" />
                        <stop
                          offset="1"
                          stop-color="#6600FF"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <clipPath id="clip0_4132_5799">
                        <rect width="32" height="31.999" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              {/* <!-- End Social Brands --> */}
            </BlurFade>
            {/* <!-- End Col --> */}

            <BlurFade
            delay={4 * 0.15}
            inView className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Aki Maeda
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Developer
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I am a passionate musician with a strong background in music and the creative arts
              </p>

              {/* <!-- Social Brands --> */}
              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_156893_455)">
                      <path
                        d="M16 32.0022C24.8366 32.0022 32 24.8388 32 16.0022C32 7.16564 24.8366 0.00219727 16 0.00219727C7.16344 0.00219727 0 7.16564 0 16.0022C0 24.8388 7.16344 32.0022 16 32.0022Z"
                        fill="#1977F3"
                      />
                      <path
                        d="M22.2281 20.6283L22.9369 16.0023H18.4998V13.0007C18.4998 11.7362 19.1185 10.5009 21.1076 10.5009H23.1259V6.56337C23.1259 6.56337 21.2943 6.25061 19.5438 6.25061C15.8897 6.25061 13.5002 8.46464 13.5002 12.4765V16.0023H9.43665V20.6283H13.5002V31.8088C14.3147 31.937 15.1495 32.0023 16 32.0023C16.8505 32.0023 17.6853 31.9348 18.4998 31.8088V20.6283H22.2281Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_156893_455">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <a
                    className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_11766_122209)">
                        <path
                          d="M3.11931 28.4817H8.21019V16.1181L0.937439 10.6636V26.3C0.937439 27.5054 1.91381 28.4819 3.11931 28.4819V28.4817Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M25.6647 28.4817H30.7556C31.961 28.4817 32.9374 27.5054 32.9374 26.2999V10.6636L25.6647 16.1181V28.4817Z"
                          fill="#34A853"
                        />
                        <path
                          d="M25.6647 6.66356V16.1181L32.9374 10.6636V7.7545C32.9374 5.05812 29.8593 3.51812 27.701 5.13631L25.6647 6.66356Z"
                          fill="#FBBC04"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.21021 16.1181V6.66356L16.9375 13.2091L25.6647 6.66356V16.1181L16.9375 22.6636L8.21021 16.1181Z"
                          fill="#EA4335"
                        />
                        <path
                          d="M0.937439 7.7545V10.6636L8.21019 16.1181V6.66356L6.17381 5.13631C4.01556 3.51813 0.937439 5.05813 0.937439 7.75438V7.7545Z"
                          fill="#C5221F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11766_122209">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0.937439)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </a>

                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <a
                    className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_4132_5799)">
                        <path
                          d="M16.0078 0.242416C9.42808 0.242416 7.50377 0.249204 7.12972 0.280233C5.77946 0.392472 4.93925 0.605072 4.02388 1.06082C3.31845 1.41111 2.7621 1.81716 2.21303 2.38635C1.21306 3.42438 0.607014 4.70143 0.387627 6.21945C0.280963 6.9564 0.249934 7.10669 0.243631 10.8709C0.241207 12.1257 0.243631 13.777 0.243631 15.992C0.243631 22.5663 0.250904 24.4887 0.282418 24.862C0.391505 26.1759 0.59756 27.0026 1.03391 27.9068C1.86782 29.6376 3.4605 30.937 5.33681 31.4218C5.98649 31.5891 6.70404 31.6812 7.62523 31.7249C8.01552 31.7418 11.9936 31.7539 15.9741 31.7539C19.9545 31.7539 23.935 31.7491 24.3156 31.7297C25.3823 31.6795 26.0016 31.5964 26.6865 31.4194C28.5749 30.9322 30.1385 29.6522 30.9894 27.8971C31.4172 27.0147 31.6342 26.1565 31.7324 24.9112C31.7537 24.6397 31.7627 20.3109 31.7627 15.9879C31.7627 11.6641 31.753 7.34329 31.7316 7.07179C31.6323 5.80637 31.4153 4.95549 30.9736 4.05612C30.6112 3.3199 30.2088 2.7701 29.6246 2.20793C28.5819 1.21208 27.3068 0.606042 25.7873 0.386897C25.0511 0.280476 24.9045 0.248962 21.1373 0.242416H16.0078Z"
                          fill="url(#paint0_radial_4132_5799)"
                        />
                        <path
                          d="M16.0078 0.242416C9.42808 0.242416 7.50377 0.249204 7.12972 0.280233C5.77946 0.392472 4.93925 0.605072 4.02388 1.06082C3.31845 1.41111 2.7621 1.81716 2.21303 2.38635C1.21306 3.42438 0.607014 4.70143 0.387627 6.21945C0.280963 6.9564 0.249934 7.10669 0.243631 10.8709C0.241207 12.1257 0.243631 13.777 0.243631 15.992C0.243631 22.5663 0.250904 24.4887 0.282418 24.862C0.391505 26.1759 0.59756 27.0026 1.03391 27.9068C1.86782 29.6376 3.4605 30.937 5.33681 31.4218C5.98649 31.5891 6.70404 31.6812 7.62523 31.7249C8.01552 31.7418 11.9936 31.7539 15.9741 31.7539C19.9545 31.7539 23.935 31.7491 24.3156 31.7297C25.3823 31.6795 26.0016 31.5964 26.6865 31.4194C28.5749 30.9322 30.1385 29.6522 30.9894 27.8971C31.4172 27.0147 31.6342 26.1565 31.7324 24.9112C31.7537 24.6397 31.7627 20.3109 31.7627 15.9879C31.7627 11.6641 31.753 7.34329 31.7316 7.07179C31.6323 5.80637 31.4153 4.95549 30.9736 4.05612C30.6112 3.3199 30.2088 2.7701 29.6246 2.20793C28.5819 1.21208 27.3068 0.606042 25.7873 0.386897C25.0511 0.280476 24.9045 0.248962 21.1373 0.242416H16.0078Z"
                          fill="url(#paint1_radial_4132_5799)"
                        />
                        <path
                          d="M16.0005 4.3635C12.8404 4.3635 12.4438 4.37732 11.2026 4.4338C9.96384 4.49053 9.11829 4.68664 8.37843 4.97439C7.61312 5.2716 6.96393 5.66916 6.31716 6.31617C5.66991 6.96294 5.27235 7.61213 4.97417 8.3772C4.6857 9.1173 4.48934 9.96309 4.43358 11.2014C4.37807 12.4425 4.36353 12.8394 4.36353 15.9995C4.36353 19.1597 4.37759 19.555 4.43383 20.7962C4.49079 22.035 4.68691 22.8805 4.97442 23.6204C5.27186 24.3857 5.66943 25.0349 6.31644 25.6816C6.96296 26.3289 7.61215 26.7274 8.37698 27.0246C9.11732 27.3124 9.96311 27.5085 11.2016 27.5652C12.4428 27.6217 12.8391 27.6355 15.9991 27.6355C19.1594 27.6355 19.5548 27.6217 20.796 27.5652C22.0347 27.5085 22.8813 27.3124 23.6216 27.0246C24.3867 26.7274 25.0349 26.3289 25.6814 25.6816C26.3287 25.0349 26.7262 24.3857 27.0244 23.6206C27.3105 22.8805 27.5068 22.0347 27.565 20.7965C27.6208 19.5553 27.6353 19.1597 27.6353 15.9995C27.6353 12.8394 27.6208 12.4428 27.565 11.2016C27.5068 9.96285 27.3105 9.1173 27.0244 8.37744C26.7262 7.61213 26.3287 6.96294 25.6814 6.31617C25.0342 5.66892 24.3869 5.27135 23.6209 4.97439C22.8791 4.68664 22.0331 4.49053 20.7943 4.4338C19.5531 4.37732 19.158 4.3635 15.9969 4.3635H16.0005ZM14.9567 6.46041C15.2665 6.45992 15.6122 6.46041 16.0005 6.46041C19.1073 6.46041 19.4756 6.47156 20.7024 6.52732C21.8369 6.57919 22.4527 6.76876 22.8628 6.92803C23.4059 7.13893 23.793 7.39105 24.2 7.79831C24.6073 8.20557 24.8594 8.59343 25.0708 9.13645C25.23 9.54613 25.4199 10.1619 25.4715 11.2964C25.5272 12.523 25.5394 12.8915 25.5394 15.9968C25.5394 19.1022 25.5272 19.4707 25.4715 20.6973C25.4196 21.8318 25.23 22.4476 25.0708 22.8572C24.8599 23.4003 24.6073 23.7869 24.2 24.1939C23.7928 24.6012 23.4061 24.8533 22.8628 25.0642C22.4532 25.2242 21.8369 25.4133 20.7024 25.4652C19.4758 25.5209 19.1073 25.533 16.0005 25.533C12.8934 25.533 12.5252 25.5209 11.2986 25.4652C10.1641 25.4128 9.54834 25.2232 9.13793 25.064C8.59491 24.8531 8.20705 24.601 7.79978 24.1937C7.39252 23.7864 7.14041 23.3995 6.92902 22.8563C6.76976 22.4466 6.57994 21.8309 6.52831 20.6963C6.47255 19.4697 6.4614 19.1012 6.4614 15.9939C6.4614 12.8866 6.47255 12.5201 6.52831 11.2935C6.58019 10.159 6.76976 9.54322 6.92902 9.13305C7.13993 8.59004 7.39252 8.20217 7.79978 7.79491C8.20705 7.38765 8.59491 7.13554 9.13793 6.92415C9.5481 6.76416 10.1641 6.57507 11.2986 6.52295C12.372 6.47447 12.788 6.45992 14.9567 6.4575V6.46041ZM22.2117 8.39247C21.4408 8.39247 20.8154 9.01718 20.8154 9.78831C20.8154 10.5592 21.4408 11.1846 22.2117 11.1846C22.9826 11.1846 23.608 10.5592 23.608 9.78831C23.608 9.01742 22.9826 8.39199 22.2117 8.39199V8.39247ZM16.0005 10.0239C12.7005 10.0239 10.0249 12.6995 10.0249 15.9995C10.0249 19.2995 12.7005 21.9739 16.0005 21.9739C19.3005 21.9739 21.9751 19.2995 21.9751 15.9995C21.9751 12.6995 19.3003 10.0239 16.0003 10.0239H16.0005ZM16.0005 12.1208C18.1425 12.1208 19.8792 13.8573 19.8792 15.9995C19.8792 18.1415 18.1425 19.8782 16.0005 19.8782C13.8583 19.8782 12.1218 18.1415 12.1218 15.9995C12.1218 13.8573 13.8583 12.1208 16.0005 12.1208Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_4132_5799"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(8.61513 34.181) rotate(-90) scale(31.2303 29.0545)"
                        >
                          <stop stop-color="#FFDD55" />
                          <stop offset="0.1" stop-color="#FFDD55" />
                          <stop offset="0.5" stop-color="#FF543E" />
                          <stop offset="1" stop-color="#C837AB" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_4132_5799"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(-5.03723 2.51245) rotate(78.6776) scale(13.9602 57.559)"
                        >
                          <stop stop-color="#3771C8" />
                          <stop offset="0.128" stop-color="#3771C8" />
                          <stop
                            offset="1"
                            stop-color="#6600FF"
                            stop-opacity="0"
                          />
                        </radialGradient>
                        <clipPath id="clip0_4132_5799">
                          <rect width="32" height="31.999" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </a>
              </div>
              {/* <!-- End Social Brands --> */}
            </BlurFade>
            {/* <!-- End Col --> */}

            <BlurFade
            delay={5 * 0.15}
            inView className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  Katrina Juanero 
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Developer
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                I am an ambitious workaholic, but apart from that, pretty simple
                person.
              </p>

              {/* <!-- Social Brands --> */}
              <div className="mt-3 space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_156893_455)">
                      <path
                        d="M16 32.0022C24.8366 32.0022 32 24.8388 32 16.0022C32 7.16564 24.8366 0.00219727 16 0.00219727C7.16344 0.00219727 0 7.16564 0 16.0022C0 24.8388 7.16344 32.0022 16 32.0022Z"
                        fill="#1977F3"
                      />
                      <path
                        d="M22.2281 20.6283L22.9369 16.0023H18.4998V13.0007C18.4998 11.7362 19.1185 10.5009 21.1076 10.5009H23.1259V6.56337C23.1259 6.56337 21.2943 6.25061 19.5438 6.25061C15.8897 6.25061 13.5002 8.46464 13.5002 12.4765V16.0023H9.43665V20.6283H13.5002V31.8088C14.3147 31.937 15.1495 32.0023 16 32.0023C16.8505 32.0023 17.6853 31.9348 18.4998 31.8088V20.6283H22.2281Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_156893_455">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_11766_122209)">
                      <path
                        d="M3.11931 28.4817H8.21019V16.1181L0.937439 10.6636V26.3C0.937439 27.5054 1.91381 28.4819 3.11931 28.4819V28.4817Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M25.6647 28.4817H30.7556C31.961 28.4817 32.9374 27.5054 32.9374 26.2999V10.6636L25.6647 16.1181V28.4817Z"
                        fill="#34A853"
                      />
                      <path
                        d="M25.6647 6.66356V16.1181L32.9374 10.6636V7.7545C32.9374 5.05812 29.8593 3.51812 27.701 5.13631L25.6647 6.66356Z"
                        fill="#FBBC04"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.21021 16.1181V6.66356L16.9375 13.2091L25.6647 6.66356V16.1181L16.9375 22.6636L8.21021 16.1181Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M0.937439 7.7545V10.6636L8.21019 16.1181V6.66356L6.17381 5.13631C4.01556 3.51813 0.937439 5.05813 0.937439 7.75438V7.7545Z"
                        fill="#C5221F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11766_122209">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.937439)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4132_5799)">
                      <path
                        d="M16.0078 0.242416C9.42808 0.242416 7.50377 0.249204 7.12972 0.280233C5.77946 0.392472 4.93925 0.605072 4.02388 1.06082C3.31845 1.41111 2.7621 1.81716 2.21303 2.38635C1.21306 3.42438 0.607014 4.70143 0.387627 6.21945C0.280963 6.9564 0.249934 7.10669 0.243631 10.8709C0.241207 12.1257 0.243631 13.777 0.243631 15.992C0.243631 22.5663 0.250904 24.4887 0.282418 24.862C0.391505 26.1759 0.59756 27.0026 1.03391 27.9068C1.86782 29.6376 3.4605 30.937 5.33681 31.4218C5.98649 31.5891 6.70404 31.6812 7.62523 31.7249C8.01552 31.7418 11.9936 31.7539 15.9741 31.7539C19.9545 31.7539 23.935 31.7491 24.3156 31.7297C25.3823 31.6795 26.0016 31.5964 26.6865 31.4194C28.5749 30.9322 30.1385 29.6522 30.9894 27.8971C31.4172 27.0147 31.6342 26.1565 31.7324 24.9112C31.7537 24.6397 31.7627 20.3109 31.7627 15.9879C31.7627 11.6641 31.753 7.34329 31.7316 7.07179C31.6323 5.80637 31.4153 4.95549 30.9736 4.05612C30.6112 3.3199 30.2088 2.7701 29.6246 2.20793C28.5819 1.21208 27.3068 0.606042 25.7873 0.386897C25.0511 0.280476 24.9045 0.248962 21.1373 0.242416H16.0078Z"
                        fill="url(#paint0_radial_4132_5799)"
                      />
                      <path
                        d="M16.0078 0.242416C9.42808 0.242416 7.50377 0.249204 7.12972 0.280233C5.77946 0.392472 4.93925 0.605072 4.02388 1.06082C3.31845 1.41111 2.7621 1.81716 2.21303 2.38635C1.21306 3.42438 0.607014 4.70143 0.387627 6.21945C0.280963 6.9564 0.249934 7.10669 0.243631 10.8709C0.241207 12.1257 0.243631 13.777 0.243631 15.992C0.243631 22.5663 0.250904 24.4887 0.282418 24.862C0.391505 26.1759 0.59756 27.0026 1.03391 27.9068C1.86782 29.6376 3.4605 30.937 5.33681 31.4218C5.98649 31.5891 6.70404 31.6812 7.62523 31.7249C8.01552 31.7418 11.9936 31.7539 15.9741 31.7539C19.9545 31.7539 23.935 31.7491 24.3156 31.7297C25.3823 31.6795 26.0016 31.5964 26.6865 31.4194C28.5749 30.9322 30.1385 29.6522 30.9894 27.8971C31.4172 27.0147 31.6342 26.1565 31.7324 24.9112C31.7537 24.6397 31.7627 20.3109 31.7627 15.9879C31.7627 11.6641 31.753 7.34329 31.7316 7.07179C31.6323 5.80637 31.4153 4.95549 30.9736 4.05612C30.6112 3.3199 30.2088 2.7701 29.6246 2.20793C28.5819 1.21208 27.3068 0.606042 25.7873 0.386897C25.0511 0.280476 24.9045 0.248962 21.1373 0.242416H16.0078Z"
                        fill="url(#paint1_radial_4132_5799)"
                      />
                      <path
                        d="M16.0005 4.3635C12.8404 4.3635 12.4438 4.37732 11.2026 4.4338C9.96384 4.49053 9.11829 4.68664 8.37843 4.97439C7.61312 5.2716 6.96393 5.66916 6.31716 6.31617C5.66991 6.96294 5.27235 7.61213 4.97417 8.3772C4.6857 9.1173 4.48934 9.96309 4.43358 11.2014C4.37807 12.4425 4.36353 12.8394 4.36353 15.9995C4.36353 19.1597 4.37759 19.555 4.43383 20.7962C4.49079 22.035 4.68691 22.8805 4.97442 23.6204C5.27186 24.3857 5.66943 25.0349 6.31644 25.6816C6.96296 26.3289 7.61215 26.7274 8.37698 27.0246C9.11732 27.3124 9.96311 27.5085 11.2016 27.5652C12.4428 27.6217 12.8391 27.6355 15.9991 27.6355C19.1594 27.6355 19.5548 27.6217 20.796 27.5652C22.0347 27.5085 22.8813 27.3124 23.6216 27.0246C24.3867 26.7274 25.0349 26.3289 25.6814 25.6816C26.3287 25.0349 26.7262 24.3857 27.0244 23.6206C27.3105 22.8805 27.5068 22.0347 27.565 20.7965C27.6208 19.5553 27.6353 19.1597 27.6353 15.9995C27.6353 12.8394 27.6208 12.4428 27.565 11.2016C27.5068 9.96285 27.3105 9.1173 27.0244 8.37744C26.7262 7.61213 26.3287 6.96294 25.6814 6.31617C25.0342 5.66892 24.3869 5.27135 23.6209 4.97439C22.8791 4.68664 22.0331 4.49053 20.7943 4.4338C19.5531 4.37732 19.158 4.3635 15.9969 4.3635H16.0005ZM14.9567 6.46041C15.2665 6.45992 15.6122 6.46041 16.0005 6.46041C19.1073 6.46041 19.4756 6.47156 20.7024 6.52732C21.8369 6.57919 22.4527 6.76876 22.8628 6.92803C23.4059 7.13893 23.793 7.39105 24.2 7.79831C24.6073 8.20557 24.8594 8.59343 25.0708 9.13645C25.23 9.54613 25.4199 10.1619 25.4715 11.2964C25.5272 12.523 25.5394 12.8915 25.5394 15.9968C25.5394 19.1022 25.5272 19.4707 25.4715 20.6973C25.4196 21.8318 25.23 22.4476 25.0708 22.8572C24.8599 23.4003 24.6073 23.7869 24.2 24.1939C23.7928 24.6012 23.4061 24.8533 22.8628 25.0642C22.4532 25.2242 21.8369 25.4133 20.7024 25.4652C19.4758 25.5209 19.1073 25.533 16.0005 25.533C12.8934 25.533 12.5252 25.5209 11.2986 25.4652C10.1641 25.4128 9.54834 25.2232 9.13793 25.064C8.59491 24.8531 8.20705 24.601 7.79978 24.1937C7.39252 23.7864 7.14041 23.3995 6.92902 22.8563C6.76976 22.4466 6.57994 21.8309 6.52831 20.6963C6.47255 19.4697 6.4614 19.1012 6.4614 15.9939C6.4614 12.8866 6.47255 12.5201 6.52831 11.2935C6.58019 10.159 6.76976 9.54322 6.92902 9.13305C7.13993 8.59004 7.39252 8.20217 7.79978 7.79491C8.20705 7.38765 8.59491 7.13554 9.13793 6.92415C9.5481 6.76416 10.1641 6.57507 11.2986 6.52295C12.372 6.47447 12.788 6.45992 14.9567 6.4575V6.46041ZM22.2117 8.39247C21.4408 8.39247 20.8154 9.01718 20.8154 9.78831C20.8154 10.5592 21.4408 11.1846 22.2117 11.1846C22.9826 11.1846 23.608 10.5592 23.608 9.78831C23.608 9.01742 22.9826 8.39199 22.2117 8.39199V8.39247ZM16.0005 10.0239C12.7005 10.0239 10.0249 12.6995 10.0249 15.9995C10.0249 19.2995 12.7005 21.9739 16.0005 21.9739C19.3005 21.9739 21.9751 19.2995 21.9751 15.9995C21.9751 12.6995 19.3003 10.0239 16.0003 10.0239H16.0005ZM16.0005 12.1208C18.1425 12.1208 19.8792 13.8573 19.8792 15.9995C19.8792 18.1415 18.1425 19.8782 16.0005 19.8782C13.8583 19.8782 12.1218 18.1415 12.1218 15.9995C12.1218 13.8573 13.8583 12.1208 16.0005 12.1208Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_4132_5799"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(8.61513 34.181) rotate(-90) scale(31.2303 29.0545)"
                      >
                        <stop stop-color="#FFDD55" />
                        <stop offset="0.1" stop-color="#FFDD55" />
                        <stop offset="0.5" stop-color="#FF543E" />
                        <stop offset="1" stop-color="#C837AB" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_4132_5799"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-5.03723 2.51245) rotate(78.6776) scale(13.9602 57.559)"
                      >
                        <stop stop-color="#3771C8" />
                        <stop offset="0.128" stop-color="#3771C8" />
                        <stop
                          offset="1"
                          stop-color="#6600FF"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <clipPath id="clip0_4132_5799">
                        <rect width="32" height="31.999" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              {/* <!-- End Social Brands --> */}
            </BlurFade>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Member Cards --> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
