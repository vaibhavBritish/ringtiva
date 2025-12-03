import Image from "next/image";
import Counter from "@/components/Counter";

export default function Home() {
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
      img: "/advertiser.png",
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
      img: "/partners.jpg",
    },
  ];

  const products = [
    { id: 1, name: "Marketing Tools", img: "/marketing.svg" },
    { id: 2, name: "Fraud Prevention", img: "/fraud.svg" },
    { id: 3, name: "Automatization", img: "/automatic.svg" },
    { id: 4, name: "Lead Generation", img: "/lead.svg" },
    { id: 5, name: "Payouts", img: "/pay.svg" },
    { id: 6, name: "Dedicated Support", img: "/dedicated.svg" },
  ];

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight">
            A New Standard in <span className="text-blue-600">Performance Marketing</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Marketcall is the best affiliate network helping businesses get high-quality clients efficiently.
          </p>

          <p className="text-gray-600 text-lg">
            We deliver millions of successful conversions every year—powered by optimized traffic, smart routing, and proven results.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
              Get Clients
            </button>

            <button className="px-6 py-3 text-blue-600 border border-blue-600 font-semibold rounded-xl hover:bg-blue-700 hover:text-white transition">
              Monetize Your Traffic
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <video autoPlay loop muted playsInline width="800" className="rounded-3xl">
              <source src="/video-home.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="text-center space-y-3">
          <h1 className="font-semibold text-2xl text-gray-700">Product</h1>
          <h1 className="font-bold text-3xl md:text-4xl">Boost Your Digital Presence With Marketcall</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {cards.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>

              <div className="mt-6 space-y-3">
                {item.features.map((f, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✔</span>
                    <p className="text-gray-700">{f}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                {item.btn}
              </button>

              <div className="absolute bottom-4 right-4 opacity-80">
                <Image src={item.img} alt={item.title} width={200} height={200} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 py-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center space-y-4 p-6 hover:shadow-xl rounded-xl transition cursor-pointer"
            >
              <Image src={product.img} alt={product.name} width={40} height={40} />
              <h3 className="font-semibold text-sm text-center">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="font-extrabold text-3xl">
              Why Choose <span className="text-blue-600">Marketcall?</span>
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Marketcall is the best performance marketing solution. We help match advertisers with suitable
              affiliates, pairing them for long-term success in maximizing profits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our client-first approach drives us to deliver only the highest quality product for our customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have monthly releases of new features to give our advertisers and partners additional tools and
              functionality.
            </p>
          </div>

          <div className="shadow-xl rounded-3xl overflow-hidden">
            <Image src="/whychoose.jpg" alt="Why Choose Us" width={500} height={350} />
          </div>
        </div>
      </section>

      <section className="py-10">
        <Counter />
      </section>

      <section className="py-10">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl">
              Upcoming <span className="text-blue-600">Events</span>
            </h1>
            <p className="text-gray-700">We’re always open for conversation and happy to share our experience.</p>
          </div>
        </div>
      </section>

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
  );
}
