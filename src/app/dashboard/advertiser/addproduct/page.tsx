"use client";

import DashboardLayout from "@/components/DashboardLayout";
import React, { useState } from "react";

const AdvertiserAddProduct = () => {
  const [formData, setFormData] = useState<any>({
    countryRegion: "",
    stateProvince: "",
    city: "",
    postalCode: "",
    category: "",
    subCategory: "",
    fullName: "",
    offerType: "",
    payouts: "",
    isMerchantAllowedToRefuseLeads: false,
    leadsLimit: "",
    materialModeration: "",
    tools: "",
    imageFile: null,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e: any) => {
    setFormData((prev: any) => ({
      ...prev,
      imageFile: e.target.files[0],
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const submissionData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        submissionData.append(key, value as any);
      }
    });

    try {
      const res = await fetch("/api/dashboard/advertiser", {
        method: "POST",
        body: submissionData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Product Added Successfully");
        setFormData({
          countryRegion: "",
          stateProvince: "",
          city: "",
          postalCode: "",
          category: "",
          subCategory: "",
          fullName: "",
          offerType: "",
          payouts: "",
          isMerchantAllowedToRefuseLeads: false,
          leadsLimit: "",
          materialModeration: "",
          tools: "",
          imageFile: null,
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          Add Your Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            ["countryRegion", "Country / Region"],
            ["stateProvince", "State / Province"],
            ["city", "City"],
            ["postalCode", "Postal Code"],
            ["category", "Category"],
            ["subCategory", "Sub Category"],
            ["fullName", "Full Name"],
            ["offerType", "Offer Type"],
            ["payouts", "Payouts"],
            ["leadsLimit", "Leads Limit"],
            ["tools", "Tools"],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="block text-sm font-medium">{label}</label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="mt-1 w-full border rounded p-2"
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium">
              Material Moderation
            </label>
            <textarea
              name="materialModeration"
              value={formData.materialModeration}
              onChange={handleChange}
              className="mt-1 w-full border rounded p-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isMerchantAllowedToRefuseLeads"
              checked={formData.isMerchantAllowedToRefuseLeads}
              onChange={handleChange}
            />
            <label>Merchant Allowed to Refuse Leads</label>
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Add Product
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AdvertiserAddProduct;
