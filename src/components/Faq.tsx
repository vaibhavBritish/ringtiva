"use client"

import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "How much do health insurance leads cost?", a: "Lead costs vary based on competition, customer location, and call quality. High-intent insurance calls generally range from $15 – $80 per lead." },
        { q: "What is a good cost per lead?", a: "A good CPL depends on ROI. If conversion rate and lifetime value justify the expense, a CPL between $25 – $60 is considered profitable for most agents." },
        { q: "What are leads in insurance?", a: "Leads are potential customers who have shown interest in purchasing insurance and have shared contact details or requested a call." },
        { q: "How much do leads cost?", a: "Lead prices vary by product type. Health insurance leads typically cost more than auto or home due to demand and market competition." },
        { q: "How do you generate leads?", a: "Insurance leads are generated through paid ads, SEO, landing pages, call transfer systems, and real-time customer intent marketing." },
        { q: "Why do insurance agents fail?", a: "Most agents fail due to inconsistent lead flow, incorrect follow-ups, weak sales scripts, or lack of high-intent prospects." },
        { q: "How do I get insurance leads?", a: "You can generate leads through digital marketing or purchase ready-to-convert live calls and verified leads from trusted suppliers." },
    ];
    return (
        <div>
            <section className="py-20 max-w-5xl mx-auto px-6 md:px-10">
                <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl bg-white shadow-sm transition">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center text-left px-6 py-4 text-lg font-medium text-gray-800"
                            >
                                {item.q}
                                <FiChevronDown
                                    className={`text-blue-600 text-xl transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}>
                                <div className="px-6 py-4 text-gray-600 text-base border-t">{item.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Faq