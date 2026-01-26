"use client";
import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";
import Subscribe from "@/components/Subscribe";

const Helpcenter = () => {
  const helpcenter = [
    {
      id: 1,
      title: "FAQ's for Advertisers",
      desc: "Our answers to the most commonly asked questions.",
      img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/help-center/help-icon1.svg",
    },
    {
      id: 2,
      title: "FAQ's for Affiliates",
      desc: "Our answers to the most commonly asked questions.",
      img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/help-center/help-icon2.svg",
    },
    {
      id: 3,
      title: "Contact Support",
      desc: "Still have questions? Ask us directly, we’re open 24/7.",
      img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/help-center/help-icon3.svg",
    },
  ];

  return (
    <div className="w-full relative">

      <div className="relative h-[60vh] md:h-[70vh] w-full animate-fadeIn">
        <Image
          src="/header.png"
          alt="helpcenter"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white text-center bg-black/30 backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg animate-fadeInUp">
            Hello. How can we help?
          </h1>

          <div className="bg-white w-[90%] md:w-[600px] rounded-xl shadow-xl flex items-center px-4 py-3 text-gray-700 transform transition-all duration-300 hover:scale-105 animate-scaleIn">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search in Help center"
              className="w-full ml-3 outline-none text-gray-700 transition-all duration-300 focus:scale-105"
            />
          </div>
        </div>
      </div>

      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 animate-fadeInUp">
          Browse Help <span className="text-blue-600">Topics</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {helpcenter.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl p-6 border border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="mb-4 transform transition-transform duration-300 hover:rotate-12"
                />
              )}
              <h3 className="font-semibold text-xl mb-2 transition-colors duration-300 hover:text-blue-600">{item.title}</h3>
              <p className="text-gray-600 text-sm transition-opacity duration-300 hover:opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Subscribe />
      </section>
    </div>
  );
};

export default Helpcenter;
