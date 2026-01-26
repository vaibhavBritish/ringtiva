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
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

 
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/dashboard/advertiser", {
          credentials: "include",
        });
        const data = await res.json();
        if (Array.isArray(data.leads)) {
          dispatch(setLeads(data.leads));
        }
      } catch (err) {
        showToast("Failed to fetch leads", "error");
      }
    };

    fetchLeads();
  }, [dispatch]);

  
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

 
  const deleteLead = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this lead?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/dashboard/advertiser/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error();

      dispatch(setLeads(leads.filter((lead: any) => lead.id !== id)));
      setSelectedLead(null);
      showToast("Lead deleted successfully", "success");
    } catch {
      showToast("Failed to delete lead", "error");
    }
  };

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
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Advertiser Dashboard</h1>
        <Link href="/dashboard/advertiser/addproduct">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Add Product
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
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
            {leads.map((lead: any) => (
              <tr
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className="border-t hover:bg-gray-50 cursor-pointer"
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
          <div className="p-10 text-center">
            <p className="text-lg font-semibold">No leads found</p>
            <p className="text-gray-500">Please add a product</p>
          </div>
        )}
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[80%] max-w-2xl p-6 relative">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-3 right-4 text-xl"
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
            </div>

            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => deleteLead(selectedLead.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Delete Lead
              </button>
            </div>
          </div>
        </div>
      )}


      {toast && (
        <div
          className={`fixed bottom-5 right-5 px-5 py-3 rounded-lg text-white shadow-lg ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    </DashboardLayout>
  );
};

export default AdvertiserDashboard;

const Detail = ({ label, value }: { label: string; value: any }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium">{value || "—"}</p>
  </div>
);
