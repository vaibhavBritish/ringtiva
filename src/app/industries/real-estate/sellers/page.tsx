import LeadGeneration from '@/app/products/lead-generation/page';
import Faq from '@/components/Faq';
import Leadgeneration from '@/components/Leadgeneration';
import Image from 'next/image'
import React from 'react'

const Sellers = () => {
  const whyUs = [
    { id: 1, desc: "High-intent inbound calls from homeowners who are willing and ready to sell" },
    { id: 2, desc: "14% sales conversion rate and 18 minutes average duration from new clients" },
    { id: 3, desc: "100% exclusive and qualified sellers leads" },
    { id: 4, desc: "Pay for prospects that matter to your business only" },
    { id: 5, desc: "No setup cost, minimum purchase, or long term commitment" },
    { id: 6, desc: "100% customer satisfaction." },
    // { id: 7, desc: "100% Exclusive - zero competition" },

  ]
  return (
    <div>

      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
        <Image
          src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/real-estate/bg-health.jpg"
          alt="Health Insurance Banner"
          width={2000}
          height={2000}
          className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            High-Conversion <br /> Sellers Leads
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
          <h1 className='text-2xl font-bold text-blue-600'>Highly-converting real estate sellers leads</h1>
          <p>
            You need a constant inflow of sellers and buyers in your pipeline to create new businesses and survive in the real estate industry. However, how you source these new customers can either make or mar your business. While you should avoid wasting your money and resources on costly and ineffective marketing, you must invest in sellers leads that can help you capture hot prospects who are motivated to sell their properties below the current market value.
          </p>

          <p>
        Ringtivas understand that sellers are the backbone of your business; we will help you generate highly-converting, and 100% exclusive seller leads that guarantee you a constant stream of homeowners who want to put their properties up for sale. What more, you will get these hot deals before the properties are listed in the marketplace. Sign up with us now to increase your revenue with high-intent inbound calls delivered directly to your phone.

          </p>
        </div>

        {/* <div className='bg-[#f4f6fb] px-10 md:px-20 py-16 space-y-6 text-xl rounded-2xl shadow-lg mt-16'>
          <h1 className='font-bold text-3xl text-blue-600'>Spend Less, Earn More</h1>
          <p className='leading-relaxed'>
            Let’s help you achieve higher results with a fraction of the amount you are currently spending to market your listings. We’ll promote your offerings through organic SEO, Google AdWords, and targeted ads on Facebook, TikTok, Snapchat, Twitter, and Instagram and you will get high-intent inbound calls from those who are interested in buying your properties. Furthermore, we’ll only charge you for calls from clients that are interested in your offerings. You will never get billed for contacts that do not matter to your business.
          </p>
        </div> */}
      </section>


      <section className='py-20 max-w-6xl mx-auto px-6 md:px-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
          <div className='space-y-6 '>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Get sellers leads that converts</h1>
            <p className='text-lg md:text-xl leading-relaxed'>
             Let's connect you with thousands of homeowners who are ready to list their properties. Our marketers are experts at generating high-intent inbound calls through Google AdWords, organic SEO, and targeted ads on Facebook, TikTok, Snapchat, Instagram, and more. We know how to target homeowners in tax default, vacant homes, homeowners in probate or pre- foreclosure, etc.
            </p>
          </div>

          <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/real-estate/sellers1.png"
              alt="Mortgage"
              fill
              className='object-cover rounded-2xl'
            />
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
          <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/real-estate/sellers2.png"
              alt="Mortgage"
              fill
              className='object-cover rounded-2xl'
            />
          </div>
          <div className='space-y-6 '>
            <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Stay on top of your marketing campaign</h1>
            <p className='text-lg md:text-xl leading-relaxed'>
              Create an account with us to start getting more listings and closing more deals. We’ll give you access to our feature-packed dashboard and state-of-the-art marketing tools. There is no setup cost, contract, or long-term commitment.
            </p>
          </div>
        </div>


        <div className='space-y-6'>
          {/* <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Your trusted source for quality buyer leads</h1> */}
          <p className='text-lg md:text-xl leading-relaxed'>
           Also, you can monitor your campaign and track the quality of inbound calls you are getting from prospects. Furthermore, we will only charge you for performance; we’ll never bill you for clients that are not interested in your business.
          </p>
        </div>
      </section>

      <section>

      </section>


      <section className="max-w-5xl px-10 py-14 mx-auto bg-[#f4f6fb] rounded-xl">
        <h1 className="text-3xl font-bold text-blue-600">
         Why you should buy sellers leads from Ringtiva
        </h1>

        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          We work with the top real estate agents and companies in the industry. You will get high- intent calls and all the information you need to close the prospects and get their properties listed. Get in touch with us now to start enjoying these benefits:
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
        <h1 className='font-bold text-3xl text-blue-600'>Contact us now to start closing more deals.</h1>
        <p className='text-xl'>Want to start getting an influx of homeowners that are ready to sell their properties?</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time Sellers leads now to increase your business bottom line.</p>
      </section>
    </div>
  )
}

export default Sellers;
