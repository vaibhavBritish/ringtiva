import Faq from '@/components/Faq'
import Leadgeneration from '@/components/Leadgeneration'
import Image from 'next/image'
import React from 'react'

const AutoInsurance = () => {
    const whyUs = [
        { id: 1, desc: "Our services guarantee you a high conversion rate" },
        { id: 2, desc: "Get high intent inbound calls from ready-to-buy consumers" },
        { id: 3, desc: "Track and listen to all calls" },
        { id: 4, desc: "Pay for only inbound calls that matter to your brand" },
        { id: 5, desc: "Custom filters to get the exact type of prospects you want" },
        { id: 6, desc: "Impeccable customer service that guarantees you 100% satisfaction" }
    ]
    return (
        <div>
            <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-r from-[#6A4DFF] to-[#8E68FF] overflow-hidden">
                <Image
                    src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/auto-insurance/bg-health.jpg"
                    alt="Health Insurance Banner"
                    width={2000}
                    height={2000}
                    className="absolute right-0 top-0 h-full w-full opacity-25 object-cover hidden md:block"
                    priority
                />

                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-20">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
                        Close More Deals with High-Quality <br /> Auto Insurance Leads
                    </h1>

                    <p className="text-white/90 mt-6 text-lg max-w-2xl leading-relaxed">
                        Use unique marketing tools, get high-conversion, high-quality calls and increase your ROI.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <button className="px-8 py-3 bg-white text-[#6A4DFF] rounded-md font-semibold hover:bg-gray-100 shadow-md transition hover:-translate-y-1">
                            Get Clients
                        </button>
                        <button className="px-8 py-3 bg-white text-[#6A4DFF] rounded-md font-semibold hover:bg-gray-100 shadow-md transition hover:-translate-y-1">
                            Monetize Your Traffic
                        </button>
                    </div>
                </div>
            </section>


            <section className="max-w-6xl mx-auto px-10 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="md:w-1/2 space-y-5 text-gray-700 text-lg leading-relaxed">
                        <p>
                            More auto insurance shoppers are turning to the internet to get quotes, compare offers from different companies, and find answers to their questions. Fewer and fewer consumers are visiting local agents, and cold calling isn’t as effective as it was before.
                        </p>

                        <p>
                            The competition online is fierce, and getting auto insurance leads is becoming more challenging. You will have to compete smartly with thousands of agents and big names that are already in Google’s top spot. We provide ready-to-buy prospects for companies and agents that want to increase their profit and scale up their business.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/auto-insurance/autoinsurance.png"
                            alt="Auto Insurance Illustration"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center justify-between gap-10 space-y-20">
                    <div className="md:w-1/2 flex justify-center mt-10">
                        <Image
                            src="https://ringtivassests.blob.core.windows.net/ringtiva-images/industries/auto-insurance/autoinsurance2.png"
                            alt="Auto Insurance Illustration"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>

                    <div className="md:w-1/2 space-y-5 text-gray-700 text-lg leading-relaxed">
                        <h1 className='font-bold text-3xl'>Stop Prospecting and Start Closing</h1>

                        <p>
                            TWe supply the best auto insurance leads so you won’t have to waste time, energy, and money on prospecting new customers. We’ll generate high intent inbound calls through targeted campaigns, SEO, Google Ads, and social media platforms like Facebook, TikTok, Snapchat, etc. At Ringtiva, we are committed to helping you succeed by supplying consumers that are ready to buy your products.

                        </p>
                    </div>

                </div>

                <p className='font-serif text-xl'>When you purchase our services, we’ll help you get high intent inbound calls from people that want to obtain a new policy or better renewal plans. Let’s focus on helping you generate highly-converting prospects so you can focus on closing more deals and other core functions of your business.</p>
            </section>


            <section className="max-w-5xl px-10 py-14 mx-auto bg-[#f4f6fb] rounded-xl">
                <h1 className="text-3xl font-bold text-blue-600">
                    Why Ringtiva Auto Insurance Leads?
                </h1>

                <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                    We are renowned for providing highly-converting prospects at competitive rates.
                    We can work with your budget to deliver top-notch services that meet your needs.
                    We are the best in the industry for the following reasons:
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

            <section>
                <Faq />
            </section>

            <section>
                <Leadgeneration />
            </section>

            <section className='max-w-5xl mx-auto text-center bg-[#f4f6fb] px-10 py-10 rounded-2xl shadow-lg space-y-10 mb-20 mt-15'>
                <h1 className='font-bold text-3xl text-blue-600'>Start selling with Highly-Converting Medicare Leads!</h1>
                <p className='text-xl'>Start Selling With Highly-Converting Medicare Leads! Reach thousands of seniors and start growing your business with high-quality prospects from Ringtiva. There no long term commitments or contract required.</p>

                <button className='bg-blue-600 text-white rounded-2xl border px-6 py-4'>Buy Leads Now!</button>

                <p>Buy now, and let’s help you get ahead of your competitors.</p>
            </section>

        </div>
    )
}

export default AutoInsurance
