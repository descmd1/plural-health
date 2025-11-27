// import React, { useState, useRef, useEffect } from 'react';
// import { Search, Fingerprint, ListFilter, ChevronDown } from 'lucide-react';

// const PatientSearch = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const dropdownRef = useRef(null);

//   // Sample patient data
//   const patients = [
//     { id: 1, name: 'John Doe', patientId: 'HOSP123456', age: 32 },
//     { id: 2, name: 'Jane Smith', patientId: 'HOSP789012', age: 28 },
//     { id: 3, name: 'Mike Johnson', patientId: 'HOSP345678', age: 45 },
//     { id: 4, name: 'Sarah Wilson', patientId: 'HOSP901234', age: 29 },
//     { id: 5, name: 'David Brown', patientId: 'HOSP567890', age: 61 },
//   ];

//   // Filter patients based on search query
//   const filteredPatients = patients.filter(patient =>
//     patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     patient.patientId.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleInputFocus = () => {
//     setIsDropdownOpen(true);
//   };

//   const handlePatientSelect = (patient) => {
//     setSelectedPatient(patient);
//     setSearchQuery(patient.name);
//     setIsDropdownOpen(false);
//   };

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//     setSelectedPatient(null);
//     setIsDropdownOpen(true);
//   };

//   const clearSelection = () => {
//     setSearchQuery('');
//     setSelectedPatient(null);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="relative w-full max-w-md" ref={dropdownRef}>
//       {/* Search Input */}
//       <div className="flex items-center justify-center relative bg-white rounded-lg w-full border border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200">
//         <Search size={18} className="absolute left-3 text-slate-400" />
//         <input 
//           type="text" 
//           placeholder="Find patient" 
//           value={searchQuery}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           className="w-full bg-transparent text-slate-700 pl-10 pr-4 py-2 outline-none placeholder:text-slate-400 text-sm"
//         />
//         <div className="flex items-center pr-4 py-1 gap-2">
//           <Fingerprint size={18} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
//           <ListFilter size={18} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
//         </div>
//       </div>

//       {/* Dropdown */}
//       {isDropdownOpen && searchQuery && (
//         <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
//           {filteredPatients.length > 0 ? (
//             <div className="py-2">
//               {filteredPatients.map((patient) => (
//                 <div
//                   key={patient.id}
//                   onClick={() => handlePatientSelect(patient)}
//                   className="flex items-center justify-between px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
//                 >
//                   <div>
//                     <div className="font-medium text-slate-700">{patient.name}</div>
//                     <div className="text-xs text-slate-500">
//                       {patient.patientId} • {patient.age}yrs
//                     </div>
//                   </div>
//                   <ChevronDown size={16} className="text-slate-400 transform rotate-270" />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="px-4 py-3 text-sm text-slate-500 text-center">
//               No patients found
//             </div>
//           )}
//         </div>
//       )}

//       {/* Selected Patient Info (optional) */}
//       {selectedPatient && (
//         <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
//           <div className="flex justify-between items-center">
//             <div>
//               <div className="font-medium text-blue-800">{selectedPatient.name}</div>
//               <div className="text-sm text-blue-600">
//                 {selectedPatient.patientId} • {selectedPatient.age}yrs
//               </div>
//             </div>
//             <button
//               onClick={clearSelection}
//               className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//             >
//               Clear
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;

'use client'
import { useState, useRef, useEffect } from 'react';
import { Search, Fingerprint, ListFilter, ChevronDown } from 'lucide-react';

const PatientSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const dropdownRef = useRef(null);

  // Sample patient data
  const patients = [
    { id: 1, name: 'John Doe', patientId: 'PLAT-S/009089', age: 32 },
    { id: 2, name: 'Jane Smith', patientId: 'PLAT-S/0124789', age: 28 },
    { id: 3, name: 'Mike Johnson', patientId: 'PLAT-S/0035689', age: 45 },
    { id: 4, name: 'David Brown', patientId: 'PLAT-S/215636', age: 61 },
  ];

  // Filter patients based on search query
  const filteredPatients = searchQuery
    ? patients.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient.patientId.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : patients; // Show all patients when no search query

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputClick = () => {
    setIsDropdownOpen(true);
  };

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    setSearchQuery(patient.name);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedPatient(null);
    // Keep dropdown open when typing
    if (!isDropdownOpen) {
      setIsDropdownOpen(true);
    }
  };

  const clearSelection = () => {
    setSearchQuery('');
    setSelectedPatient(null);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Search Input */}
      <div 
        className="flex items-center justify-center relative bg-white rounded-lg w-full border border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200 cursor-text"
        onClick={handleInputClick} // Add click handler to the entire container
      >
        <Search size={18} className="absolute left-3 text-slate-400" />
        <input 
          type="text" 
          placeholder="Find patient" 
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className="w-full bg-transparent text-slate-700 pl-10 pr-4 py-2 outline-none placeholder:text-slate-400 text-sm cursor-text"
        />
        <div className="flex items-center pr-4 py-1 gap-2">
          <Fingerprint 
            size={18} 
            className="text-slate-400 hover:text-slate-600 cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the container click
              console.log('Fingerprint clicked');
            }}
          />
          <ListFilter 
            size={18} 
            className="text-slate-400 hover:text-slate-600 cursor-pointer" 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the container click
              console.log('Filter clicked');
            }}
          />
        </div>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto scrollbar-hide">
          {filteredPatients.length > 0 ? (
            <div className="py-2">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => handlePatientSelect(patient)}
                  className="flex items-center justify-between px-4 py-2 hover:bg-[#D7E3FC] cursor-pointer transition-colors"
                >
                  <div className='flex gap-3'>
                    <div className="font-medium text-slate-700">{patient.name}</div>
                    <div className="text-lg uppercase font-normal text-slate-500">
                      {patient.patientId} 
                    </div>
                  </div>
                  {/* <ChevronDown size={16} className="text-slate-400 transform rotate-270" /> */}
                </div>
              ))}
            </div>
          ) : (
            <div className="px-4 py-3 text-sm text-slate-500 text-center">
              No patients found
            </div>
          )}
        </div>
      )}

      {/* Selected Patient Info (optional) */}
      {selectedPatient && (
        <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium text-blue-800">{selectedPatient.name}</div>
              <div className="text-sm text-blue-600">
                {selectedPatient.patientId} • {selectedPatient.age}yrs
              </div>
            </div>
            <button
              onClick={clearSelection}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientSearch;