"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import Image from "next/image";

const Products = () => {
    const params = useParams();
    const { item } = params;
    return (
        <section className="pt-[120px] md:px-30">
            <div className="mx-auto  w-1/2 mb-8">
                <h1 className="mb-4 mx-20 block text-xl font-bold text-black hover:text-primary dark:text-white sm:text-5xl text-center">
                    {item}
                </h1>
                <div className="flex">
                    <div className="flex">
                        <div className="flex flex-col w-[70px] mx-1 bg-red-300">
                            <Image src={"/images/blog/" + item + ".jpg"} alt="" width={70} height={50} className="border border-orange-300" />
                            <Image src={"/images/blog/" + item + ".jpg"} alt="" width={70} height={50} className="border my-1" />
                            <Image src={"/images/blog/" + item + ".jpg"} alt="" width={70} height={50} className="border " />
                        </div>
                    </div>
                    <div className="">
                        <Image src={"/images/blog/" + item + ".jpg"} alt="" width={500} height={400} />
                    </div>
                    <div className="text-black">
                        Specifications
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products
