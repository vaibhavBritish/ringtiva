import Leadgeneration from '@/components/Leadgeneration'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Moving = () => {
  const whyUs = [
    { id: 1, desc: "We deliver high-intent inbound calls" },
    { id: 2, desc: "11% sales conversion rate" },
    { id: 3, desc: "Pay for prospects that matter to your business only" },
    { id: 4, desc: "100% Exclusive – no sharing" },
    { id: 5, desc: "No long term commitment or contract required" },
    { id: 6, desc: "Track and listen to all calls" },
    { id: 7, desc: "100% customer satisfaction" },
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
            High-Conversion <br /> Moving Leads
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
        <h1 className='font-bold text-3xl text-blue-600'>Exclusive moving leads</h1>
        <p>Over 15.3 million households in America move every year, and more than half hire professional movers. Despite the massive opportunities in the industry, moving companies are still finding it hard to get their brand noticed by consumers who need their services. To keep your business growing, you will need constant access to prospects who have put their homes for sale or bought a new place.</p>

        <p>Whether you need long-distance or local moving leads, we’ll flood your phone with high- intent inbound calls from prospects that fit your specific business needs. We know most people check online first when they are ready to move; our professionals will help you generate qualified moving leads through organic SEO, Google AdWords, and targeted ads on Facebook, Snapchat, Instagram, etc.</p>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-5 rounded-2xl mb-10'>
        <h1 className='font-bold text-3xl text-blue-600'>High-quality moving leads that converts</h1>
        <p>Let’s connect you with millions of moving consumers in the United States. We are experts at delivering local, international, and interstate moving leads that will turn into successful businesses. You will get calls from verified homeowners who are ready to pay for your services. What more, our high-quality services guarantee you a 11% sales conversion rate; this means you can expect to get at least one successful business from every ten inbound calls we deliver.</p>
      </section>


      <section className='max-w-6xl mx-auto py-10 space-y-14'>
        <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Don’t miss the moving jobs in your area!</h1>
            <p>Create an account with us now and use our state-of-the-art filtering systems to target homeowners in your areas who have just bought a new home or put their house on sale. You can set your budget and determine the number of moving leads you want to buy, and when you want to receive it. Also, we can integrate our system with your brand’s CRM so you can stay on top of your campaign and ensure you are getting the desired return from your investment.</p>
          </div>
          <div className='px-3'>
            <Image
              src={'/moving/moving_tgb_0.png'}
              alt='Moving'
              width={450}
              height={350}
            />
          </div>
        </div>

        {/* <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div className='px-3'>
            <Image
              src={'/industries/homeSecurity/home-security_tgb_1.png'}
              alt='tv and internet'
              width={450}
              height={350}
            />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Increase your earnings now!</h1>
            <p>Want to increase your business ROI? Sign up now to start getting qualified home security leads that guarantee you a high conversion rate. We’ll connect your sales team with prospects who are not merely looking for information about your services but are ready to install a surveillance or security system.</p>
          </div>

        </div> */}
      </section>


   <section className="max-w-6xl mx-auto px-8 py-20 mb-20 bg-[#F4F6FB] rounded-3xl space-y-8 shadow-md">
        <h1 className="font-bold text-4xl text-gray-900">Why work with Marketcall?</h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Over the years, we have helped several professional movers grow their top-line figures by delivering highly-converting prospects. Signup now to get ahead of your competitors with our quality services. Here are the reasons why we are rated as the most preferred prospects acquisition company in the industry:
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
        <h1 className='font-bold text-3xl text-blue-600'>Start Closing New Deals Now!</h1>
        <p className='text-xl'>Do you have questions or want to find out how we can connect you with thousands of verified homeowners? Please, contact us now to discuss your marketing needs and business goals.</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time TV & Internet leads now to increase your business bottom line.</p>
      </section>

    </div>
  )
}

export default Moving