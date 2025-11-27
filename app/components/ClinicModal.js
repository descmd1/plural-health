'use client'
import { XIcon } from 'lucide-react';
import { useEffect } from 'react';

export default function ClinicModal({ open, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; 
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-transparent bg-opacity-50 pt-14">
      {/* Modal Container */}
      <div 
        className="bg-[#F7F8FA] rounded-2xl w-full max-w-lg mx-4 animate-fadeIn h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-xl font-semibold text-[#0A1533]">Clinic</h2>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#DFE2E9] flex items-center justify-center hover:bg-[#D0D5DD] transition-colors"
          >
            <XIcon size={16} color='black'/>
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 mt-4">
          <div className="flex items-center bg-white border border-[#D0D5DD] rounded-xl px-4 h-12 shadow-sm">
            <input
              type="text"
              placeholder="Search clinic"
              className="flex-1 outline-none font-normal text-[#98A2B3] placeholder-[#98A2B3] text-md"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#98A2B3"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.64 5.64a7.5 7.5 0 0011 11z"
              />
            </svg>
          </div>
        </div>

        {/* List */}
        <div className="w-full px-6 mt-4 pb-6 text-[#0A1533] text-xl font-medium overflow-y-auto scrollbar-hide">
          <p className="cursor-pointer text-[#051438] text-sm transition-colors hover:bg-[#D7E3FC] p-2">Accident and Emergency</p>
          <p className="cursor-pointer text-[#051438] text-sm transition-colors hover:bg-[#D7E3FC] p-2">Neurology</p>
          <p className="cursor-pointer text-[#051438] text-sm transition-colors hover:bg-[#D7E3FC] p-2">Cardiology</p>
          <p className="cursor-pointer text-[#051438] text-sm transition-colors hover:bg-[#D7E3FC] p-2">Gastroenterology</p>
          <p className="cursor-pointer text-[#051438] text-sm transition-colors hover:bg-[#D7E3FC] p-2">Renal</p>
        </div>
      </div>
    </div>
  );
}