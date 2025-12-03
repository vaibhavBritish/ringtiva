import Image from 'next/image'
import React from 'react'
import { CheckCircle } from "lucide-react"
import Leadgeneration from '@/components/Leadgeneration'

const Solar = () => {

  const whyUs = [
    { id: 1, desc: "13% sales conversion rate" },
    { id: 2, desc: "Qualified inbound calls" },
    { id: 3, desc: "18 minutes average call duration from new clients" },
    { id: 4, desc: "100% Exclusive" },
    { id: 5, desc: "No minimum purchase or long term commitment" },
    { id: 6, desc: "Pay for performance only" },
    { id: 7, desc: "Impeccable customer service." },
  ]
  return (
    <div>
      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
        <Image
          src="/industries/bg-health.jpg"
          alt="Health Insurance Banner"
          width={2000}
          height={2000}
          className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            High-Conversion <br /> Solar Leads
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

      <section className='max-w-6xl mx-auto px-5 py-10'>
        <div className=' grid md:grid-cols-2 gap-10'>
          <div>
            <h1 className='font-bold text-2xl text-blue-600 py-4'>Get more customers with qualified solar leads</h1>
            <p>The solar industry is growing rapidly, and more homeowners and businesses in the U.S. are adopting renewable energy to reduce their carbon footprint and energy bills. Millions of people who want to switch to a renewable source of energy are actively searching online for reliable installation companies. With more installers trying to attract customers, getting in front of these prospects first is the best way to get more contracts and grow your business.</p>
          </div>
          <div>
            <Image
              src={"/industries/solar/solar.png"}
              alt='Welcome Home Improvement'
              width={550}
              height={350}
            />
          </div>
        </div>
        <div className='mt-30'>
          <p>We provide installers highly-converting solar leads that guarantee a high ROI and increased revenue. Our highly-experienced marketers will help you generate high-intent inbound calls through organic SEO and targeted ads on search engines and social media platforms like Google, Bing, Facebook, Snapchat, Instagram, TikTok, etc. We’ll help you get new customers so you can focus on converting them, delivering quality services, and making more money.</p>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-8 rounded-2xl'>
        <h1 className='font-bold text-3xl text-blue-600'>Boost your revenue</h1>
        <p className='text-md'>Spend less on marketing and increase your revenue with quality solar leads from Marketcall. Over the years, we have helped several installers grow their business by connecting them with homeowners and businesses that are ready to invest in solar projects. We’ll get your sales team busy by delivering high-intent inbound calls from new prospects. Take your business to the next level now by leveraging on our customer acquisition skills and experience in the industry.</p>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-28'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <Image
              src={"/industries/solar/solar1.png"}
              alt='homeimprovement'
              width={450}
              height={350}
            />
          </div>
          <div className='space-y-10'>
            <h1 className='font-bold text-2xl text-blue-600'>Qualified and Exclusive Solar Leads</h1>
            <p>We’ll get you qualified inbound calls from thousands of customers across the united states, and you will never have to worry about competing with other installation companies. Our services are 100% exclusive, and we guarantee our clients an average of 18 minutes call duration and 13% sales conversion rate from the solar leads they buy from us. Get in touch with us, and let’s help you find interested clients before your competitors do.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20 mb-20 bg-[#F4F6FB] rounded-3xl space-y-8 shadow-md">
        <h1 className="font-bold text-4xl text-gray-900">Get Your Campaign Started Now!</h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Create an account with us today to kickstart your campaign. We’ll give you access to our feature-packed dashboard so you can customize your leads, set your budget, and track your campaign to ensure you are getting the desired ROI from our service. Below are the reasons why we are the best in the industry:
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

      <section className='py-10'>
        <Leadgeneration/>
      </section>

      <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20'>
        <h1 className='font-bold text-3xl text-blue-600'>Contact us now</h1>
        <p className='text-xl'>to get more contracts and boost your business performance.</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time Solar leads now to increase your business bottom line.</p>
      </section>
    </div>
  )
}

export default Solar