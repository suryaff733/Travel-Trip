// src/components/YourDetails.jsx
import React from "react";

export default function YourDetails({ formData, errors, onChange, onNext, theme }) {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-1" style={{ color: theme }}>
        Your Details
      </h2>
      <p className="text-center text-[#cbd5e1] mb-6">Enter your name and location details</p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#334155]">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#304766]"
            placeholder="Enter name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#334155]">Start Location</label>
          <input
            type="text"
            name="start"
            value={formData.start}
            onChange={onChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#304766]"
            placeholder="Enter start location"
          />
          {errors.start && <p className="text-red-500 text-sm mt-1">{errors.start}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#334155]">End Location</label>
          <input
            type="text"
            name="end"
            value={formData.end}
            onChange={onChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#304766]"
            placeholder="Enter end location"
          />
          {errors.end && <p className="text-red-500 text-sm mt-1">{errors.end}</p>}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="px-6 py-2 rounded-md text-white"
          style={{ backgroundColor: theme }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
