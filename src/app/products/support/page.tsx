import ProductHeader from "@/components/ProductHeader";
import Image from "next/image";
import React from "react";

const Support = () => {
    return (
        <div>
            <ProductHeader />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="text-center mb-10">
                    <h1 className="text-sm font-semibold tracking-wide text-blue-600">
                        SUPPORT
                    </h1>

                    <p className="font-bold text-3xl md:text-4xl text-gray-900 mt-2">
                        We’re here to help you anytime
                    </p>
                </div>
            </section>

            <section className="py-10 max-w-5xl mx-auto space-x-10">

                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Promo Materials</h2>
                        <h1 className="font-bold text-2xl py-2">Free Ready to use promos</h1>
                        <p>We develop landing pages and other promotional materials in several design options for advertisers. This may be a template, previously prepared version, or a custom unique design. Our partners can get them for free.</p>
                        <p className="py-2">Advertiser don’t worry about customers being confused with inaccurate information, and affiliates not waste their time and effort on creating promo materials.</p>
                    </div>
                    <div>
                        <Image src="/products/ready_to_use_promos.png" alt="call-recording" width={400} height={400} className="rounded-2xl" />
                    </div>
                </div>

                <div className="flex justify-between py-20">
                    <div>
                        <Image src="/products/personalmanager.png" alt="call-recording" width={400} height={400} className="rounded-2xl" />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Personal Manager</h2>
                        <h1 className="font-bold text-2xl py-2">We’ve got your back</h1>
                        <p>After sign up, the advertiser and webmaster get a personal manager so he can solve any problem and discuss any question. For advertisers, for example, he will guide through Ringtiva system, suggest which traffic sources are better, send all the necessary documents and tell you how to use the system’s features at 100%.</p>
                        <p className="py-2">We are always in touch and always ready to help you earn with Ringtiva.</p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Support 24/7</h2>
                        <h1 className="font-bold text-2xl py-2">Friendly Support</h1>
                        <p>Create bots, that manage your advertising campaigns, work with programs, calls, leads, offers, receive statuses and track them wherever you feel comfortable: by mail, SMS, a tracker or messenger.</p>
                    </div>
                    <div>
                        <Image src="/products/friendlySupport.png" alt="call-recording" width={400} height={400} className="rounded-2xl" />
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

export default Support;
