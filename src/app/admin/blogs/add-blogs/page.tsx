"use client";

import { useState } from "react";
import useCheckAuth from "../../../../../hooks/useCheckAuth";
import AdminLayout from "@/components/AdminLayout";

const AddBlogs = () => {
  const { user, loading } = useCheckAuth({ requireAdmin: true });

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (res.ok) {
      setForm({ ...form, image: data.url });
    } else {
      alert("Failed to upload image");
    }
  };

  const handleSubmit = async () => {
    if (!form.title || !form.description || !form.content) {
      alert("All fields are required");
      return;
    }

    setSubmitting(true);

    const res = await fetch("/api/admin/blog/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setSubmitting(false);

    if (res.ok) {
      alert("Blog added successfully!");
      setForm({
        title: "",
        description: "",
        content: "",
        image: "",
      });
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-bold text-gray-700 text-2xl animate-pulse">
          Verifying Credentials... Please wait
        </p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Blog</h1>

        <div className="flex flex-col gap-6">

          <div className="animate-fadeIn">
            <label className="text-gray-700 font-medium">Blog Title</label>
            <input
              name="title"
              placeholder="Enter blog title"
              className="border p-3 rounded-xl w-full mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300 focus:scale-105"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <label className="text-gray-700 font-medium">Short Description</label>
            <input
              name="description"
              placeholder="Enter blog description"
              className="border p-3 rounded-xl w-full mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300 focus:scale-105"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <label className="text-gray-700 font-medium">Blog Content</label>
            <textarea
              name="content"
              placeholder="Write the full blog content here..."
              rows={7}
              className="border p-3 rounded-xl w-full mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300 focus:scale-105"
              value={form.content}
              onChange={handleChange}
            />
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <label className="text-gray-700 font-medium">Upload Cover Image</label>

            <div className="mt-2 border-2 border-dashed rounded-xl p-6 text-center hover:border-green-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <input type="file" onChange={handleImageUpload} className="w-full" />
              <p className="text-sm text-gray-500 mt-2">
                {uploading ? "Uploading..." : "Choose an image to upload"}
              </p>
            </div>

            {form.image && (
              <img
                src={form.image}
                alt="Preview"
                className="w-40 mt-3 rounded-xl border shadow-sm transform transition-all duration-300 hover:scale-110"
              />
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-60 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            {submitting ? "Submitting..." : "Publish Blog"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddBlogs;
