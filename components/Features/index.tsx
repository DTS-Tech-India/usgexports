import Brands from "../Brands";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="About Us"
            paragraph="At USG Exports, we have been at the forefront of India's vibrant export industry for 2+ years. Our passion for quality, commitment to excellence, and unwavering dedication to customer satisfaction have made us a leading player in the export market."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        <Brands/>
      </section>
    </>
  );
};

export default Features;
