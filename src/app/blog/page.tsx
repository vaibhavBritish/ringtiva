"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../../../Redux/blogSlice";
import { RootState } from "../../../Redux/store";
import Link from "next/link";

const AllBlogs = () => {
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        if (Array.isArray(data.blogs)) {
          dispatch(setBlog(data.blogs));
        }
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, [dispatch]);

  if (loading)
    return (
      <div className="p-16 text-center text-lg font-medium">Loading...</div>
    );

  return (
    <div className=" ">
      <div className="relative h-[60vh] md:h-[70vh] w-full shadow-xl mb-16">
        <img
          src="/header.png"
          alt="Blogs"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white text-center bg-black/40 backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
            Discover Inspiring Blogs & Stories
          </h1>

          <p className="text-lg text-gray-200 max-w-xl mx-auto mb-6 drop-shadow-md">
            Explore expert insights, tutorials, and fresh articles crafted for
            learners, creators, and developers.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-10 py-12">


      <h2 id="blogs" className="text-4xl font-bold mb-10 text-center">
        Latest <span className="text-blue-600">Blogs</span>
      </h2>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-52 bg-gray-200">
                <img
                  src={
                    blog.image
                      ? blog.image
                      : "https://via.placeholder.com/600x400?text=No+Image"
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold line-clamp-2 text-gray-900 capitalize">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 line-clamp-3 flex-1">
                  {blog.description}
                </p>

                <Link href={`/blog/${blog.slug}`}>
                  <button className="mt-5 w-full bg-blue-600 text-white py-2.5 text-lg rounded-xl hover:bg-gray-900 transition font-medium">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      </section>

    </div>
  );
};

export default AllBlogs;
