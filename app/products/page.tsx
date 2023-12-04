import SingleBlog from "@/components/Blog/SingleBlog";
import { spiceData, pigmentsData } from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Products | USG Exports",
  description: "At USG Exports, we take immense pride in connecting the world to the finest exports from India. With a legacy of excellence, we're your trusted partner in sourcing quality products that meet your exacting standards"

};
const Blog = () => {
  return (
    <section>
      <Breadcrumb
        pageName="Our Products"
        description="Indulge in the hues and flavors of India with our handpicked spice and pigment collection. From rich Turmeric Powder to bold Red Chilli Powder, and a spectrum of high-quality pigments, our products add both color and zest to your world."
      />



      <section className="pt-[120px] md:px-30">
        <div className="mx-auto  w-1/2 mb-8">
          <h1 className="mb-4 mx-20 block text-xl font-bold text-black hover:text-primary dark:text-white sm:text-5xl text-center">
            Spices
          </h1>
          <p className="text-center">
          India&#39;s rich culinary heritage is renowned worldwide, and our spices are a testament to that. From aromatic turmeric to fiery red chilli powder, we bring you a diverse range of flavors to enhance your culinary creations.
          </p>
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {spiceData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-[40px] pb-[120px] md:px-30">
        <div className="mx-auto  w-1/2 mb-8">
          <h1 className="mb-4 mx-20 block text-xl font-bold text-black hover:text-primary dark:text-white sm:text-5xl text-center">
            Pigments
          </h1>
          <p className="text-center">
          Our pigments represent the vibrant colors of India. Whether you need natural dyes, stable inorganic pigments, or versatile organic pigments, our offerings cater to various industries, from textiles to paints.
          </p>
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {pigmentsData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-12 mx-auto rounded-lg shadow-lg dark:bg-primary">
          <div className="flex flex-col  items-center justify-around py-4 md:flex-row">
            <h2 className="my-12 text-left text-2xl font-semibold tracking-tight">
              Indian Flavors For The World!<br></br>
              <span className=" dark:text-primary-400 mt-4 text-5xl">
              Get a call from us
              </span>
            </h2>
            <a
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mb-2 h-auto rounded bg-primary px-8 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:bg-white dark:text-black dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="/products"
              role="button"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;
