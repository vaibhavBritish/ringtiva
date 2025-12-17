import LeadGeneration from '@/app/products/lead-generation/page';
import Faq from '@/components/Faq';
import Leadgeneration from '@/components/Leadgeneration';
import Image from 'next/image'
import React from 'react'

const Mortgage = () => {
  const whyUs = [
    { id: 1, desc: "High-intent inbound calls – no cold calling" },
    { id: 2, desc: "100% Exclusive" },
    { id: 3, desc: "14% sales conversion rate" },
    { id: 4, desc: "Pay for performance only" },
    { id: 5, desc: "18 minutes average call duration from prospective clients" },
    { id: 6, desc: "No contract or long term commitment required" },
    { id: 7, desc: "Impeccable customer services" },

  ]
  return (
    <div>

      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
        <Image
          src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/finances/mortgage/bg-health.jpg"
          alt="Health Insurance Banner"
          width={2000}
          height={2000}
          className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            High-Conversion <br /> Mortgage Leads
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


      <section className='max-w-6xl mx-auto py-20 px-6 md:px-20'>
        <div className='space-y-10 text-lg md:text-xl leading-relaxed'>
          <h1 className='text-2xl font-bold text-blue-600'>Close more loans with real-time mortgage leads</h1>
          <p>
            The mortgage business environment is becoming more challenging and competitive. Mortgage companies are now looking beyond the costly and less effective traditional marketing methods to survive and increase their ROI. Rather than chasing clients, brokers and lenders are leveraging companies like Ringtiva to connect with those who want to purchase a new home or refinance their current mortgages.
          </p>

          <p>
            We’ll bring ready customers to you by providing high-intent inbound calls so you won’t have to waste time and money looking for new clients. We generate new prospects through SEO, Google Ads, and targeted ads on TikTok, Facebook, Twitter, Snapchat, and more. Buy from us now to start making more money with our real-time and 100% exclusive leads.
          </p>
        </div>

        {/* <div className='bg-[#f4f6fb] px-10 md:px-20 py-16 space-y-6 text-xl rounded-2xl shadow-lg mt-16'>
          <h1 className='font-bold text-3xl text-blue-600'>Get Unlimited Mortgage Leads Daily</h1>
          <p className='leading-relaxed'>
            Let’s help you generate new prospects so you can focus on your business core function – closing more deals. We are experts at searching for people who need your services and connecting them with you in real-time. On average, you should expect at least 18 minutes call duration and 14% sales conversion rate from the prospects we deliver. We have been in the industry for several years, and you can rely on us for an unlimited flow of new customers in your pipeline.
          </p>
        </div> */}
      </section>


      <section className='py-20 max-w-6xl mx-auto px-6 md:px-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
          <div className='space-y-6 '>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Get Unlimited Mortgage Leads Daily</h1>
            <p className='text-lg md:text-xl leading-relaxed'>
              Let’s help you generate new prospects so you can focus on your business core function – closing more deals. We are experts at searching for people who need your services and connecting them with you in real-time. On average, you should expect at least 18 minutes call duration and 14% sales conversion rate from the prospects we deliver. We have been in the industry for several years, and you can rely on us for an unlimited flow of new customers in your pipeline.
            </p>
          </div>

          <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/finances/mortgage/mortgage.png"
              alt="Mortgage"
              fill
              className='object-cover rounded-2xl'
            />
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
          <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/finances/mortgage/mortgage_tgb_1.png"
              alt="Mortgage"
              fill
              className='object-cover rounded-2xl'
            />
          </div>
          <div className='space-y-6 '>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Take charge of your campaign</h1>
            <p className='text-lg md:text-xl leading-relaxed'>
              Create an account with us, and our team will take charge of your campaign by helping you get high-intent inbound calls through google ads, SEO, and targeted ads social media platforms like TikTok, Facebook, Twitter, and more. Furthermore, you can use our feature- packed dashboard to monitor your campaign and customize the types of prospects you want.
            </p>
          </div>
        </div>


        {/* <div className='space-y-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Pay for High-quality Prospects Only</h1>
          <p className='text-lg md:text-xl leading-relaxed'>
            You will get billed for only prospects looking for your products. We’ll never charge you for services that do not matter to your business. What more, we have a tracking system in place to help you monitor and listen to all calls and ensure you get the maximum ROI from every dollar you spend.
          </p>
        </div> */}
      </section>

      <section>

      </section>


      <section className="max-w-5xl px-10 py-14 mx-auto bg-[#f4f6fb] rounded-xl">
        <h1 className="text-3xl font-bold text-blue-600">
          Why Work With Us?

        </h1>

        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          We boast of unrivaled results in the industry. Our highly converting mortgage leads will increase your productivity, boost your sales, and take your business to the next level. We are rated the best source for mortgage leads generation for the following reasons:
        </p>

        <ul className="mt-6 space-y-3">
          {whyUs.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 text-lg font-medium text-gray-700"
            >
              <span className="text-[#6A4DFF] text-xl mt-1">•</span>
              {item.desc}
            </li>
          ))}
        </ul>
      </section>

      <section className='py-10'>
        <Leadgeneration />
      </section>

      <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20'>
        <h1 className='font-bold text-3xl text-blue-600'>Contact us now!</h1>
        <p className='text-xl'>and let’s help you to take your business to the next level!</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy now, and let’s help you get ahead of your competitors</p>
      </section>
    </div>
  )
}

export default Mortgage;
