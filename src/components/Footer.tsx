import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2C1A4A] text-white py-16 px-6 md:px-20">
        <div>
            <Image src="/logo.png" alt="Logo" width={240} height={80} />
        </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pt-12 text-sm">
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p>+1 (844) 410-5210</p>
          <p>+1 (323) 310-9979</p>
          <p className="mt-4">info@Ringtiva.com</p>
          <p className="underline cursor-pointer">Terms and Conditions</p>
          <p className="underline cursor-pointer">Privacy Policy</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li>For advertisers</li>
            <li>For affiliates</li>
            <li>Marketing Tools</li>
            <li>Fraud prevention</li>
            <li>Automatization</li>
            <li>Payouts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Industries</h4>
          <ul className="space-y-2">
            <li>Insurance</li>
            <li>Finance</li>
            <li>Home Services</li>
            <li>Real Estate</li>
            <li>Travel</li>
            <li>Rehab</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Contacts</li>
            <li>Blog</li>
            <li>Vacancy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
