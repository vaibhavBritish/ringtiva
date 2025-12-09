import LeadGeneration from '@/app/products/lead-generation/page';
import Faq from '@/components/Faq';
import Leadgeneration from '@/components/Leadgeneration';
import Image from 'next/image'
import React from 'react'

const MedicareFoundation = () => {
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
                        Scale up your business <br /> with <span className="text-yellow-300">Medicare leads</span> that convert
                    </h1>

                    <p className="text-white/90 mt-6 text-lg max-w-2xl leading-relaxed">
                        Get access to high-intent customers through advanced marketing tools — boost conversions and maximize ROI.
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
                    <p>
                        About 10,000 baby boomers in America turn 65 every day and become eligible for Medicare. Most of them are unaware of how Medicare works, what benefits they can receive, and which plans suit their needs. Thousands search online daily for answers.
                    </p>

                    <p>
                        To tap into this rapidly growing market, you need to reach senior citizens when they are actively looking for solutions. At Ringtiva, we provide high-intent calls from seniors and families seeking insurance coverage, supplemental plans, and more. Our converting leads will help you scale faster, beat competitors, and reach more customers.
                    </p>
                </div>

                <div className='bg-[#f4f6fb] px-10 md:px-20 py-16 space-y-6 text-xl rounded-2xl shadow-lg mt-16'>
                    <h1 className='font-bold text-3xl text-blue-600'>Get More Inbound Calls From Seniors</h1>
                    <p className='leading-relaxed'>
                        You don’t have to chase prospects — we bring them to you. Our marketing experts generate high-intent inbound calls using Google Ads, SEO, TikTok, Facebook, Instagram, YouTube, and more. We deliver detailed prospect information so you can close deals quickly and effectively.
                        Start buying Medicare leads today and accelerate your business growth.
                    </p>
                </div>
            </section>


            <section className='py-20 max-w-6xl mx-auto px-6 md:px-20 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
                    <div className='space-y-6 '>
                        <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Spend Less, Sell More</h1>
                        <p className='text-lg md:text-xl leading-relaxed'>
                            Regardless of your budget, we ensure maximum ROI with our high-converting Medicare prospects. Stop spending money on low-quality leads or outdated marketing methods like cold calling and magazine ads. We offer competitive prices, and you only pay for leads that match your chosen filters and criteria.
                        </p>
                    </div>

                    <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
                        <Image
                            src="/industries/medicareSpendless.jpg"
                            alt="Spend Less Medicare"
                            fill
                            className='object-cover rounded-2xl'
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>

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
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                    <div className='space-y-6'>
                        <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Take Charge of your compaign</h1>
                        <p className='text-lg md:text-xl leading-relaxed'>
                            Track every dollar you spend on your Medicare Leads with our feature-packed dashboard. You can use our filters to customize the type of leads you want, set your desired age, location, and more. Also, you can pause your campaign anytime, determine when you want the prospects to contact you, and set your budget.
                        </p>
                    </div>

                    <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
                        <Image
                            src="/industries/takecharge.jpg"
                            alt="Spend Less Medicare"
                            fill
                            className='object-cover rounded-2xl'
                        />
                    </div>
                </div>
            </section>

            <section className='max-w-6xl mx-auto px-10 py-10'>
                <Faq/>
            </section>

            <section className='py-10'>
                <Leadgeneration/>
            </section>

            <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20'>
                <h1 className='font-bold text-3xl text-blue-600'>Start selling with Highly-Converting Medicare Leads!</h1>
                <p className='text-xl'>Start Selling With Highly-Converting Medicare Leads! Reach thousands of seniors and start growing your business with high-quality prospects from Ringtiva. There no long term commitments or contract required.</p>

                <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>

                <p>Buy now, and let’s help you get ahead of your competitors.</p>
            </section>
        </div>
    )
}

export default MedicareFoundation;
