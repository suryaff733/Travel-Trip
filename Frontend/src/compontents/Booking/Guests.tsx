// src/components/Guests.jsx
import React from "react";

export default function Guests({ formData, onInc, onDec, onNext, onBack, theme }) {
  const Row = ({ label, field, value }) => (
    <div className="flex items-center justify-between border-b py-3">
      <span className="text-[#334155]">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onDec(field)}
          className="w-8 h-8 rounded-full border flex items-center justify-center"
        >
          -
        </button>
        <span className="w-6 text-center">{value}</span>
        <button
          onClick={() => onInc(field)}
          className="w-8 h-8 rounded-full border flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-1" style={{ color: theme }}>
        Guests
      </h2>
      <p className="text-center text-[#cbd5e1] mb-6">Select number of travelers</p>

      <div className="space-y-4 mb-6">
        <Row label="Adults" field="adults" value={formData.adults} />
        <Row label="Children" field="children" value={formData.children} />
        <Row label="Infants" field="infants" value={formData.infants} />
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