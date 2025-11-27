'use client'
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ClinicsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState('All clinics');
  const dropdownRef = useRef(null);

  const clinics = [
    'All clinics',
    'Accident and Emergency',
    'Neurology',
    'Cardiology',
    'Gastroenterology',
    'Renal'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && 
        !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClinicSelect = (clinic) => {
    setSelectedClinic(clinic);
    setIsOpen(false);
  };

  return (
   <div className="relative" ref={dropdownRef}>
      <div 
        className="flex items-center gap-1 cursor-pointer 
        rounded-md px-3 py-2 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[#051438] font-medium text-base m-0">
          {selectedClinic}
          </p>
        <ChevronDown 
          size={16} 
          color="#051438" 
          className={`transition-transform mt-1 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white 
        rounded-lg shadow-xl z-50 max-h-80 overflow-hidden w-[220px] pb-8">
          <div className="py-2">
            {clinics.map((clinic) => (
              <div
                key={clinic}
                onClick={() => handleClinicSelect(clinic)}
                className={`px-2 py-2 cursor-pointer transition-colors ${
                  selectedClinic === clinic 
                    ? 'bg-[#E7E7FC] text-[#051438] font-semibold text-sm' 
                    : 'text-[#051438] hover:bg-[#E7E7FC]'
                }`}
              >
                {clinic}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicsDropdown;