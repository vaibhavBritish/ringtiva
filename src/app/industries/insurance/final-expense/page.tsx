import LeadGeneration from '@/app/products/lead-generation/page';
import Faq from '@/components/Faq';
import Leadgeneration from '@/components/Leadgeneration';
import Image from 'next/image'
import React from 'react'

const FinalExpense = () => {
       const whyUs = [
        { id: 1, desc: "100% Exclusive" },
        { id: 2, desc: "No customer chasing" },
        { id: 3, desc: "Get high-intent inbound calls" },
        { id: 4, desc: "Custom filtering system" },
        { id: 5, desc: "Free call tracking tool to boost your ROI" },
        { id: 6, desc: "100% satisfaction guaranteed" },
        { id: 7, desc: "We charge for only services that matter to your business." }
    ]
    return (
        <div>

            <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden rounded-b-3xl">
                <Image
                    src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/final-expense/bg-health.jpg"
                    alt="Health Insurance Banner"
                    width={2000}
                    height={2000}
                    className="absolute right-0 top-0 h-full w-full opacity-20 object-cover hidden md:block"
                    priority
                />

                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        High-Conversion <br /> Final Expense Leads
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
                    <h1>Maximize your profit with exclusive final expense leads</h1>
                    <p>
                        More seniors are looking for cost-effective ways to cover the expense that may arise at death, so their medical bills, burial, or estate administration cost won’t pose a financial burden on their loved ones. Final Expense, also known as Burial Insurance, is a straightforward policy that is relatively easy to close. As an agent, all you need is to get in front of ready-to-buy consumers and maximize your profit.
                    </p>

                    <p>
                       Let’s help you do the prospecting so you can focus on closing deals and making more money. We provide high intent inbound calls from seniors who are interested in buying Burial Insurance. Our goal is to help you scale-up your growth by supplying highly-converting Final Expense Leads.
                    </p>
                </div>

                <div className='bg-[#f4f6fb] px-10 md:px-20 py-16 space-y-6 text-xl rounded-2xl shadow-lg mt-16'>
                    <h1 className='font-bold text-3xl text-blue-600'>100% Exclusive – No Sharing</h1>
                    <p className='leading-relaxed'>
                       We deliver only 100% exclusive Final Expense Leads. Some providers share prospects with several agents and agencies, thereby reducing your chances of converting. When you buy from us, you will get 100% exclusive leads that will not be reused or resold to anyone else.
                    </p>
                </div>
            </section>


            <section className='py-20 max-w-6xl mx-auto px-6 md:px-20 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20'>
                    <div className='space-y-6 '>
                        <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Reduce Follow-up Time with Inbound Calls</h1>
                        <p className='text-lg md:text-xl leading-relaxed'>
                            Don’t waste your resources chasing around dead-end prospects. We’ll supply you high intent inbound calls through our targeted Google ads campaign, Facebook, SEO, Snapchat, Instagram, and more. Buy now to start connecting with seniors ready to buy your products and those who need information about Burial Insurance.
                        </p>
                    </div>

                    <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
                        <Image
                            src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/final-expense/finalExpense.png"
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
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Pay for High-quality Prospects Only</h1>
                    <p className='text-lg md:text-xl leading-relaxed'>
                       You will get billed for only prospects looking for your products. We’ll never charge you for services that do not matter to your business. What more, we have a tracking system in place to help you monitor and listen to all calls and ensure you get the maximum ROI from every dollar you spend.
                    </p>
                </div>

            </section>


            <section className="max-w-5xl px-10 py-14 mx-auto bg-[#f4f6fb] rounded-xl">
                <h1 className="text-3xl font-bold text-blue-600">
                    Why us?
                </h1>

                <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                    Over the years, our result-focused services have earned us the trust of several insurance agents and agencies. We are the best company in the industry for the following reasons:
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
                <Leadgeneration/>
            </section>

            <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20'>
                <h1 className='font-bold text-3xl text-blue-600'>Buy now</h1>
                <p className='text-xl'>to start maximizing your profit!</p>

                <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>
                <p>Buy real-time Final Expense leads now to increase your business bottom line.</p>
            </section>
        </div>
    )
}

export default FinalExpense;
