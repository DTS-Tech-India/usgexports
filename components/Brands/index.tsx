import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/cargo.webp",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/spice.webp",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/port.webp",
  },
  {
    id: 4,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/port.webp",
  },
  {
    id: 5,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/port.webp",
  },
  {
    id: 6,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/port.webp",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark dark:bg-primary dark:bg-opacity-5 "
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-full max-w-[250px] items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-[170px] w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
