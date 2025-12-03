"use client";

import ProductHeader from "@/components/ProductHeader";
import Image from "next/image";
import React from "react";

const LeadGeneration = () => {
  const generationalLeads = [
    {
      id: 1,
      title: "Direct Marketing",
      points: [
        "Telemarketing Lead Generation",
        "Meetings & Appointment Setting",
        "Promotional Research",
        "Conference, Skype Calls & Webinars",
      ],
      img: "/products/directmarketing.png",
    },
    {
      id: 2,
      title: "Online Marketing",
      points: [
        "Collecting Leads from Websites",
        "Contextual Advertising",
        "Social Media Lead Acquisition",
        "Media-wide Lead Campaigns",
      ],
      img: "/products/onlinemarketing.png",
    },
    {
      id: 3,
      title: "Newsletter",
      points: [
        "Personalized Email Campaigns",
        "SMS Newsletter",
        "Flyers & Printed Outreach",
      ],
      img: "/products/newsletter.png",
    },
  ];

  return (
    <div className="bg-gray-50">
      <ProductHeader />

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-sm font-semibold tracking-[3px] text-blue-500 uppercase">
          Lead Generation
        </h1>

        <p className="font-extrabold text-4xl md:text-5xl text-gray-900 mt-4">
          Focus on Generating Qualified Leads
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
          A lead isn’t a customer yet, but they can become one when nurtured the
          right way. Here are the major channels we use to bring meaningful
          prospects into your business.
        </p>
      </section>

      <section className="py-6 max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {generationalLeads.map((lead) => (
            <div
              key={lead.id}
              className="group bg-white p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-6">
                <Image
                  src={lead.img}
                  alt={lead.title}
                  width={240}
                  height={240}
                  className="mx-auto group-hover:scale-110 transition duration-300"
                />
              </div>

              <h2 className="text-2xl font-bold text-blue-600 text-center">
                {lead.title}
              </h2>

              <ul className="text-gray-600 mt-5 space-y-3 ">
                {lead.points.map((point, index) => (
                  <li
                    key={index}
                    className="hover:text-gray-900 transition duration-200"
                  >
                {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
