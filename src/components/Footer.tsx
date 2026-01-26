import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2C1A4A] text-white py-16 px-6 md:px-20 animate-fadeInUp">
        <div className="transform hover:scale-105 transition-transform duration-300">
            <Image src="/logo.png" alt="Logo" width={240} height={80} className="transition-opacity duration-300 hover:opacity-80" />
        </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pt-12 text-sm">
        <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          <h4 className="font-semibold mb-4 transition-colors duration-300 hover:text-blue-300">Contact</h4>
          <p className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1">+1 (844) 410-5210</p>
          <p className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1">+1 (323) 310-9979</p>
          <p className="mt-4 transition-all duration-300 hover:text-blue-300 hover:translate-x-1">info@Ringtiva.com</p>
          <p className="underline cursor-pointer transition-all duration-300 hover:text-blue-300 hover:translate-x-1">Terms and Conditions</p>
          <p className="underline cursor-pointer transition-all duration-300 hover:text-blue-300 hover:translate-x-1">Privacy Policy</p>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <h4 className="font-semibold mb-4 transition-colors duration-300 hover:text-blue-300">Product</h4>
          <ul className="space-y-2">
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">For advertisers</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">For affiliates</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Marketing Tools</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Fraud prevention</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Automatization</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Payouts</li>
          </ul>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          <h4 className="font-semibold mb-4 transition-colors duration-300 hover:text-blue-300">Industries</h4>
          <ul className="space-y-2">
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Insurance</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Finance</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Home Services</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Real Estate</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Travel</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Rehab</li>
          </ul>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <h4 className="font-semibold mb-4 transition-colors duration-300 hover:text-blue-300">Company</h4>
          <ul className="space-y-2">
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">About</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Contacts</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Blog</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Vacancy</li>
          </ul>
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
          <h4 className="font-semibold mb-4 transition-colors duration-300 hover:text-blue-300">Follow</h4>
          <ul className="space-y-2">
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Facebook</li>
            <li className="transition-all duration-300 hover:text-blue-300 hover:translate-x-1 cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
