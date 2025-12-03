"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

const HealthInsurance = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "How much do health insurance leads cost?", a: "Lead costs vary based on competition, customer location, and call quality. High-intent insurance calls generally range from $15 – $80 per lead." },
    { q: "What is a good cost per lead?", a: "A good CPL depends on ROI. If conversion rate and lifetime value justify the expense, a CPL between $25 – $60 is considered profitable for most agents." },
    { q: "What are leads in insurance?", a: "Leads are potential customers who have shown interest in purchasing insurance and have shared contact details or requested a call." },
    { q: "How much do leads cost?", a: "Lead prices vary by product type. Health insurance leads typically cost more than auto or home due to demand and market competition." },
    { q: "How do you generate leads?", a: "Insurance leads are generated through paid ads, SEO, landing pages, call transfer systems, and real-time customer intent marketing." },
    { q: "Why do insurance agents fail?", a: "Most agents fail due to inconsistent lead flow, incorrect follow-ups, weak sales scripts, or lack of high-intent prospects." },
    { q: "How do I get insurance leads?", a: "You can generate leads through digital marketing or purchase ready-to-convert live calls and verified leads from trusted suppliers." },
  ];

  return (
    <div className="font-[Inter]">
      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden">
        <Image
          src="/industries/bg-health.jpg"
          alt="Health Insurance Banner"
          width={2000}
          height={2000}
          className="absolute right-0 top-0 h-full opacity-25 object-cover hidden md:block"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            High-Conversion <br /> Health Insurance Leads
          </h1>

          <p className="text-white/90 mt-6 text-lg max-w-2xl leading-relaxed">
            Get access to high-intent customers through advanced marketing tools — boost conversions and maximize ROI.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-8 py-3 bg-white text-[#6A4DFF] rounded-md font-semibold hover:bg-gray-100 shadow-md transition hover:-translate-y-1">
              Get Clients
            </button>
            <button className="px-8 py-3 bg-white text-[#6A4DFF] rounded-md font-semibold hover:bg-gray-100 shadow-md transition hover:-translate-y-1">
              Monetize Your Traffic
            </button>
          </div>
        </div>
      </section>

    
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-2/3 space-y-5">
            <h2 className="text-3xl font-bold text-blue-600">Growing Health Insurance Business Made Easier</h2>
            <p className="text-gray-600 leading-relaxed">
              Are you struggling to acquire customers even with increasing demand for Health Insurance? Competition is rising, and gaining prospects is harder than ever before.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold text-blue-600">Marketcalls</span>, we provide high-intent calls from customers actively searching for insurance solutions.
              Explore our services, create an account, and start scaling your business today.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <Image src="/industries/docktor.jpg" alt="doctor" width={350} height={450} className="rounded-xl shadow-xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F6FB] max-w-7xl mx-auto px-6 md:px-10 rounded-xl">
        <h1 className="font-bold text-3xl text-blue-600 mb-4 text-center">Increase Your Profit With Quality Leads</h1>
        <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto text-center">
          Grow your business and increase your bottom line with intent calls that connect you with customers ready to buy.
          We help you attract potential clients through targeted marketing campaigns and provide all the information needed
          to convert calls into sales.
        </p>
      </section>

 
      <section className="py-20 max-w-6xl mx-auto px-6 md:px-10 space-y-20">

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-4">
            <h1 className="font-bold text-3xl text-blue-600">Stay in Control</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Leverage cutting-edge technology on our smart dashboard using recording, voice logic, and recognition tools
              to analyze call quality and track performance.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/industries/healthinsurance.png" alt="control" width={350} height={350} className="object-contain" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <Image src="/industries/team.jpg" alt="team" width={350} height={350} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-blue-600 text-3xl font-bold">Experienced Team</h1>
            <p className="text-gray-600 text-lg">
              With over 5 years of experience, our team has mastered proven strategies to scale insurance businesses.
              We maintain long-term partnerships and deliver high ROI through professional acquisition services.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-4">
            <h1 className="font-bold text-3xl text-blue-600">Marketcall Unique Process</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Create an account, choose a budget and lead preference, and our marketing team generates calls using Google,
              Facebook, Snapchat, SEO, TikTok and more — ensuring maximum return on every purchase.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/industries/process.jpg" alt="process" width={350} height={350} className="object-contain" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl bg-white shadow-sm transition">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 text-lg font-medium text-gray-800"
              >
                {item.q}
                <FiChevronDown
                  className={`text-blue-600 text-xl transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}>
                <div className="px-6 py-4 text-gray-600 text-base border-t">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="max-w-5xl mx-auto bg-[#F4F6FB] rounded-xl px-20 py-10 text-center space-y-4 my-10">
          <h1 className="text-2xl text-blue-600 font-bold">Stop wasting Money on Generic Leads!</h1>
          <p>Stop wasting money on advertisements that don’t convert. We provide high-quality Health Insurance leads through top-notch marketing services. You can record and monitor each call to determine their effectiveness. Whatever your budget, you are guaranteed a high return on investment when you buy from us.</p>

          <button className="bg-blue-600 text-white font-bold font-sans px-3 py-2 rounded-2xl transition-all duration-200 hover:scale-100">Buy Leads Now!</button>
          <p className="text-gray-800">Buy Real time Health Insurance leads now to increase your business bottom line</p>
      </section>

    </div>
  );
};

export default HealthInsurance;
