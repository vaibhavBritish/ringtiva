import ProductHeader from "@/components/ProductHeader";
import Image from "next/image";
import React from "react";

const Marketingtools = () => {
    return (
        <div>
            <ProductHeader />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="text-center mb-10">
                    <h1 className="text-sm font-semibold tracking-wide text-blue-600">
                        MARKETING TOOLS
                    </h1>

                    <p className="font-bold text-3xl md:text-4xl text-gray-900 mt-2">
                        Attract qualified calls & get the leads you need
                    </p>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                        Unlock powerful marketing features designed to boost visibility,
                        engage high-intent prospects, and grow your conversions effortlessly.
                    </p>
                </div>


                <div className="flex justify-center gap-4 py-6">
                    <button className="px-5 py-2 rounded-full border text-gray-700 hover:bg-blue-600 hover:text-white transition font-medium shadow-sm">
                        For Advertisers
                    </button>

                    <button className="px-5 py-2 rounded-full border text-gray-700 hover:bg-blue-600 hover:text-white transition font-medium shadow-sm">
                        For Affiliates
                    </button>
                </div>
            </section>

            <section className="py-10 max-w-5xl mx-auto space-x-10">

                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Call Recording</h2>
                        <h1 className="font-bold text-2xl py-2">Listen to incoming calls</h1>
                        <p>Call recording allows you to track the quality of incoming traffic and adjust the advertising activities of affiliates connected to your offers.</p>
                    </div>
                    <div>
                        <Image src="https://ringtivassests.blob.core.windows.net/ringtiva-images/product/marketing-tools/marketintools.png" alt="call-recording" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-between py-20">
                    <div>
                        <Image src="https://ringtivassests.blob.core.windows.net/ringtiva-images/product/marketing-tools/automatedFollowup.png" alt="call-recording" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Call Logic</h2>
                        <h1 className="font-bold text-2xl py-2">Automated Follow Up</h1>
                        <p>Call logic combines same-type offers into bundles. This helps advertisers track their activity more effectively.</p>
                    </div>
                    
                </div>

                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Voice Recognition</h2>
                        <h1 className="font-bold text-2xl py-2">Voice Recognition</h1>
                        <p>Voice transcription is a very convenient tool for analyzing calls. With this functionality, you can track calls by keywords that occur in a conversation and filter the quality of incoming traffic.</p>
                    </div>
                    <div>
                        <Image src="https://ringtivassests.blob.core.windows.net/ringtiva-images/product/marketing-tools/voiceRecognition.png" alt="call-recording" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Marketingtools;
