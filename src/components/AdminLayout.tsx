"use client";
import React from "react";
import Link from "next/link";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      
  
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6 animate-slideInLeft">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-4">
          <Link href="/admin" className="hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2">Dashboard</Link>
          <Link href="/admin/blogs" className="hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2">Blogs</Link>
          <Link href="/admin/users" className="hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2">Users</Link>
        </nav>
      </aside>


      <div className="flex-1 flex flex-col">


        <header className="bg-white shadow p-4 flex justify-between items-center animate-fadeInDown">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>

        <main className="p-6 overflow-y-auto h-full">
          {children}
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;
