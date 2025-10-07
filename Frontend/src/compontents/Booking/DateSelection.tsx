// src/components/DateSelection.jsx
import React from "react";

export default function DateSelection({ formData, errors, onChange, onNext, onBack, theme }) {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-1" style={{ color: theme }}>
        Date Selection
      </h2>
      <p className="text-center text-[#cbd5e1] mb-6">Choose your trip dates</p>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#334155]">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={onChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#304766]"
          />
          {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#334155]">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={onChange}
            className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#304766]"
          />
          {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="px-6 py-2 rounded-md text-white bg-gray-500">
          Previous
        </button>
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