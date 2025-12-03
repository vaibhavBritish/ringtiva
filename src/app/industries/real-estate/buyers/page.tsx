import LeadGeneration from '@/app/products/lead-generation/page';
import Faq from '@/components/Faq';
import Leadgeneration from '@/components/Leadgeneration';
import Image from 'next/image'
import React from 'react'

const Buyers = () => {
  const whyUs = [
    { id: 1, desc: "Get high intent inbound calls" },
    { id: 2, desc: "15% sales conversion rate" },
    { id: 3, desc: "Free tracking tools to monitor your campaign" },
    { id: 4, desc: "No long term commitment or contract required" },
    { id: 5, desc: "18 minutes average call duration" },
    { id: 6, desc: "Pay for performance" },
    { id: 7, desc: "100% Exclusive - zero competition" },

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
            High-Conversion <br /> buyers Leads
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
          <h1 className='text-2xl font-bold text-blue-600'>Close more deals with qualified and exclusive buyers leads</h1>
          <p>
            According to the Association of Real Estate License Law Officials (ARELLO), there are about two million active realtors in the United States. There is increasing competition in the industry, and more real estate agents are discovering that the old marketing techniques like cold calling, referrals, tv and magazine ads, and door-to-door knocking can no longer sustain their business. Smart realtors are now leveraging technology to generate buyers leads for their real estate listings and grow their business.
          </p>

          <p>
            Marketcall uses innovative techniques and state-of-the-art technology to help realtors generate high-intent inbound calls from prospects so they can focus on showing clients properties and closing new deals. You don’t have to worry about buyers leads that you have to cold call. Our professionals will work with you closely and help you attract buyers to your listings. Rather than chase prospects around, we’ll get them to contact you.
          </p>
        </div>

        <div className='bg-[#f4f6fb] px-10 md:px-20 py-16 space-y-6 text-xl rounded-2xl shadow-lg mt-16'>
          <h1 className='font-bold text-3xl text-blue-600'>Spend Less, Earn More</h1>
          <p className='leading-relaxed'>
            Let’s help you achieve higher results with a fraction of the amount you are currently spending to market your listings. We’ll promote your offerings through organic SEO, Google AdWords, and targeted ads on Facebook, TikTok, Snapchat, Twitter, and Instagram and you will get high-intent inbound calls from those who are interested in buying your properties. Furthermore, we’ll only charge you for calls from clients that are interested in your offerings. You will never get billed for contacts that do not matter to your business.
          </p>
        </div>
      </section>


      <section className='py-20 max-w-6xl mx-auto px-6 md:px-20 '>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
          <div className='space-y-6 '>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Get Unlimited Mortgage Leads Daily</h1>
            <p className='text-lg md:text-xl leading-relaxed'>
              Let’s help you generate new prospects so you can focus on your business core function – closing more deals. We are experts at searching for people who need your services and connecting them with you in real-time. On average, you should expect at least 18 minutes call duration and 14% sales conversion rate from the prospects we deliver. We have been in the industry for several years, and you can rely on us for an unlimited flow of new customers in your pipeline.
            </p>
          </div>

          <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src="/industries/mortgage.png"
              alt="Mortgage"
              fill
              className='object-cover rounded-2xl'
            />
          </div>
        </div> */}


        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
          <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src="/industries/buyers.png"
              alt="Mortgage"
              fill
              className='object-cover rounded-2xl'
            />
          </div>
          <div className='space-y-6 '>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Drive your business forward with exclusive buyers leads</h1>
            <p className='text-lg md:text-xl leading-relaxed'>
              Want to get more eyes on your listings? We are experts at connecting realtors with prospects who are interested in purchasing a new home, holiday properties, luxury home, investment properties, etc. Our 15% sales conversion rate exceeds the industry average, so you are guaranteed of making more money when you work with us.
            </p>
          </div>
        </div>


        <div className='space-y-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Your trusted source for quality buyer leads</h1>
          <p className='text-lg md:text-xl leading-relaxed'>
           Over the years, we have been helping realtors take their brand to the next level with our quality services. Sign up with us now to start getting thousands of high-intent inbound calls from prospects that are ready to do business with you.
          </p>
        </div>
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
        <h1 className='font-bold text-3xl text-blue-600'>Get in touch with us now</h1>
        <p className='text-xl'>to take your business to the next level with highly-converting buyers leads.</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time Buyers leads now to increase your business bottom line.</p>
      </section>
    </div>
  )
}

export default Buyers;
