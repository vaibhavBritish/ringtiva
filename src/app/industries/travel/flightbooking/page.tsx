import Leadgeneration from '@/components/Leadgeneration'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Flightbooking = () => {
  const whyUs = [
    { id: 1, desc: "High-intent inbound calls" },
    { id: 2, desc: "Real and 100% exclusive" },
    { id: 3, desc: "14% sales conversion rate" },
    { id: 4, desc: "No setup cost or long term commitment" },
    { id: 5, desc: "17minutes average call duration from prospects" },
    { id: 6, desc: "Free tracking tools to monitor your campaign" },
  ]
  return (
    <div>
      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
        <Image
          src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/travel/bg-health.jpg"
          alt="Health Insurance Banner"
          width={2000}
          height={2000}
          className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            High-Conversion <br /> Flight Booking Leads
          </h1>

          <p className="text-white/90 mt-6 text-lg max-w-2xl leading-relaxed">
            Use unique marketing tools, get high-conversion, high-quality calls and increase your ROI
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

      <section className='max-w-6xl mx-auto px-10 py-10 space-y-5'>
        <h1 className='font-bold text-3xl text-blue-600'>Real-time flight booking leads</h1>
        <p>The increasing use of search engines and social media platforms by travelers has changed the way airline companies and travel agents generate new businesses. Travel professionals are now trying to get their share of the online market through paid ads and organic SEO. However, the challenge these businesses are facing is that there are limited spaces on Google's top spots, and running Ads on Google, Facebook, and other platforms are becoming more expensive due to increasing demand. Also, you have to know how to target your desired audience before throwing money at ads.</p>

        <p>Ringtivas provides high-intent inbound calls from people who are looking for hot flight deals. We'll help you attract thousands of quality customers so you can focus on closing new clients and growing your business. We take pride in our ability to generate real-time flight booking leads through Google AdWords, organic SEO, and targeted ads on Facebook, Snapchat, Instagram, Twitter, and more.</p>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-5 rounded-2xl mb-10'>
        <h1 className='font-bold text-3xl text-blue-600'>Connect with prospects in real-time</h1>
        <p>Contacting the right prospects at the right time is vital in the travel industry. We'll deliver exclusive and real-time flight booking leads that will connect you with people who are ready to book their flights. We'll help you target clients that fit your specific customer profile and get them to contact you directly or transfer live-calls that have been qualified by our experienced call center agents.</p>
      </section>


      <section className='max-w-6xl mx-auto py-10 space-y-14'>
        <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Take charge of your flight booking leads campaign</h1>
            <p>Our innovative and feature-packed dashboard will give you full control of your campaign. You can set your budget and determine the amount of money you want to spend daily. More so, you can use our state-of-the-art filtering system to niche down the types of clients you want. Furthermore, we'll give you free access to our campaign monitoring tools so you can listen to calls, examine the quality of inbound calls you are getting, and ensure you are deriving the maximum ROI from the flight booking leads.</p>
          </div>
          <div className='px-3'>
            <Image
              src={'https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/travel/flight-booking_tgb_0.png'}
              alt='Moving'
              width={450}
              height={350}
            />
          </div>
        </div>

        {/* <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div className='px-3'>
            <Image
              src={'/industries/rehab/rehab_tgb_1.png'}
              alt='tv and internet'
              width={450}
              height={350}
            />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Pay for performance only</h1>
            <p>We care about your business and believe your success is our success. Our goal is to deliver services that guarantee you the maximum ROI. We’ll only charge you for inbound calls that matter to your business. Also, we’ll give you free access to our campaign monitoring tools, so you can track the return you are getting from every penny you spend.</p>
          </div>

        </div> */}
      </section>


   <section className="max-w-6xl mx-auto px-8 py-20 mb-20 bg-[#F4F6FB] rounded-3xl space-y-8 shadow-md">
        <h1 className="font-bold text-4xl text-gray-900">Why us?</h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          We guarantee you at least a 14% sales conversion rate. Also, you can expect to get an average of 17 minutes call duration from the potential customers we deliver to your phone. Sign up with us now to start enjoying the following benefits:
        </p>

        <ul className="space-y-4">
          {whyUs.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
              <span className="text-gray-800">{item.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='py-20'>
        <Leadgeneration/>
      </section>

      <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20'>
        <h1 className='font-bold text-3xl text-blue-600'>Contact us now</h1>
        <p className='text-xl'>to expand your reach and boost your revenue with our high-converting flight booking leads.</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time Flight booking leads now to increase your business bottom line.</p>
      </section>

    </div>
  )
}

export default Flightbooking