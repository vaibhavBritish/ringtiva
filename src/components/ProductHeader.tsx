import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductHeader = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-slideInLeft">
          <h1 className="font-bold text-4xl md:text-5xl leading-tight mb-4">
            Essential features for your <span className="text-blue-600"> business </span>
          </h1>

          <p className="text-gray-600 text-lg md:pr-10 transition-opacity duration-300 hover:opacity-80">
            Upscale your digital presence with our complete toolkit designed for
            growth-minded marketers and modern businesses.
          </p>
        </div>

        <div className="flex justify-center md:justify-end animate-slideInRight">
          <Image
            src="https://ringtivassests.blob.core.windows.net/ringtiva-images/product/header.png"
            alt="product-header"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
      <section className="bg-[#6554df] text-white">
        <ul className="grid md:grid-cols-6 gap-14 items-center py-5 max-w-5xl mx-auto">
            <Link href={'/products/marketing-tools'}><li className="transition-all duration-300 hover:scale-110 hover:text-blue-200 cursor-pointer">Marketing Tools</li></Link>
            <Link href={'/products/fraud-prevention'}><li className="transition-all duration-300 hover:scale-110 hover:text-blue-200 cursor-pointer">Fraud Prevention</li></Link>
            <Link href={'/products/automatization'}><li className="transition-all duration-300 hover:scale-110 hover:text-blue-200 cursor-pointer">Automatization</li></Link>
            <Link href={'/products/lead-generation'}><li className="transition-all duration-300 hover:scale-110 hover:text-blue-200 cursor-pointer">Lead Generation</li></Link>
            <Link href={'/products/payouts'}><li className="transition-all duration-300 hover:scale-110 hover:text-blue-200 cursor-pointer">Payouts</li></Link>
            <Link href={'/products/support'}><li className="transition-all duration-300 hover:scale-110 hover:text-blue-200 cursor-pointer">Support</li></Link>
        </ul>
      </section>
    </div>
  );
};

export default ProductHeader;
