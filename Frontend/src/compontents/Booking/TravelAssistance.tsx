// src/components/TravelAssistance.jsx
import React from "react";

export default function TravelAssistance({ formData, onChange, onNext, onBack, theme }) {
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-1" style={{ color: theme }}>
        Travel Assistance
      </h2>
      <p className="text-center text-[#cbd5e1] mb-6">Do you need assistance for your trip?</p>

      <div className="space-y-4 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="assistance"
            checked={formData.assistance}
            onChange={onChange}
            className="h-4 w-4"
          />
          <span className="text-[#334155]">Yes, I need assistance</span>
        </label>

        {formData.assistance && (
          <div>
            <label className="block text-sm font-medium text-[#334155]">Type of Assistance</label>
            <select
              name="assistanceType"
              value={formData.assistanceType}
              onChange={onChange}
              className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#304766]"
            >
              <option value="">Select assistance type</option>
              <option value="Bus">Bus</option>
              <option value="Flight">Flight</option>
              <option value="Train">Train</option>
              <option value="Car">Car</option>
            </select>
          </div>
        )}
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
