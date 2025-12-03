import React from 'react';

const Vacancy = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">

      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">We’re Hiring</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We’re looking for passionate and talented people to join us on our mission.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
          At Marketcall, we value clear communication, ownership, and responsibility.
        </p>
      </div>


      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">Apply Now</h2>
        <p className="text-gray-600 mt-3">
          Send us your resume and transcripts at
        </p>

        <a
          href="mailto:info@marketcall.com"
          className="inline-block mt-5 text-blue-600 font-medium text-lg hover:underline"
        >
          info@marketcall.com
        </a>
      </div>
    </div>
  );
};

export default Vacancy;
