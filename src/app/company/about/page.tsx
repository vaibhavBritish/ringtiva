"use client";

import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="w-full">

            <div className="max-w-6xl mx-auto py-12 px-4">
                <div className="text-center">
                    <h1 className="font-bold text-4xl py-5">
                        Hello, <span className="text-blue-600">We are Marketcall</span>
                    </h1>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        We're here to bring brands and publishers together. Through the ad
                        campaigns Marketcall powers, we reach more than 300 million people
                        each month.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="md:w-1/2">
                        <h1 className="font-bold text-3xl text-blue-600 mb-4">Our vision</h1>
                        <p className="text-gray-700 leading-relaxed">
                            More than just the need to fill a technological disparity, our goal is to
                            provide customers with groundbreaking lead generation technologies.
                            We want to trail-blaze a new way to strengthen both your online and
                            offline marketing campaigns. Within the industry, not many companies
                            dare to think outside the box. While some specialize in one call feature,
                            the challenge of mastering all aspects is often avoided. We combine
                            modern lead generation and management into one comprehensive
                            platform for our customers.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src="/company/officeImage.jpg"
                            alt="Marketcall Office"
                            width={500}
                            height={400}
                            className="w-full max-w-md object-cover rounded-lg shadow"
                        />
                    </div>
                </div>
            </div>

            
            <div className="max-w-6xl mx-auto py-14 px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <Image src="/company/about-icon1.svg" alt="" width={70} height={70} className="mx-auto" />
                    <p className="mt-3 font-semibold text-gray-800">Founded</p>
                    <p className="text-gray-600">August 2015</p>
                </div>

                <div>
                    <Image src="/company/about-icon2.svg" alt="" width={70} height={70} className="mx-auto" />
                    <p className="mt-3 font-semibold text-gray-800">
                        Office in Pasadena, CA, USA.
                    </p>
                </div>

                <div>
                    <Image src="/company/about-icon3.svg" alt="" width={70} height={70} className="mx-auto" />
                    <p className="mt-3 font-semibold text-gray-800">
                        We are mission driven, with a vision of better future
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;
