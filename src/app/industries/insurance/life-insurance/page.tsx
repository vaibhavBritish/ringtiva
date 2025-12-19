import LeadGeneration from '@/app/products/lead-generation/page';
import Faq from '@/components/Faq';
import Leadgeneration from '@/components/Leadgeneration';
import Image from 'next/image'
import React from 'react'

const LifeInsurance = () => {
       const whyUs = [
        { id: 1, desc: "High-quality inbound calls from potential buyers" },
        { id: 2, desc: "15% sales conversion rate" },
        { id: 3, desc: "Real-time, pre-qualified, and 100% exclusive" },
        { id: 4, desc: "Pay for performance only" },
        { id: 5, desc: "Free tracking tool to monitor your campaign" },
        { id: 6, desc: "18 minutes average call duration from prospects" },
        { id: 7, desc: "100% customer satisfaction guaranteed" }
    ]
    return (
        <div>

            <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
                <Image
                    src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/life-insurance/bg-health.jpg"
                    alt="Health Insurance Banner"
                    width={2000}
                    height={2000}
                    className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
                    priority
                />

                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        High-Conversion <br /> Life Insurance Leads
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
                    <h1>Grow your business with high-quality life insurance leads</h1>
                    <p>
                        The Life insurance industry is saturated, and more agents are competing to get in front of potential customers. To close more deals and survive in this market, you must have access to high-quality and exclusive life insurance leads. Unlike before, when companies and agents rely on cold-calling, door-to-door knocking and spend thousands on TV and radio ads, smart agents are now growing their business by getting ready-to-buy prospects from companies like Ringtiva.
                    </p>

                    <p>
                        We offer agents and companies real-time life insurance leads that connect them with potential clients who are ready to buy what they are selling. We’ll help you generate high-intent inbound calls through Google ads, organic SEO, and targeted ads on TikTok, Instagram, Facebook, Twitter, and other social media platforms. Get in touch with us now to close more deals and earn more commission.
                    </p>
                </div>

                <div className='bg-[#f4f6fb] px-10 md:px-20 py-16 space-y-6 text-xl rounded-2xl shadow-lg mt-16'>
                    <h1 className='font-bold text-3xl text-blue-600'>Connect With Buyers In Your Neighborhoods</h1>
                    <p className='leading-relaxed'>
                        We are experts at combing the internet and helping our clients find potential buyers who are looking for information about life insurance. When you work with us, we'll get the prospects to call you directly so you won't have to cold-call a list of potential clients received via email or fax. You can expect an average of 18 minutes call duration from the leads we deliver.
                    </p>
                </div>
            </section>


            <section className='py-20 max-w-6xl mx-auto px-6 md:px-20 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
                    <div className='space-y-6 '>
                        <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Grow Your Brand With High-quality Life Insurance Leads</h1>
                        <p className='text-lg md:text-xl leading-relaxed'>
                            We don't just sell leads; our professionals will support you to achieve success. We offer best- in-class customer support and boasts of the latest technology. Create an account with Ringtiva now to start enjoying free access to our feature-packed dashboard. You can customize the types of buyers you want and track the ROI of every penny you spend with our advanced filtering system and state-of-the-art campaign monitoring tools.
                        </p>
                    </div>

                    <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
                        <Image
                            src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/life-insurance/lifeinsurance.png"
                            alt="Spend Less Medicare"
                            fill
                            className='object-cover rounded-2xl'
                        />
                    </div>
                </div>

                {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>

                    <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
                        <Image
                            src="/industries/freecalltracking.jpg"
                            alt="Spend Less Medicare"
                            fill
                            className='object-cover rounded-2xl'
                        />
                    </div>
                    <div className='space-y-6'>
                        <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Free Call Tracking Tools</h1>
                        <p className='text-lg md:text-xl leading-relaxed'>
                            When you create an account with us, you will get free access to our tracking tools which will help you monitor and listen to all calls; this is to ensure you don’t pay for telemarketing services that don’t matter to your business. Also, we have a fraud prevention system in place to detects fake calls and automatically prevent our clients from getting charged.
                        </p>
                    </div>
                </div> */}


                <div className='space-y-6'>
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>15% Sales Conversion Rate</h1>
                    <p className='text-lg md:text-xl leading-relaxed'>
                        Over the years, we have perfected our prospects' acquisition techniques and delivery methods. We offer the best sales conversion rate in the industry and take pride in our digital marketers’ unmatched results. Want to spend less on marketing and earn more revenue? Get in touch with us now!
                    </p>
                </div>

            </section>


            <section className="max-w-5xl px-10 py-14 mx-auto bg-[#f4f6fb] rounded-xl">
                <h1 className="text-3xl font-bold text-blue-600">
                    Why us?
                </h1>

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
                <Leadgeneration/>
            </section>

            <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20'>
                <h1 className='font-bold text-3xl text-blue-600'>Get Started Now!</h1>
                <p className='text-xl'>Want an unlimited stream of potential buyers in your pipeline?</p>

                <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Contact Us Now!</button>

                <p>to boost your sales and grow your business.</p>
            </section>
        </div>
    )
}

export default LifeInsurance;
