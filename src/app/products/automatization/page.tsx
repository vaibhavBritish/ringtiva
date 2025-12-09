import ProductHeader from "@/components/ProductHeader";
import Image from "next/image";
import React from "react";

const Automatization = () => {
    return (
        <div>
            <ProductHeader />

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="text-center mb-10">
                    <h1 className="text-sm font-semibold tracking-wide text-blue-600">
                        AUTOMATIZATION
                    </h1>

                    <p className="font-bold text-3xl md:text-4xl text-gray-900 mt-2">
                        Build deeper connections, more efficiently
                    </p>

                    {/* <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
                        Unlock powerful marketing features designed to boost visibility,
                        engage high-intent prospects, and grow your conversions effortlessly.
                    </p> */}
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
                        <h2 className="text-red-500 pt-14">Broker Management System</h2>
                        <h1 className="font-bold text-2xl py-2">
                            Broker Management System</h1><p>Our team of trained brokers will call the leads provided by the affiliate, lost calls, and calls that were not consulted for one reason or another, and also make a qualified consultation with the client and connect it with the advertiser. Brokers work in all languages in which offers are presented. This service is provided completely free of charge and is a serious help in the work.</p>
                    </div>
                    <div>
                        <Image src="/products/automatisation1.png" alt="Broker Management" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                </div>

                <div className="flex justify-between py-20">
                    <div>
                        <Image src="/products/lead-to-call.png" alt="lead-to-call" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">Lead-to-call service</h2>
                        <h1 className="font-bold text-2xl py-2">Import leads on the go</h1>
                        <p>Import your leads directly from Google Docs, Facebook, My Target, Zapier and many others. The lead-to-call service instantly transfers the lead to the processing to the professional team of Ringtiva Brokers for qualified advice. The service can be used by all affiliates for free.</p>
                    </div>

                </div>

                <div className="flex justify-between">
                    <div className="w-1/2">
                        <h2 className="text-red-500 pt-14">API / Post Back</h2>
                        <h1 className="font-bold text-2xl py-2">Integrate for flexibility</h1>
                        <p>API integration and Postback greatly improves workflow, allowing you to respond faster and save your money.</p>
                        <p>Create bots, that manage your advertising campaigns, work with programs, calls, leads, offers, receive statuses and track them wherever you feel comfortable: by mail, SMS, a tracker or messenger.</p>
                    </div>
                    <div>
                        <Image src="/products/api.png" alt="api" width={400} height={400} className="rounded-2xl shadow-lg" />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Automatization