import Image from "next/image";
import React from "react";

const Leadgeneration = () => {
  const leadGeneration = [
    {
      id: 1,
      title: "Online Marketing",
      img: "/industries/onlineMarketing.svg",
      benefits: ["Paid Search", "SEO", "Social Ads", "Native Ads", "Classified Ads", "Email"],
    },
    {
      id: 2,
      title: "Offline Marketing",
      img: "/industries/offilineMarketing.svg",
      benefits: ["Paid Search", "Callcenter transfer", "Direct Mail", "SMS"],
    },
    {
      id: 3,
      title: "Individual Approach",
      img: "/industries/individualApproach.svg",
      benefits: [
        "Choose allowed traffic sources",
        "Set Definition of billable call",
        "Ad Material moderation",
        "Adjust prices for different sources",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 ">
      <h1 className="font-bold text-2xl mb-10 text-blue-600">
        Marketcall Offers Various Lead Generation Methods
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {leadGeneration.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {item.img && (
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            )}

            <h2 className="font-semibold text-xl text-blue-600 text-center mb-4">
              {item.title}
            </h2>

            <ul className="space-y-2 text-gray-700">
              {item.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-2">
                  • <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadgeneration;
