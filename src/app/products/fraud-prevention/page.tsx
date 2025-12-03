import ProductHeader from "@/components/ProductHeader";
import Image from "next/image";
import React from "react";

const FraudPrevention = () => {
    return (
        <div>
            <ProductHeader />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="text-center mb-10">
                    <h1 className="text-sm font-semibold tracking-wide text-blue-600">
                        FRAUD PREVENTION
                    </h1>

                    <p className="font-bold text-3xl md:text-4xl text-gray-900 mt-2">
                        Understand what is good and what’s not
                    </p>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                        Over the years, we have formed the most accurate principles and methods of fraud tracking and instant response.
                    </p>
                </div>


                {/* <div className="flex justify-center gap-4 py-6">
                    <button className="px-5 py-2 rounded-full border text-gray-700 hover:bg-blue-600 hover:text-white transition font-medium shadow-sm">
                        For Advertisers
                    </button>

                    <button className="px-5 py-2 rounded-full border text-gray-700 hover:bg-blue-600 hover:text-white transition font-medium shadow-sm">
                        For Affiliates
                    </button>
                </div> */}
            </section>

            <section className="py-10 max-w-5xl mx-auto space-x-10">

                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Anti-fraud system</h2>
                        <h1 className="font-bold text-2xl py-2">Keeping you safe</h1>
                        <p>Based on analyzing the data set, identifying areas of allowable values and detecting statistical anomalies. Among other things, we have implemented speech recognition and text transcription, which allows us to produce the most accurate data during antifraud analysis, protecting our clients from fraudsters.</p>
                    </div>
                    <div>
                        <Image src="/products/keepingyousafe.png" alt="call-recording" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-between py-20">
                    <div>
                        <Image src="/products/savetimeonfraudcalls.png" alt="call-recording" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Anti fraud audit</h2>
                        <h1 className="font-bold text-2xl py-2">Save time on fraud calls</h1>
                        <p>Check up to 5,000 calls at the same time using pinging phone numbers, conversion, mobile operators ratio, phone number similarities, etc. Audit allows you to determine not only the obvious fraud, but also mixing wound calls into real ones to achieve the set targets. Thus, the anti-fraud audit allows you to identify unscrupulous sources that supply wound calls, and to exclude work with them.</p>
                    </div>
                    
                </div>

                {/* <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Voice Recognition</h2>
                        <h1 className="font-bold text-2xl py-2">Voice Recognition</h1>
                        <p>Voice transcription is a very convenient tool for analyzing calls. With this functionality, you can track calls by keywords that occur in a conversation and filter the quality of incoming traffic.</p>
                    </div>
                    <div>
                        <Image src="/products/voiceRecognition.png" alt="call-recording" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                </div> */}

            </section>
        </div>
    );
};

export default FraudPrevention;
