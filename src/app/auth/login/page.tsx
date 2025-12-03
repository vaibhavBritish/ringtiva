"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../Redux/userSlice";
import type { AppDispatch } from "../../../../Redux/store";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formdata),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      if (data?.user) {
        dispatch(setUser(data.user));
      }

      alert("Login Successful");
      router.push("/");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
