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
            Spices are a diverse and essential category of flavoring ingredients used in culinary traditions worldwide. India boasts a rich spice heritage, known as the "Land of Spices," with a history of trade and cultivation dating back thousands of years.
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
            Pigments play a vital role in adding color to various products, and they come in three major categories: Natural Dye Pigments, sourced sustainably for textiles and art; Inorganic Pigments, valued for their durability in paints, coatings, and plastics; and Organic Pigments, known for their versatility and eco-friendliness across diverse industries.
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
