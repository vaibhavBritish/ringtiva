"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="flex h-screen bg-gray-100">


      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">User Panel</h2>

        <nav className="flex flex-col gap-4">
          {user?.userType === "ADVERTISER"
            ? (
              <Link href="/dashboard/advertiser" className="hover:text-gray-300">
                Dashboard
              </Link>
            )
            : user?.userType === "AFFILIATE"
              ? (
                <Link href="/dashboard/affiliate" className="hover:text-gray-300">
                  Dashboard
                </Link>
              )
              : null
          }
        </nav>
      </aside>


      <div className="flex-1 flex flex-col">

        <main className="p-6 overflow-y-auto h-full">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
