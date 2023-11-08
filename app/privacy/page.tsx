import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Welcome to USG Exports",
  description: "At USG Exports, we take immense pride in connecting the world to the finest exports from India. With a legacy of excellence, we're your trusted partner in sourcing quality products that meet your exacting standards"
  // other metadata
};
const ErrorPage = () => {
    return (
        <>
            <section className="relative z-10 pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
                <Breadcrumb
                    pageName="Privacy Policy"
                    description="Indulge in the hues and flavors of India with our handpicked spice and pigment collection. From rich Turmeric Powder to bold Red Chilli Powder, and a spectrum of high-quality pigments, our products add both color and zest to your world."
                />
                
                
            </section>
        </>
    );
};

export default ErrorPage;
