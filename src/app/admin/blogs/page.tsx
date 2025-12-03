"use client";

import AdminLayout from "@/components/AdminLayout";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { setBlog } from "../../../../Redux/blogSlice";
import { useRouter } from "next/navigation";

const Admin = () => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await fetch("/api/admin/blog");
        const data = await res.json();
        if (Array.isArray(data.blogs)) {
          dispatch(setBlog(data.blogs));
        }
      } catch {}
      finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        dispatch(setBlog(blogs.filter((b) => b.id !== id)));
      }
    } catch {}
  };

  if (loading)
    return (
      <div className="p-16 text-center text-lg font-medium">Loading...</div>
    );

  return (
    <AdminLayout>
      <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
        <h2 className="text-2xl font-bold text-gray-800">All Blogs</h2>

        <button
          onClick={() => router.push("/admin/blogs/add-blogs")}
          className="px-5 py-2 bg-green-600 text-white rounded-xl text-sm font-medium shadow hover:bg-green-700 transition"
        >
          Create Blog
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {blogs.length === 0 && (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No blogs found
          </p>
        )}

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border"
          >
            <img
              src={blog.image || "/placeholder.png"}
              alt={blog.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 capitalize">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {blog.description}
              </p>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => router.push(`/admin/blog/edit/${blog.slug}`)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-xl font-medium hover:bg-blue-700 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(blog.id)}
                  className="px-4 py-2 bg-red-600 text-white text-sm rounded-xl font-medium hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </AdminLayout>
  );
};

export default Admin;
