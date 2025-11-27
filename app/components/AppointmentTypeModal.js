'use client'
import { useState } from "react";
import { CheckIcon, ChevronRight, XIcon } from "lucide-react";

export default function AppointmentTypeModal({ typeOpen, onClose }) {
 const [selected, setSelected] = useState([]);

  if (!typeOpen) return null;
  
const options = ["Walk-in", "Referral", "Consult"];
const toggleItem = (item) => {
  setSelected((prev) =>
    prev.includes(item)
      ? prev.filter((i) => i !== item)
      : [...prev, item]
  );
};


  return (
    <div className="fixed inset-0 bg-transparant opacity-50% flex items-center justify-center z-50 px-4">
      {/* Modal Box */}
      <div className="bg-[#F5F7FA] rounded-2xl w-full max-w-[538px] h-[516px] p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 bg-[#DFE2E9] w-8 h-8 rounded-full flex items-center justify-center shadow-sm cursor-pointer"
        >
          <XIcon size={16} className="text-[#1A2B49]" />
        </button>
        <h2 className="text-xl font-semibold text-[#1A2B49] mb-6">Appointment type</h2>
        <p className="text-[#1A2B49] font-semibold mb-2">
          New (Walk-in, Referral, Consult)
        </p>

<div className="space-y-2">
  {options.map((item) => (
    <div
      key={item}
      className="group flex items-center justify-between px-4 py-3 rounded-md cursor-pointer hover:bg-[#DCE7FF]/60 transition-all"
    >
      <div 
        className="flex-1"
        onClick={() => toggleItem(item)}
      >
        <span
          className={`text-md ${
            selected.includes(item)
              ? "text-[#1A2B49] font-semibold"
              : "text-gray-600"
          }`}
        >
          {item}
        </span>
      </div>
      <div className="flex items-center justify-end w-10">
        {selected.includes(item) ? (
          <span style={{ color: '#0B0C7D' }} className="text-lg font-bold">
            <CheckIcon size={16}/>
          </span>
        ) : (
          item === "Consult" ? (
            <>
              <input
                type="checkbox"
                onChange={() => toggleItem(item)}
                className="w-4 h-4 accent-[#1A2B49] cursor-pointer opacity-0 group-hover:opacity-100 absolute transition-opacity"
              />
              <ChevronRight 
                size={20} 
                className="text-gray-400 opacity-100 group-hover:opacity-0 transition-opacity"
              />
            </>
          ) : (
            <input
              type="checkbox"
              onChange={() => toggleItem(item)}
              className="w-4 h-4 accent-[#1A2B49] cursor-pointer"
            />
          )
        )}
      </div>
    </div>
  ))}
</div>
        <div className="mt-8 space-y-3 w-full flex flex-col">
  <p className="m-0 text-[#1A2B49] text-md font-semibold hover:bg-[#D7E3FC]/60 cursor-pointer px-4 py-3 rounded-md transition-all">Follow-up</p>
  <p className="m-0 text-[#1A2B49] text-md font-semibold hover:bg-[#D7E3FC]/60 cursor-pointer px-4 py-3 rounded-md transition-all">For Medical Exam</p>
</div>
      </div>
    </div>
  );
}
