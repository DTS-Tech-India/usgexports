import Breadcrumb from "@/components/Common/Breadcrumb";
import HubSpotForm from "@/components/hubspotForm/hubspotform";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | USG Exports",
  description: "At USG Exports, we take immense pride in connecting the world to the finest exports from India. With a legacy of excellence, we're your trusted partner in sourcing quality products that meet your exacting standards"
  // other metadata
};
const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our support team will get back to you ASAP via email."
      />

      <div className="container bg-slate-100 md:p-20 dark:border dark:bg-white">
        <h2 className="mb-3 text-2xl font-bold text-black dark:text-primary sm:text-3xl lg:text-2xl xl:text-3xl">
          Get in Touch
        </h2>
        <p className="mb-12 text-lg font-normal text-slate-500 dark:text-primary/90">
          Our support team will get back to you ASAP via email.
        </p>
        <HubSpotForm />
      </div>
      {/* <Contact /> */}
    </>
  );
};

export default ContactPage;
