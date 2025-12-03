import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <section className="py-16 ">
                <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-10 rounded-3xl ">
                    <Image
                        src="/subscribe-icon.svg"
                        alt="events"
                        width={100}
                        height={100}
                        className="mx-auto"
                    />

                    <h1 className="font-bold text-3xl">Get Private Affiliate Case Studies</h1>
                    <p className="text-gray-700">
                        Learn all the secret strategies used by top-performing Marketcall affiliates.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subscribe