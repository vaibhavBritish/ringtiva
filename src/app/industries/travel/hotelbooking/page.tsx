import Leadgeneration from '@/components/Leadgeneration'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hotelbooking = () => {
  const whyUs = [
    { id: 1, desc: "High-intent inbound calls" },
    { id: 2, desc: "Pay for performance only" },
    { id: 3, desc: "15% sales conversion rate" },
    { id: 4, desc: "Free campaign tracking tools" },
    { id: 5, desc: "No contract or long-term commitment" },
    { id: 6, desc: "18 minutes average call duration" },
    { id: 7, desc: "Qualified and 100% exclusive" },
  ]

  return (
    <div className="w-full">
      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
        <Image
          src="/industries/bg-health.jpg"
          alt="Hotel Booking Banner"
          width={2000}
          height={2000}
          className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            High-Conversion <br /> Hotel Booking Leads
          </h1>

          <p className="text-white/90 mt-6 text-lg max-w-2xl leading-relaxed">
            Use unique marketing tools to get high-conversion, high-quality calls and increase your ROI.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-8 py-3 bg-white text-[#6A4DFF] rounded-lg font-semibold hover:bg-gray-100 shadow-xl transition hover:-translate-y-1">
              Get Clients
            </button>
            <button className="px-8 py-3 bg-white text-[#6A4DFF] rounded-lg font-semibold hover:bg-gray-100 shadow-xl transition hover:-translate-y-1">
              Monetize Your Traffic
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-10 space-y-5">
        <h1 className="font-bold text-3xl text-blue-600">Real-time Flight Booking Leads</h1>

        <p>
          Travelers heavily rely on search engines and social media platforms, which has transformed how airline companies and travel agents generate new business. However, competition is intense, ad costs are rising, and getting top-ranking spots is more challenging than ever.
        </p>

        <p>
          Marketcall provides high-intent inbound calls from people actively looking for hot flight deals. We help you attract thousands of quality customers so you can stay focused on closing new clients and scaling your business.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-10 space-y-14">
        <div className="grid md:grid-cols-2 gap-20 px-5">
          <div>
            <h1 className="font-bold text-3xl text-blue-600 py-7">
              Get Your Rooms Filled With Qualified Hotel Booking Leads
            </h1>

            <p>
              A constant stream of high-quality leads is essential to keeping your rooms filled and meeting your revenue goals. With competition rising, hotels must strengthen their digital strategy to attract more customers.
            </p>

            <p>
              At Marketcall, we provide qualified, exclusive, real-time inbound calls from prospects actively searching for hotel bookings. Focus on closing leads—we’ll handle the marketing.
            </p>
          </div>

          <div className="px-3">
            <Image
              src="/industries/travel/hotel-booking-welcome-img.png"
              alt="Hotel Booking Welcome"
              width={450}
              height={350}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-5 rounded-2xl mb-10">
        <h1 className="font-bold text-3xl text-blue-600">
          Outpace Your Competitors With Qualified Hotel Booking Leads
        </h1>

        <p>
          We help brands connect with prospective customers before their competitors do. Our team generates high-intent inbound calls through Google Ads, SEO, and social channels like Facebook, TikTok, Snapchat, and Instagram.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-20 px-5 mb-10">
        <div className="px-3">
          <Image
            src="/industries/travel/hotel-booking_tgb_0.png"
            alt="Increase Revenue"
            width={450}
            height={350}
            className="rounded-xl"
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl text-blue-600 py-7">
            Increase Your Revenue, Reduce Your Marketing Overheads
          </h1>

          <p>
            Stop wasting resources chasing customers—we’ll bring them directly to you. Our high-converting hotel booking leads help you cut marketing costs and increase conversions.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-8 py-20 mb-20 bg-[#F4F6FB] rounded-3xl space-y-8 shadow-md">
        <h1 className="font-bold text-4xl text-gray-900">Why work with us?</h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Over the years, we’ve achieved unmatched results in the hospitality industry, including a 15% sales conversion rate and an average call duration of 18 minutes.
        </p>

        <ul className="space-y-4">
          {whyUs.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow bg-white"
            >
              <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-gray-800">{item.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-20">
        <Leadgeneration />
      </section>

      <section className="max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20">
        <h1 className="font-bold text-3xl text-blue-600">Contact Us Now</h1>
        <p className="text-xl">Fill your rooms and boost your revenue with qualified hotel booking leads.</p>

        <button className="bg-blue-600 text-white rounded-2xl px-6 py-4 hover:bg-blue-700 transition">
          Buy Leads Now!
        </button>

        <p>Buy real-time hotel booking leads today and grow your business.</p>
      </section>
    </div>
  )
}

export default Hotelbooking
