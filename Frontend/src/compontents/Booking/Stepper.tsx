// src/components/Stepper.jsx
import React from "react";

export default function Stepper({ step, onStepClick, tickImg }) {
  const items = ["Your Details", "Date Selection", "Guests", "Travel Assistance", "Confirmation"];

  return (
    <div>
      <div className="font-caveat text-2xl mb-8">Travel Trip</div>

      {items.map((label, i) => {
        const idx = i + 1;
        const completed = step > idx;
        const active = step === idx;
        return (
          <div
            key={label}
            className="flex items-center gap-4 mb-6 cursor-pointer select-none"
            onClick={() => onStepClick(idx)}
          >
            <div
              className="flex items-center justify-center w-9 h-9 rounded-full font-semibold"
              style={{
                backgroundColor: completed ? "#ffffff" : active ? "#304766" : "transparent",
                color: completed ? "#304766" : "#304766",
                border: "2px solid #e2e8f0",
              }}
            >
              {completed ? (
                <img src={tickImg} alt="completed" className="w-5 h-5 object-contain" />
              ) : (
                idx
              )}
            </div>
            <div style={{ color: "#334155", fontWeight: active ? 700 : 500 }}>{label}</div>
          </div>
        );
      })}
    </div>
  );
}