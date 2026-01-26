"use client";

import { useState } from "react";

const ImageUpload = ({ onUploaded }: any) => {
  const [image, setImage] = useState<File | null>(null);

  const uploadImage = async () => {
    if (!image) return;

    const form = new FormData();
    form.append("file", image);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    onUploaded(data.url); 
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        onClick={uploadImage}
        className="bg-blue-600 text-white px-3 py-2 mt-3"
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
