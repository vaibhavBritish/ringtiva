import Leadgeneration from '@/components/Leadgeneration'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TvInternet = () => {
  const whyUs = [
    { id: 1, desc: "Highly-converting inbound calls" },
    { id: 2, desc: "14% sales conversion rate" },
    { id: 3, desc: "18 minutes average call duration from new clients" },
    { id: 4, desc: "100% Exclusive" },
    { id: 5, desc: "State-of-the-art filtering system" },
    { id: 6, desc: "Free tracking tool to monitor your campaign" },
    { id: 7, desc: "100% customer satisfaction." },
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
            High-Conversion <br /> Tv & Internet Leads
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
        <h1 className='font-bold text-3xl text-blue-600'>Exclusive TV and Internet Leads</h1>
        <p>Millions of Americans use TV and Internet services daily and are always on the lookout for providers offering exciting features and cheaper rates. Unlike before, when companies chase new prospects by running costly ads on magazines and tv slots, providers are now leveraging technology to make consumers come to them. To get more customers and grow your business as a local service provider, you need to buy high-quality TV and internet leads</p>

        <p>We’ll work with you to understand your business needs and generate high-intent inbound calls from prospects that match your specific criteria. We’ll help you get new customers through organic SEO, Google AdWords, and targeted ads on social media platforms like TikTok, Instagram, Facebook, Snapchat, and more. Sign up with Marketcall now to start growing your customer base.</p>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-5 rounded-2xl mb-10'>
        <h1 className='font-bold text-3xl text-blue-600'>Better Internet and TV Leads, Zero Competition</h1>
        <p>We are experts at combing the internet and helping you connect with prospects that are ready to buy your special offers and exciting bundles. Our exclusive and qualified TV and internet leads guarantee you a 14% sales conversion rate. We’ll deliver high-intent inbound calls directly to your phone and supply all the information needed to close the new prospects. What more, we don’t deliver TV and internet leads via email or fax; we’ll get the prospective customer to call you.</p>
      </section>


      <section className='max-w-6xl mx-auto py-10 space-y-14'>
        <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Pay for Performance only</h1>
            <p>We believe your success is our success. Our goal is to ensure our clients get the maximum ROI from their investment in TV and internet leads. You will never get billed for services that do not matter to your business. When you create an account with us, you will be able to track every penny spent on your campaign, set your budget, customize the type of prospects you want, and monitor the quality of inbound calls you are getting from us.</p>
          </div>
          <div className='px-3'>
            <Image
              src={'/industries/tv-and-internet/tv-&-internet_tgb_0.png'}
              alt='tv and internet'
              width={450}
              height={350}
            />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div className='px-3'>
            <Image
              src={'/industries/tv-and-internet/tv-&-internet_tgb_1.png'}
              alt='tv and internet'
              width={450}
              height={350}
            />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Start selling your TV and Internet Services Now!</h1>
            <p>We are experts at helping service providers find customers that are interested in buying their products and services. For more than a decade, we have been assisting companies to boost their revenue with our prospects’ acquisition skills.</p>
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

      <section className='py-20'>
        <Leadgeneration/>
      </section>

      <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20'>
        <h1 className='font-bold text-3xl text-blue-600'>Get in touch with us</h1>
        <p className='text-xl'>and let’s help you achieve your business and marketing goals.</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time TV & Internet leads now to increase your business bottom line.</p>
      </section>

    </div>
  )
}

export default TvInternet