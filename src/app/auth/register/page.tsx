"use client"
import React, { useState } from 'react'

const Register = () => {
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch("/api/auth/register", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata)
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || "Registration Failed")
      return
    }

    alert("Registration Successful")

    setformdata({
      username: "",
      email: "",
      password: ""
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Username</label>
            <input
              type="text"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
              name="username"
              value={formdata.username}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <input
              type="email"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Password</label>
            <input
              type="password"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </section>
    </div>
  )
}

export default Register