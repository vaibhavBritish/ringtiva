"use client";

import Image from "next/image";
import Counter from "@/components/Counter";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: "Advertisers",
      desc: "I am an advertiser, app developer, service provider or agency looking to reach the right customers and maximize profits.",
      features: [
        "Get promote by super affiliates",
        "Easy to use",
        "Pay only for qualified calls",
        "Detailed statistics and analytics",
      ],
      btn: "See all features",
      img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/advertiser.png",
    },
    {
      id: 2,
      title: "Partners",
      desc: "I am a publisher, website owner, influencer, email marketer, app developer looking to promote brands, products and services and maximize my revenue.",
      features: [
        "Only top offers",
        "Weekly payouts",
        "Free advertising tools",
        "Exclusive verticals",
        "High conversion landing pages for each offer",
      ],
      btn: "Become a partner",
      img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/partners.jpg",
    },
  ];

  const products = [
    { id: 1, name: "Marketing Tools", img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/marketing.svg" },
    { id: 2, name: "Fraud Prevention", img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/fraud.svg" },
    { id: 3, name: "Automatization", img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/automatic.svg" },
    { id: 4, name: "Lead Generation", img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/lead.svg" },
    { id: 5, name: "Payouts", img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/pay.svg" },
    { id: 6, name: "Dedicated Support", img: "https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/dedicated.svg" },
  ];

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 animate-fadeIn">
        <div className="md:w-1/2 space-y-6 animate-slideInLeft">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight">
            A New Standard in <span className="text-blue-600">Performance Marketing</span>
          </h1>

          <p className="text-gray-600 text-lg transition-opacity duration-300 hover:opacity-80">
            Ringtiva is the best affiliate network helping businesses get high-quality clients efficiently.
          </p>

          <p className="text-gray-600 text-lg transition-opacity duration-300 hover:opacity-80">
            We deliver millions of successful conversions every year—powered by optimized traffic, smart routing, and proven results.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Clients
            </button>

            <button className="px-6 py-3 text-blue-600 border border-blue-600 font-semibold rounded-xl hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Monetize Your Traffic
            </button>
          </div>
        </div>

        <div className="md:w-1/2 animate-slideInRight">
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <video autoPlay loop muted playsInline width="800" className="rounded-3xl">
              <source src="https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/homepage-videos/video-home.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <section className="py-20" ref={sectionRef}>
        <div className="text-center space-y-3 animate-fadeInUp">
          <h1 className="font-semibold text-2xl text-gray-700">Product</h1>
          <h1 className="font-bold text-3xl md:text-4xl">Boost Your Digital Presence With Ringtiva</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {cards.map((item, index) => (
            <div
              key={item.id}
              className={`relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold transition-colors duration-300 hover:text-blue-600">{item.title}</h2>
                <p className="text-gray-600 transition-opacity duration-300 hover:opacity-80">{item.desc}</p>
              </div>

              <div className="mt-6 space-y-3">
                {item.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                    <span className="text-green-600 text-xl">✔</span>
                    <p className="text-gray-700">{f}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {item.btn}
              </button>

              <div className="absolute bottom-4 right-4 opacity-80 transform transition-all duration-300 hover:scale-110 hover:opacity-100">
                <Image src={item.img} alt={item.title} width={200} height={200} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 py-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col items-center space-y-4 p-6 hover:shadow-xl rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Image src={product.img} alt={product.name} width={40} height={40} className="transform transition-transform duration-300 hover:rotate-12" />
              <h3 className="font-semibold text-sm text-center transition-colors duration-300 hover:text-blue-600">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-1/2 space-y-6 animate-fadeInUp">
            <h1 className="font-extrabold text-3xl">
              Why Choose <span className="text-blue-600">Ringtiva?</span>
            </h1>
            <p className="text-gray-700 leading-relaxed transition-opacity duration-300 hover:opacity-80">
              Ringtiva is the best performance marketing solution. We help match advertisers with suitable
              affiliates, pairing them for long-term success in maximizing profits.
            </p>
            <p className="text-gray-700 leading-relaxed transition-opacity duration-300 hover:opacity-80">
              Our client-first approach drives us to deliver only the highest quality product for our customers.
            </p>
            <p className="text-gray-700 leading-relaxed transition-opacity duration-300 hover:opacity-80">
              We have monthly releases of new features to give our advertisers and partners additional tools and
              functionality.
            </p>
          </div>

          <div className="shadow-xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slideInRight">
            <Image src="https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/whychoose.jpg" alt="Why Choose Us" width={500} height={350} className="transition-transform duration-500 hover:scale-110" />
          </div>
        </div>
      </section>

      <section className="py-10">
        <Counter />
      </section>

      <section className="py-10">
        <div className="flex justify-between items-center animate-fadeInUp">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl">
              Upcoming <span className="text-blue-600">Events</span>
            </h1>
            <p className="text-gray-700 transition-opacity duration-300 hover:opacity-80">We're always open for conversation and happy to share our experience.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-10 rounded-3xl transform transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-scaleIn">
          <Image
            src="https://ringtivassests.blob.core.windows.net/ringtiva-images/homepage/subscribe-icon.svg"
            alt="events"
            width={100}
            height={100}
            className="mx-auto transform transition-transform duration-300 hover:scale-110 hover:rotate-12"
          />

          <h1 className="font-bold text-3xl transition-colors duration-300 hover:text-blue-600">Get Private Affiliate Case Studies</h1>
          <p className="text-gray-700 transition-opacity duration-300 hover:opacity-80">
            Learn all the secret strategies used by top-performing Ringtiva affiliates.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 focus:scale-105"
            />

            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
