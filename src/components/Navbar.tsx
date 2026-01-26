"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../Redux/userSlice";
import { RootState } from "../../Redux/store";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);

  const productRef = useRef<HTMLLIElement | null>(null);
  const companyRef = useRef<HTMLLIElement | null>(null);

  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    dispatch(clearUser());
    router.push("/");
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (productRef.current && !productRef.current.contains(e.target)) setProductMenu(false);
      if (companyRef.current && !companyRef.current.contains(e.target)) setCompanyMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="w-full backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-50 animate-fadeInDown">
      <div className="max-w-7xl mx-auto py-4 px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <div style={{ position: "relative", width: "170px", height: "50px" }}>
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </div>
          </Link>

          <div className="hidden md:block">
            <ul className="flex space-x-8 text-gray-900 font-medium items-center">
              <li className="relative" ref={productRef}>
                <button
                  onClick={() => {
                    setProductMenu(!productMenu);
                    setCompanyMenu(false);
                  }}
                  className="flex items-center gap-1 transition-all duration-300 hover:text-blue-700 hover:scale-105"
                >
                  Product <ChevronDown size={16} className={`transition-transform duration-300 ${productMenu ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute left-0 top-9 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl p-5 w-64 transition-all duration-300 ease-out ${productMenu ? "opacity-100 scale-100 visible animate-fadeIn" : "opacity-0 scale-95 invisible"
                    }`}
                >
                  <ul className="space-y-3 text-gray-700">
                    <li><Link href="/products/marketing-tools" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Marketing Tools</Link></li>
                    <li><Link href="/products/automatization" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Automatization</Link></li>
                    <li><Link href="/products/payouts" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Payouts</Link></li>
                    <li><Link href="/products/fraud-prevention" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Fraud Prevention</Link></li>
                    <li><Link href="/products/lead-generation" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Lead Generation</Link></li>
                    <li><Link href="/products/support" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Support</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link href="/helpcenter" className="hover:text-blue-700 transition-all duration-300 hover:scale-105">Help Center</Link></li>
              <li><Link href="/industries" className="hover:text-blue-700 transition-all duration-300 hover:scale-105">Industries</Link></li>

              <li className="relative" ref={companyRef}>
                <button
                  onClick={() => {
                    setCompanyMenu(!companyMenu);
                    setProductMenu(false);
                  }}
                  className="flex items-center gap-1 transition-all duration-300 hover:text-blue-700 hover:scale-105"
                >
                  Company <ChevronDown size={16} className={`transition-transform duration-300 ${companyMenu ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute left-0 top-9 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl p-5 w-60 transition-all duration-300 ease-out ${companyMenu ? "opacity-100 scale-100 visible animate-fadeIn" : "opacity-0 scale-95 invisible"
                    }`}
                >
                  <ul className="space-y-3 text-gray-700">
                    <li><Link href="/company/about" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">About Us</Link></li>
                    <li><Link href="/company/contact" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Contact</Link></li>
                    <li><Link href="/company/careers" className="block hover:text-blue-700 transition-colors duration-200 transform hover:translate-x-1">Careers</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link href="/blog" className="hover:text-blue-700 transition-all duration-300 hover:scale-105">Blog</Link></li>
            </ul>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Link href="/auth/login">
                  <button className="px-3 text-blue-700 font-medium hover:underline transition-all duration-300 transform hover:scale-105">
                    Login
                  </button>
                </Link>
                <Link href="/auth/register">
                  <button className="px-5 py-2 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <>
                {user.userType && (
                  <Link href={user.userType === "ADVERTISER" ? "/dashboard/advertiser" : "/dashboard/affiliate"}>
                    <button className="px-4 py-2 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg">
                      Dashboard
                    </button>
                  </Link>
                )}
                <span className="text-blue-700 font-medium transition-opacity duration-300 hover:opacity-80">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <button className="md:hidden transition-transform duration-300 hover:scale-110" onClick={() => setOpen(!open)}>
            {open ? <X size={28} className="animate-scaleIn" /> : <Menu size={28} className="animate-scaleIn" />}
          </button>
        </nav>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-125 opacity-100 animate-fadeIn" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="mt-4 space-y-5 text-gray-900 font-medium">
            <li><Link href="/helpcenter" className="block transition-all duration-300 hover:text-blue-700 hover:translate-x-2">Help Center</Link></li>
            <li><Link href="/industries" className="block transition-all duration-300 hover:text-blue-700 hover:translate-x-2">Industries</Link></li>
            <li><Link href="/blog" className="block transition-all duration-300 hover:text-blue-700 hover:translate-x-2">Blog</Link></li>

            {!user ? (
              <>
                <li><Link href="/auth/login" className="block py-1 transition-all duration-300 hover:text-blue-700 hover:translate-x-2">Login</Link></li>
                <li><Link href="/auth/register" className="block py-1 transition-all duration-300 hover:text-blue-700 hover:translate-x-2">Signup</Link></li>
              </>
            ) : (
              <>
                {user.userType && (
                  <li>
                    <Link href={user.userType === "ADVERTISER" ? "/dashboard/advertiser" : "/dashboard/affiliate"} className="block py-1 text-blue-700 font-medium transition-all duration-300 hover:translate-x-2">Dashboard</Link>
                  </li>
                )}
                <li className="text-blue-700 transition-opacity duration-300 hover:opacity-80">{user.email}</li>
                <li>
                  <button onClick={handleLogout} className="text-red-600 transition-all duration-300 hover:text-red-700 hover:translate-x-2">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
