import Leadgeneration from '@/components/Leadgeneration'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HighSecurity = () => {
  const whyUs = [
    { id: 1, desc: "Get high intent inbound calls" },
    { id: 2, desc: "13% sales conversion rate" },
    { id: 3, desc: "18 minutes average call duration " },
    { id: 4, desc: "No contract or long term commitment" },
    { id: 5, desc: "State-of-the-art filtering system" },
    { id: 6, desc: "Free campaign monitoring tools" },
    { id: 7, desc: "Pay for performance only." },
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
            High-Conversion <br /> Home Security Leads
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
        <h1 className='font-bold text-3xl text-blue-600'>Boost your revenue with qualified home security leads</h1>
        <p>About 20% of Americans have a security system installed in their homes, and the number is estimated to increase to 65% in the next five years. The industry is booming, and more security contractors are coming up to tap into the opportunities it has to offer. The increased competition among companies is making it more challenging for contractors to attract and convert new customers. Buying exclusive and qualified home security leads is essential now more than ever to generate more sales and keep your business thriving.</p>

        <p>Marketcall specializes in helping installers and contractors attract new clients to their business. We’ll help you generate high-intent inbound calls from prospects who want to install or receive information on home security or surveillance systems. Our experienced and highly skilled marketers will work with you to understand your offerings and provide highly- converting home security leads that meet your specific business needs.</p>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-5 rounded-2xl mb-10'>
        <h1 className='font-bold text-3xl text-blue-600'>Result-oriented Home Security Leads</h1>
        <p>We don’t just deliver prospects; we’ll work with you to ensure you get the maximum ROI on your marketing investments. Our marketers will promote your services and help you generate high intent inbound calls through Google Adwords, Organic SEO, and targeted ads on TikTok, Facebook, Snapchat, and other social media platforms. Furthermore, we take pride in our home security leads 13% sales conversion rate.</p>
      </section>


      <section className='max-w-6xl mx-auto py-10 space-y-14'>
        <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Old tricks are less effective!</h1>
            <p>Gone are days when security contractors and installers invest heavily in TV and magazine advertisements to get new businesses. Also, you don’t have to waste time, effort, and money cold calling homeowners and companies to find out if they need your services. At Marketcall, we’ll save you the stress of using less-effective traditional marketing methods. When you buy our verified services, you will spend less, get more ready-to-buy customers, and convert more prospects.</p>
          </div>
          <div className='px-3'>
            <Image
              src={'/industries/homeSecurity/home-security_tgb_0.png'}
              alt='Home Security'
              width={450}
              height={350}
            />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-20 px-5'>
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

        </div>
      </section>


   <section className="max-w-6xl mx-auto px-8 py-20 mb-20 bg-[#F4F6FB] rounded-3xl space-y-8 shadow-md">
        <h1 className="font-bold text-4xl text-gray-900">Why Us?</h1>

        {/* <p className="text-gray-700 leading-relaxed max-w-3xl">
          Create an account with us today to kickstart your campaign. We’ll give you access to our feature-packed dashboard so you can customize your leads, set your budget, and track your campaign to ensure you are getting the desired ROI from our service. Below are the reasons why we are the best in the industry:
        </p> */}

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
        <h1 className='font-bold text-3xl text-blue-600'>Contact us now to discuss your business needs.</h1>
        <p className='text-xl'>One of our experts will get back to you on how we can help you boost your revenue.</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time TV & Internet leads now to increase your business bottom line.</p>
      </section>

    </div>
  )
}

export default HighSecurity