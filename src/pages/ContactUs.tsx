import Footer from "@/components/Footer";
import NavBar2 from "@/components/NavBar2";
import BlurFade from "@/components/ui/blur-fade";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog2";
import { Button } from "@/components/ui/button";
import ConfirmCheck from "@/components/icons/ConfirmCheck";

const ContactUs = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    validateOnMount: false,
    onSubmit: async (values) => {
      console.log("submitting values:", values);
      document.getElementById("dialog")?.click();
    },
  });

  const handleRefresh = () => {
    // refresh the page
    window.location.reload();
  };

  return (
    <div>
      <NavBar2 />
      <div className="fixed top-0 left-0 w-full h-[300px] flex items-center justify-center bg-[url('/images/page-bg.png')] bg-cover bg-no-repeat bg-top"></div>
      <div className="max-w-[85rem] mt-[92px] md:mt-[175px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20  space-y-12 sm:space-y-20 lg:space-y-24">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-12">
          {/* Photo - First on mobile, right on desktop */}
          <BlurFade
            delay={3 * 0.15}
            inView
            yOffset={0}
            className="max-w-xl md:order-2 mb-8 md:mb-0 pointer-events-none"
          >
            <img
              className="rounded-xl "
              src="/images/contact-us.png"
              alt="Contact Us Image"
            />
          </BlurFade>

          {/* Content - Second on mobile, left on desktop */}
          <BlurFade
            delay={2 * 0.15}
            inView
            yOffset={0}
            className="md:order-1 cursor-default"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4 ">
                <div className="max-w-xl space-y-2 md:space-y-4 ">
                  <p className="text-accentColor font-semibold text-lg">
                    Contact Us
                  </p>
                  <div>
                    <p className="section_header">
                      {" "}
                      Feel free to{" "}
                      <span className="text-accentColor">
                        get in touch
                      </span>{" "}
                      with us
                    </p>
                  </div>

                  <div className="space-y-2 md:space-y-3 section_description">
                    <p>
                      Your Local Partner for Nationwide Home Solutions – Connect
                      with Fixr’s Expert Team Today!
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="">
                <form
                  onSubmit={formik.handleSubmit}
                  className="grid gap-4 lg:gap-6 plausible-event-name=form_step_complete plausible-event-form_step=3_info"
                >
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      className="input-field"
                      placeholder="Email Address"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <img
                        src="/images/warning.svg"
                        alt="Invalid"
                        className="absolute right-3 top-3 w-6"
                      />
                    )}

                    {formik.touched.email && !formik.errors.email && (
                      <img
                        src="/images/tick.svg"
                        alt="Valid"
                        className="absolute right-6 top-4 w-4"
                      />
                    )}
                    {formik.touched.email && formik.errors.email && (
                      <div className="error text-sm text-red-500">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      className="input-field"
                      placeholder="Full Name"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <img
                        src="/images/warning.svg"
                        alt="Invalid"
                        className="absolute right-3 top-3 w-6"
                      />
                    )}

                    {formik.touched.name && !formik.errors.name && (
                      <img
                        src="/images/tick.svg"
                        alt="Valid"
                        className="absolute right-6 top-4 w-4"
                      />
                    )}
                    {formik.touched.name && formik.errors.name && (
                      <div className="error text-sm text-red-500">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      onBlur={formik.handleBlur}
                      className="input-field"
                      placeholder="Subject"
                    />
                    {formik.touched.subject && formik.errors.subject && (
                      <img
                        src="/images/warning.svg"
                        alt="Invalid"
                        className="absolute right-3 top-3 w-6"
                      />
                    )}

                    {formik.touched.subject && !formik.errors.subject && (
                      <img
                        src="/images/tick.svg"
                        alt="Valid"
                        className="absolute right-6 top-4 w-4"
                      />
                    )}

                    {formik.touched.subject && formik.errors.subject && (
                      <div className="error text-sm text-red-500">
                        {formik.errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      onBlur={formik.handleBlur}
                      rows={3}
                      className="input-field"
                      placeholder="Your message..."
                    />
                    {formik.touched.message && formik.errors.message && (
                      <img
                        src="/images/warning.svg"
                        alt="Invalid"
                        className="absolute right-3 top-3 w-6"
                      />
                    )}

                    {formik.touched.message && !formik.errors.message && (
                      <img
                        src="/images/tick.svg"
                        alt="Valid"
                        className="absolute right-6 top-4 w-4"
                      />
                    )}
                    {formik.touched.message && formik.errors.message && (
                      <div className="error text-sm text-red-500">
                        {formik.errors.message}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 grid">
                    <button
                      type="submit"
                      className={`w-full py-5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-accentColor text-white hover:bg-accentDark transform transition-transform `}
                    >
                      Confirm Information
                    </button>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {/* Additional information or disclaimer can go here */}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </BlurFade>
        </div>
        {/* End Grid */}
      </div>
      <Footer />
      <Dialog>
        <DialogTrigger asChild>
          <button id="dialog" className="hidden"></button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="items-center">
            <ConfirmCheck />
            <h4 className="text-lg sm:text-xl font-semibold text-center py-1">
              Awesome!
            </h4>
            <DialogDescription>
              Thanks for reaching out. We received your message and we'll get
              back to you soon. We look forward to helping you bring your
              project to life.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild className="items-center">
              <Button
                className="bg-accentColor hover:bg-accentDark w-full"
                onClick={handleRefresh}
              >
                OK
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactUs;
