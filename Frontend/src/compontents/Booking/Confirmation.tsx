// src/components/Confirmation.jsx
import React from "react";


export default function Confirmation({ formData, onBack, onCancel, onConfirm, theme, tickImg }) {

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-1" style={{ color: theme }}>
        Confirmation
      </h2>
      <p className="text-center text-[#cbd5e1] mb-6">Review your details before confirming</p>

      <div className="space-y-3 text-[#334155] mb-6">
        <div>
          <span className="font-semibold" style={{ color: theme }}>
            Name:
          </span>{" "}
          {formData.name}
        </div>
        <div>
          <span className="font-semibold" style={{ color: theme }}>
            From:
          </span>{" "}
          {formData.start} <span className="font-semibold" style={{ color: theme }}>→</span>{" "}
          <span className="font-semibold" style={{ color: theme }}>
            To:
          </span>{" "}
          {formData.end}
        </div>
        <div>
          <span className="font-semibold" style={{ color: theme }}>
            Dates:
          </span>{" "}
          {formData.startDate} to {formData.endDate}
        </div>
        <div>
          <span className="font-semibold" style={{ color: theme }}>
            Guests:
          </span>{" "}
          {formData.adults} Adults, {formData.children} Children, {formData.infants} Infants
        </div>
        <div>
          <span className="font-semibold" style={{ color: theme }}>
            Travel Assistance:
          </span>{" "}
          {formData.assistance ? (formData.assistanceType || "Selected") : "Not needed"}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={onBack} className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: "#64748b" }}>
          Previous
        </button>

        <div className="flex gap-3">
          <button onClick={onCancel} className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: "#ef4444" }}>
            Cancel
          </button>
          <button onClick={onConfirm}  className="px-4 py-2 rounded-md text-white flex items-center gap-2" style={{ backgroundColor: theme }}>
            {/* small tick inside button for visual affordance */}
            <img src={tickImg} alt="tick" className="w-4 h-4 object-contain" />
            <span>Confirm</span>
          </button>
        </div>
      </div>
    </div>
  );
}