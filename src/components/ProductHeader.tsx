import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductHeader = () => {
  return (
    <div className=" pt-20 ">
      <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-4">
            Essential features for your <span className="text-blue-600"> business </span>
          </h1>

          <p className="text-gray-600 text-lg md:pr-10">
            Upscale your digital presence with our complete toolkit designed for
            growth-minded marketers and modern businesses.
          </p>

          {/* <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
              Explore Features
            </button>
          </div> */}
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/products/header.png"
            alt="product-header"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <section className="bg-[#6554df] text-white">
        <ul className="grid md:grid-cols-6 gap-14 items-center py-5 max-w-5xl mx-auto">
            <Link href={'/products/marketing-tools'}><li>Marketing Tools</li></Link>
            <Link href={'/products/fraud-prevention'}><li>Fraud Prevention</li></Link>
            <Link href={'/products/automatization'}><li>Automatization</li></Link>
            <Link href={'/products/lead-generation'}><li>Lead Generation</li></Link>
            <Link href={'/products/payouts'}><li>Payouts</li></Link>
            <Link href={'/products/support'}><li>Support</li></Link>
        </ul>
      </section>
    </div>
  );
};

export default ProductHeader;
