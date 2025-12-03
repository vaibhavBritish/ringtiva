"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Industries = () => {
    return (
        <div className="w-full relative">

            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <Image
                    src="/header.png"
                    alt="header"
                    width={1920}
                    height={800}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 "></div>

                <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col justify-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        Lead Generation with Marketcall
                    </h1>
                    <p className="max-w-xl text-lg drop-shadow">
                        We attract high-quality Pay Per Call, CPL and CPA leads in a
                        variety of verticals. We work all over the world.
                    </p>
                </div>
            </div>


            <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">


                    <div>
                        <h2 className="text-2xl font-bold mb-3">Insurance</h2>
                        <ul className="space-y-2 text-blue-600 font-medium">
                            <Link href={'/industries/insurance/health-insurance'}><li>Health Insurance</li></Link>
                            <Link href={'/industries/insurance/medicare-insurance'}><li>Medicare Insurance</li></Link>
                            <Link href={'/industries/insurance/auto-insurance'}><li>Auto Insurance</li></Link>
                            <Link href={'/industries/insurance/life-insurance'}><li>Life Insurance</li></Link>
                            <Link href={'/industries/insurance/final-expense'}><li>Final Expense</li></Link>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold mb-3">Finance</h2>
                        <ul className="space-y-2 text-blue-600 font-medium">
                            <Link href={'/industries/finances/debt-settlement'}><li>Debt Settlement</li></Link>
                            <Link href={'/industries/finances/mortgage'}><li>Mortgage</li></Link>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold mb-3">Home Services</h2>
                        <ul className="space-y-2 text-blue-600 font-medium">
                            <Link href={"/industries/home-services/home-improvement"}><li>Home Improvement</li></Link>
                            <Link href={"/industries/home-services/solar"}><li>Solar</li></Link>
                            <Link href={"/industries/home-services/tv-&-internet"}><li>TV & Internet</li></Link>
                            <Link href={"/industries/home-services/home-security"}><li>Home Security</li></Link>
                            <Link href={"/industries/home-services/moving"}><li>Moving</li></Link>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold mb-3">Real Estate</h2>
                        <ul className="space-y-2 text-blue-600 font-medium">
                            <Link href={"industries/real-estate/sellers"}><li>Sellers</li></Link>
                            <Link href={"industries/real-estate/buyers"}><li>Buyers</li></Link>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold mb-3">Travel</h2>
                        <ul className="space-y-2 text-blue-600 font-medium">
                            <Link href={"/industries/travel/flightbooking"}><li>Flight Booking</li></Link>
                            <Link href={"/industries/travel/hotelbooking"}><li>Hotel Booking</li></Link>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold mb-3">Rehab</h2>
                        <ul className="space-y-2 text-blue-600 font-medium">
                            <Link href={"industries/rehab/"}><li>Rehab</li></Link>
                        </ul>
                    </div>

                </div>


                <div className="w-full bg-gray-50 shadow-md rounded-xl p-8">
                    <h2 className="text-2xl font-bold mb-2">
                        Didn’t find your vertical?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Leave your details below. We'll get in touch with you.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border rounded-lg px-4 py-3"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border rounded-lg px-4 py-3"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                        >
                            Send request
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Industries;
