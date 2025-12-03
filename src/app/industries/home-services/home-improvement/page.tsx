import Image from 'next/image'
import React from 'react'
import { CheckCircle } from "lucide-react"
import Leadgeneration from '@/components/Leadgeneration'

const HomeImprovement = () => {

  const whyUs = [
    { id: 1, desc: "11% sales conversion rate" },
    { id: 2, desc: "Get high intend inbound calls" },
    { id: 3, desc: "100% Exclusive and real-time service" },
    { id: 4, desc: "Free tracking tool to listen to calls" },
    { id: 5, desc: "18 minutes average call duration from prospects" },
    { id: 6, desc: "No long term commitment or contract" },
    { id: 7, desc: "Pay for prospects that fit your criteria only" },
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
            High-Conversion <br /> Home Improvement Leads
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
            <h1 className='font-bold text-2xl text-blue-600 py-4'>Exclusive Home Improvement Leads</h1>
            <p>Home improvement is a massive industry with a lot of opportunities for remodeling contractors to grow their businesses. However, like every competitive business environment, you need a constant flow of home improvement leads to achieve your sales goals and thrive in the industry. Gone are the days when companies depend on referrals for new customers; smart contractors now leverage the innovative technology and expertise of lead generation companies to connect directly with those looking for their services.</p>
          </div>
          <div>
            <Image
              src={"/industries/home-services/home-welcome.png"}
              alt='Welcome Home Improvement'
              width={550}
              height={350}
            />
          </div>
        </div>
        <div className='mt-30'>
          <p>Marektcalls provide high-intent inbound calls for remodeling contractors who want to close more deals and grow their business. We’ll generate home improvement leads through Google ads, organic SEO, and targeted ads on social media platforms like Facebook, TikTok, Snapchat, Twitter, and Instagram. You will get calls directly from those searching for your services online.</p>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-8 rounded-2xl'>
        <h1 className='font-bold text-3xl text-blue-600'>Spend Less and Earn More</h1>
        <p className='text-md'>Let’s focus on getting you homeowners who are ready to start their remodeling projects so you can focus on closing deals and sending out estimates. You won’t have to waste your time and resources chasing new customers; we’ll bring them directly to you. When you buy from us, you will spend less on marketing and get more profit with our highly converting prospects.</p>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-28'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <Image
              src={"/industries/home-services/home-improvement2.png"}
              alt='homeimprovement'
              width={450}
              height={350}
            />
          </div>
          <div className='space-y-10'>
            <h1 className='font-bold text-2xl text-blue-600'>Get Busy with Qualified Home Improvement Leads</h1>
            <p>Our team will work with you to understand your business model and customer profile. We offer high-intent inbound calls from prospects who meet your criteria and are actively looking for remodeling contractors who can work on their projects. We guarantee 100% exclusive services and a 11% sales conversion rate. More so, you can expect an average of 18 minutes call from the prospects that we will deliver directly to your phone.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20 mb-20 bg-[#F4F6FB] rounded-3xl space-y-8 shadow-md">
        <h1 className="font-bold text-4xl text-gray-900">Why Work With Us?</h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          We are the go-to company for highly converting mortgage leads. There’s no long-term
          commitment, minimum purchase, or contract required. You can use our feature-packed
          dashboard to customize your prospects, set your daily budget, and track your campaign.
          Here’s why you should work with us:
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
        <h1 className='font-bold text-3xl text-blue-600'>Want to get your sales team busy with an unlimited flow of new customers?</h1>
        <p className='text-xl'>Call us now or fill our contact form to get started!</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time Home Improvement leads now to increase your business bottom line.</p>
      </section>
    </div>
  )
}

export default HomeImprovement