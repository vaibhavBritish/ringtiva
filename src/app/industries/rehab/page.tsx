import Leadgeneration from '@/components/Leadgeneration'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Rehab = () => {
  const whyUs = [
    { id: 1, desc: "High-intent inbound calls from prospective patients" },
    { id: 2, desc: "12% sales conversion rate" },
    { id: 3, desc: "100% exclusive – zero competition" },
    { id: 4, desc: "18minutes average call duration from clients" },
    { id: 5, desc: "Pay for performance only" },
    { id: 6, desc: "Free campaign tracking tools" },
    { id: 7, desc: "100% customer satisfaction" },
  ]
  return (
    <div>
      <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
        <Image
          src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/rehab/bg-health.jpg"
          alt="Health Insurance Banner"
          width={2000}
          height={2000}
          className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
          priority
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            High-Conversion <br /> Rehab Leads
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
        <h1 className='font-bold text-3xl text-blue-600'>Addiction/ rehab leads</h1>
        <p>Generating rehab leads through traditional marketing techniques is becoming more challenging. TV and magazine ads are expensive, some states are placing strict regulations on cold calling, and fewer people are visiting rehabilitation centers to find out information about their services. To sustain and grow your business, you will have to brand yourself and learn how to attract and make your target audience find you.</p>

        <p>We offer highly converting rehab leads that help rehabilitation centers gain more clients and grow their brand. We’ll promote your services through Google AdWords, organic SEO, and targeted ads on Facebook, Snapchat, Twitter, Instagram, and other social media platforms. Our marketers have been delivering real-time and exclusive rehab leads for more than a decade, and you can expect at least a 12% sales conversion rate.</p>
      </section>

      <section className='max-w-6xl mx-auto px-10 py-10 bg-[#F4F6FB] space-y-5 rounded-2xl mb-10'>
        <h1 className='font-bold text-3xl text-blue-600'>Let’s help you achieve your admission goals</h1>
        <p>About 21 million Americans are suffering from at least one addiction, but only about 2.1 million are receiving treatment. We are experts at connecting rehab centers with millions of people who are ready to start their treatment. Our professional marketers will target these prospects and get them to call you so you won’t have to waste money or time chasing dead- end clients. We have helped several centers get new patients and achieve their admission goals.</p>
      </section>


      <section className='max-w-6xl mx-auto py-10 space-y-14'>
        <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Get qualified rehab leads</h1>
            <p>Let’s help you fill your beds in the shortest time possible. We’ll use our experience in the industry to get you a constant flow of new patients. We do not require you to pay setup costs or make long term commitments. All you have to do is to create an account with us, customize your leads with our filtering system, set your daily budget, and start getting inbound calls from prospective patients.</p>
          </div>
          <div className='px-3'>
            <Image
              src={'https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/rehab/rehab_tgb_0.png'}
              alt='Moving'
              width={450}
              height={350}
            />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-20 px-5'>
          <div className='px-3'>
            <Image
              src={'https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/rehab/rehab_tgb_1.png'}
              alt='tv and internet'
              width={450}
              height={350}
            />
          </div>
          <div>
            <h1 className='font-bold text-3xl text-blue-600 py-7'>Pay for performance only</h1>
            <p>We care about your business and believe your success is our success. Our goal is to deliver services that guarantee you the maximum ROI. We’ll only charge you for inbound calls that matter to your business. Also, we’ll give you free access to our campaign monitoring tools, so you can track the return you are getting from every penny you spend.</p>
          </div>

        </div>
      </section>


   <section className="max-w-6xl mx-auto px-8 py-20 mb-20 bg-[#F4F6FB] rounded-3xl space-y-8 shadow-md">
        <h1 className="font-bold text-4xl text-gray-900">We offer:</h1>

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
        <h1 className='font-bold text-3xl text-blue-600'>Get started now!</h1>
        <p className='text-xl'>Get in touch with us, and let’s help you achieve your admission goals with exclusive and qualified rehab leads.</p>

        <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
        <p>Buy real-time Rehab leads now to increase your business bottom line.</p>
      </section>

    </div>
  )
}

export default Rehab