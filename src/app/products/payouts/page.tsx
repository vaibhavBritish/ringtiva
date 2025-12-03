import ProductHeader from "@/components/ProductHeader";
import Image from "next/image";
import React from "react";

const Marketingtools = () => {
  return (
    <div>
      <ProductHeader />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-sm font-semibold tracking-widest text-blue-600">
            PAYOUTS
          </h1>

          <p className="font-bold text-3xl md:text-4xl text-gray-900 mt-2 leading-snug">
            Withdraw money as you like
          </p>
        </div>
      </section>


      <section className="py-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    
          <div className="rounded-3xl border p-10 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Weekly payments<br />to e-wallets
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
              Once a week our partners receive payments via Wire transfer, Paypal,
              ACH, eCheck and Payoneer. Get paid where it suits you.
            </p>

              <div className="flex items-center gap-2 mt-10">
                <Image src="/products/wire.png" width={164} height={164} alt="Wire" />
              </div>
          </div>

      
          <div className="rounded-3xl border p-10 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                Daily payments to the current<br />account
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
                We are ready to pay money to our partners every day through ACH,
                WIRE or a standard check in 165 countries.
              </p>
            </div>

            <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-8 py-3 rounded-xl text-lg w-max">
              Become an affiliate
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Marketingtools;
