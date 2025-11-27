'use client'
import { useState } from "react";
import { ChevronRight, XIcon } from "lucide-react";

export default function AppointmentTypeModal({ typeOpen, onClose }) {
  const [selected, setSelected] = useState("Walk-in");

  if (!typeOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparant opacity-50% flex items-center justify-center z-50 px-4">
      {/* Modal Box */}
      <div className="bg-[#F5F7FA] rounded-2xl w-full max-w-lg p-6 shadow-lg relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 bg-[#DFE2E9] w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
        >
          <XIcon size={16} className="text-[#1A2B49]" />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-[#1A2B49] mb-6">Appointment type</h2>

        {/* Section Title */}
        <p className="text-[#1A2B49] font-semibold mb-2">
          New (Walk-in, Referral, Consult)
        </p>

        {/* Options */}
        <div className="space-y-2">
          {["Walk-in", "Referral", "Consult"].map((item) => (
            <div
              key={item}
              onClick={() => setSelected(item)}
              className={`flex items-center justify-between px-4 py-3 rounded-md cursor-pointer transition-all
                ${selected === item ? "bg-[#DCE7FF]" : "hover:bg-gray-100"}
              `}
            >
              <span
                className={`text-lg ${
                  selected === item ? "text-[#1A2B49] font-medium" : "text-gray-500"
                }`}
              >
                {item}
              </span>

              {/* Right icon OR check */}
              {selected === item ? (
                <span className="text-[#1A2B49] text-lg font-bold">✔</span>
              ) : item === "Consult" ? (
                <ChevronRight size={20} className="text-gray-500" />
              ) : null}
            </div>
          ))}
        </div>

        {/* Additional Options */}
        <div className="mt-8 space-y-6">
          <p className="text-[#1A2B49] text-lg font-semibold">Follow-up</p>
          <p className="text-[#1A2B49] text-lg font-semibold">For Medical Exam</p>
        </div>
      </div>
    </div>
  );
}
