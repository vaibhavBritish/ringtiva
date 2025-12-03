"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { useParams } from "next/navigation";
import { setBlog } from "../../../../Redux/blogSlice";

const BlogBySlug = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const blog = blogs.find((b) => b.slug === slug);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (blog) return;

    const fetchBlogBySlug = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/blog/${slug}`);
        const data = await res.json();
        dispatch(setBlog([data.blog]));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchBlogBySlug();
  }, [slug, blog, dispatch]);

  if (loading) {
    return (
      <div className="p-10 text-center text-xl font-semibold animate-pulse">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return <div className="p-10 text-center text-lg">Blog not found</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-16">
  
      <div className="w-full bg-white flex justify-center py-8">
        <div className="max-w-4xl w-full flex justify-center">
          <img
            src={blog.image || "/default-banner.jpg"}
            alt={blog.title}
            className="w-full max-h-[450px] object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
  
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8 md:p-10">
  
        <p className="text-gray-600 text-lg mb-6 border-l-4 border-blue-600 pl-4">
          {blog.description}
        </p>
  
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          {blog.content.split("\n").map((line, index) => (
            <p key={index} className="mb-4">{line}</p>
          ))}
        </div>
  
      </div>
    </div>
  );
  
};

export default BlogBySlug;
