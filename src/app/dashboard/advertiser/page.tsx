"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { setLeads } from "../../../../Redux/leadSlice";
import useCheckAuth from "../../../../hooks/useCheckAuth";

const AdvertiserDashboard = () => {
  const { user, loading } = useCheckAuth({ requireRole: "ADVERTISER" });
  const leads = useSelector((state: RootState) => state.leads.leads);
  const dispatch = useDispatch();

  const [selectedLead, setSelectedLead] = useState<any>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      const res = await fetch("/api/dashboard/advertiser", {
        credentials: "include",
      });
      const data = await res.json();
      if (Array.isArray(data.leads)) {
        dispatch(setLeads(data.leads));
      }
    };

    fetchLeads();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Verifying Credentials...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6 animate-fadeInDown">
        <h1 className="text-2xl font-bold">Advertiser Dashboard</h1>
        <Link href="/dashboard/advertiser/addproduct">
          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Add Product
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow border animate-fadeIn">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Payout</th>
              <th className="px-4 py-3">Leads Limit</th>
              <th className="px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className="border-t hover:bg-gray-50 cursor-pointer transition-all duration-300 transform hover:scale-[1.01]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <td className="px-4 py-3 font-medium">{lead.fullName}</td>
                <td className="px-4 py-3">{lead.category}</td>
                <td className="px-4 py-3">{lead.city}</td>
                <td className="px-4 py-3">₹{lead.payouts}</td>
                <td className="px-4 py-3">{lead.leadsLimit}</td>
                <td className="px-4 py-3">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {leads.length === 0 && (
          <div className="flex flex-col items-center justify-center p-10 text-center animate-fadeInUp">
            <p className="text-lg font-semibold text-gray-700">
              No leads found
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Please add a product to start receiving leads.
            </p>
          </div>
        )}

      </div>

      {selectedLead && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl w-[80%] max-w-2xl p-6 relative animate-scaleIn transform transition-all duration-300">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-3 right-4 cursor-pointer text-gray-500 text-xl transition-all duration-300 hover:text-red-600 hover:scale-110"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Lead Details</h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <Detail label="Full Name" value={selectedLead.fullName} />
              <Detail label="Category" value={selectedLead.category} />
              <Detail label="Sub Category" value={selectedLead.subCategory} />
              <Detail label="Offer Type" value={selectedLead.offerType} />
              <Detail label="Country" value={selectedLead.countryRegion} />
              <Detail label="State" value={selectedLead.stateProvince} />
              <Detail label="City" value={selectedLead.city} />
              <Detail label="Postal Code" value={selectedLead.postalCode} />
              <Detail label="Payout" value={`₹${selectedLead.payouts}`} />
              <Detail label="Leads Limit" value={selectedLead.leadsLimit} />
              <Detail
                label="Merchant Can Refuse"
                value={
                  selectedLead.isMerchantAllowedToRefuseLeads
                    ? "Yes"
                    : "No"
                }
              />
              <Detail label="Tools" value={selectedLead.tools || "—"} />
            </div>

            {selectedLead.imageUrl && (
              <div className="mt-4 transform transition-all duration-300 hover:scale-105">
                <p className="font-semibold mb-2">Image</p>
                <img
                  src={selectedLead.imageUrl}
                  alt="Lead"
                  className="rounded-lg border max-h-60"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdvertiserDashboard;

const Detail = ({ label, value }: { label: string; value: any }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);
