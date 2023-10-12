import SingleBlog from "@/components/Blog/SingleBlog";
import { spiceData, pigmentsData } from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
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
    </>
  );
};

export default Blog;
