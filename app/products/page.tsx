import SingleBlog from "@/components/Blog/SingleBlog";
import {spiceData, pigmentsData} from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />



      <section className="pt-[120px] md:px-30">
        <h1 className="mb-4 mx-20 block text-xl font-bold text-black hover:text-primary dark:text-white sm:text-5xl">
          Spices
        </h1>
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
        <h1 className="mb-4 mx-20 block text-xl font-bold text-black hover:text-primary dark:text-white sm:text-5xl">
          Pigments
        </h1>
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
