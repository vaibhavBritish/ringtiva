"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6">

        <div>
          <h1 className="font-bold text-4xl text-blue-600">Let’s Talk</h1>
          <p className="text-lg text-gray-600 mt-4">
            Change the landscape of Affiliate marketing with us.
          </p>
          <p className="text-lg text-gray-600 mb-32">
            Just email us or call the nearest office to you.
          </p>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="font-semibold text-lg">PR and events</h2>
              <a className="text-blue-600 block" href="mailto:info@marketcall.com">
                info@marketcall.com
              </a>
              <p className="text-gray-600">+1 (844) 410-5210</p>
              <p className="text-gray-600">+1 (323) 310-9979</p>
            </div>

         
            <div>
              <h2 className="font-semibold text-lg">Sales</h2>
              <a className="text-blue-600 block" href="mailto:info@marketcall.com">
                info@marketcall.com
              </a>
              <p className="text-gray-600">+1 (844) 410-5210</p>
              <p className="text-gray-600">+1 (323) 310-9979</p>
            </div>

       
            <div>
              <h2 className="font-semibold text-lg">Accounting</h2>
              <a className="text-blue-600 block" href="mailto:info@marketcall.com">
                info@marketcall.com
              </a>
              <p className="text-gray-600">+1 (844) 410-5210</p>
              <p className="text-gray-600">+1 (323) 310-9979</p>
            </div>

       
            <div>
              <h2 className="font-semibold text-lg">Affiliates</h2>
              <a className="text-blue-600 block" href="mailto:affiliate@marketcall.com">
                affiliate@marketcall.com
              </a>
              <p className="text-gray-600">+1 (844) 410-5210</p>
              <p className="text-gray-600">+1 (323) 310-9979</p>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-10 mt-10">
            <div>
              <h2 className="font-semibold text-lg">Pasadena</h2>
              <p className="text-gray-600">155 S Fair Oaks Ave</p>
              <p className="text-gray-600">Pasadena</p>
              <p className="text-gray-600">CA</p>
              <p className="text-gray-600">91105</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Miami office</h2>
              <p className="text-gray-600">78 SW 7th St</p>
              <p className="text-gray-600">Miami</p>
              <p className="text-gray-600">FL</p>
              <p className="text-gray-600">33130</p>
            </div>
          </div>
        </div>


        <div className="bg-white shadow-xl py-10 px-10 mt-32 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Send a message</h2>
          <p className="text-gray-600 mb-8">
            We’re always open for conversation and glad to share our experience.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows={4}
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-600"
            ></textarea>

            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <p className="text-gray-600">
                I agree to <span className="text-blue-600">Privacy Policy</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Send message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
