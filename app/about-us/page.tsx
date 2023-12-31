import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: " About Us | USG Exports",
  description:
    "At USG Exports, we take immense pride in connecting the world to the finest exports from India. With a legacy of excellence, we're your trusted partner in sourcing quality products that meet your exacting standards",
  // other metadata
};

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutPage = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-slate-500">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Who We Are"
                  paragraph="
                  At USG Exports, we are a leading name in the world of international trade, with a legacy of excellence spanning over 2+ years. Our unwavering commitment to quality, customer satisfaction, and the export of premium Indian products has established us as a trusted partner in the global market."
                  mb="44px"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                ></div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] "
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/brands/why-choose-us.jpeg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/brands/handshake.png"
                  alt="about image"
                  fill
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-2xl">
                    Our mission is clear:
                  </h3>
                  <p className="sm:text-md text-base leading-relaxed text-slate-500 dark:text-white/90 sm:leading-relaxed">
                    To be your gateway to premium Indian treasures, offering you
                    access to the finest spices and pigments that India has to
                    offer. We uphold the following core values
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-2xl">
                    Quality:
                  </h3>
                  <p className="sm:text-md text-base leading-relaxed text-slate-500 dark:text-white/90 sm:leading-relaxed">
                    We believe that quality is non-negotiable. Our commitment to
                    delivering the highest quality products is the cornerstone
                    of our success.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-2xl">
                    Reliability:
                  </h3>
                  <p className="sm:text-md text-base leading-relaxed text-slate-500 dark:text-white/90 sm:leading-relaxed">
                    We take pride in our reliability and integrity. Our
                    customers trust us to deliver exceptional products
                    consistently.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-2xl">
                    Sustainability:
                  </h3>
                  <p className="sm:text-md text-base leading-relaxed text-slate-500 dark:text-white/90 sm:leading-relaxed">
                    We are dedicated to responsible sourcing and sustainable
                    business practices, ensuring that we contribute positively
                    to the environment and local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black">
          <div className="flex flex-wrap items-center">
            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <img
                src="/images/blog/arial-port.avif"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-4 text-2xl font-bold">
                  Our Products: At USG Exports, we specialize in the export of
                  two main product categories:
                </h2>
                <p className="text-danger dark:text-danger-500 flex items-center font-bold uppercase">
                  Spices
                </p>
                <p className="mb-6 text-slate-500 dark:text-white/90">
                  India&#39;s rich culinary heritage is renowned worldwide, and
                  our spices are a testament to that. From aromatic turmeric to
                  fiery red chilli powder, we bring you a diverse range of
                  flavors to enhance your culinary creations.
                </p>
                <p className="text-danger dark:text-danger-500 flex items-center font-bold uppercase">
                  Pigments
                </p>
                <p className="text-slate-500 dark:text-white/90">
                  Our pigments represent the vibrant colors of India. Whether
                  you need natural dyes, stable inorganic pigments, or versatile
                  organic pigments, our offerings cater to various industries,
                  from textiles to paints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-24 mx-auto rounded-lg shadow-lg dark:bg-primary">
          <div className="flex flex-col  items-center justify-around py-4 md:flex-row">
            <h2 className="my-12 text-left text-2xl font-semibold tracking-tight">
              Elevate your Culinary Journey with <br />
              <span className=" dark:text-primary-400 mt-4 text-5xl">
                Our Premium Spice Exports!
              </span>
            </h2>
            <a
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mb-2 h-auto rounded bg-primary px-8 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:bg-white dark:text-black dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="/contact-us"
              role="button"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
