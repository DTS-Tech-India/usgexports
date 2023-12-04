import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Process | USG Exports",
  description:
    "At USG Exports, we take immense pride in connecting the world to the finest exports from India. With a legacy of excellence, we're your trusted partner in sourcing quality products that meet your exacting standards",
  // other metadata
};

const Process = () => {
  return (
    <div>
      <Breadcrumb
        pageName="Our Process"
        description="Welcome to USG Exports, where we take pride in delivering the
        authentic flavors of India to the world. Our process is a seamless
        journey that begins with the rich soil of Indian farms and culminates in
        the aromatic spices that grace kitchens across the globe. Discover how
        we ensure quality, sustainability, and excellence at every step."
      />
      <p className="container md:px-20 lg:px-52">
        {" "}
        Welcome to USG Exports, where we take pride in delivering the authentic
        flavors of India to the world. Our process is a seamless journey that
        begins with the rich soil of Indian farms and culminates in the aromatic
        spices that grace kitchens across the globe. Discover how we ensure
        quality, sustainability, and excellence at every step.
      </p>
      <div className="flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="">
          <div className="process-card flex items-center justify-center ">
            <span className="process-num">1</span>
            <div className="">
              <p className="process-text">Sourcing</p>
              <p>
                At USG Exports, we take sourcing seriously. We work closely with
                trusted growers and suppliers, ensuring that only the finest raw
                materials are selected. Our commitment to sourcing the best
                spices begins at the very roots of these essential ingredients.
              </p>
            </div>
          </div>
          <div className="process-card flex items-center justify-center ">
            <div className="">
              <p className="process-text">Processing</p>
              <p>
                Once sourced, our spices undergo a meticulous processing phase.
                Our state-of-the-art facilities employ modern techniques while
                respecting traditional methods to bring out the true flavors and
                aromas of our products. This is where the magic happens.
              </p>
            </div>
            <span className="process-num">2</span>
          </div>
        </div>
        <div className="">
          <img src="/images/process-bg-1.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center px-4 md:flex-row">
        <div className="pr-12">
          <img src="/images/process-bg-2.jpg" alt=""width={400} />
        </div>
        <div className="">
          <div className="process-card flex items-center justify-center ">
            <span className="process-num">3</span>
            <div className="">
              <p className="process-text">Quality Assurance </p>
              <p>
                Quality is the cornerstone of our business. Our dedicated
                quality control team rigorously inspects every batch of spices,
                assuring that they meet the highest industry standards. We
                believe in delivering only the best to our customers.
              </p>
            </div>
          </div>
          <div className="process-card flex items-center justify-center ">
            <div className="">
              <p className="process-text">Customization</p>
              <p>
                We understand that our customers have unique requirements.
                That&#39;s why we offer customization options for packaging,
                quantities, and product blends. Your satisfaction is our
                priority, and we&#39;re here to tailor our products to your
                specific needs.
              </p>
            </div>
            <span className="process-num">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
