'use client'
import { useState, useRef, useEffect } from 'react';
import { Search, Fingerprint, ListFilter, ChevronDown } from 'lucide-react';
import { Userdata } from './Userdata'; 

const PatientFilter = ({ onFilterChange, onPatientSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    name: true,
    patientId: true,
    department: true,
    age: true,
    gender: true
  });
  const [filteredPatients, setFilteredPatients] = useState(Userdata);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFilterOpen(false);
        setIsResultsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPatients(Userdata);
      if (onFilterChange) onFilterChange(Userdata);
      setIsResultsOpen(false);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const activeFilters = Object.keys(selectedFilters).filter(key => selectedFilters[key]);

    const results = Userdata.filter(patient => {
      return activeFilters.some(filterType => {
        switch (filterType) {
          case 'name':
            return patient.name?.toLowerCase().includes(query);
          case 'patientId':
            return patient.patientId?.toLowerCase().includes(query);
          case 'department':
            return patient.department?.toLowerCase().includes(query);
          case 'age':
            return patient.age?.toLowerCase().includes(query);
          case 'gender':
            return patient.gender?.toLowerCase().includes(query);
          default:
            return false;
        }
      });
    });

    setFilteredPatients(results);
    setIsResultsOpen(true);
    if (onFilterChange) onFilterChange(results);
  }, [searchQuery, selectedFilters, onFilterChange]);

  const handleFilterToggle = (filterType) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePatientSelect = (patient) => {
    setSearchQuery(patient.name);
    setIsResultsOpen(false);
    if (onPatientSelect) onPatientSelect(patient);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsResultsOpen(false);
    if (onFilterChange) onFilterChange(Userdata);
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).filter(Boolean).length;
  };

  return (
    <div className="relative w-full max-w-2xl" ref={searchRef}>
      {/* Search Input */}
      <div className="flex items-center justify-center relative 
      bg-white rounded-lg border border-gray-300 focus-within:border-blue-500 
      focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200 w-full">
        <Search size={18} className="absolute left-3 text-slate-400" />
        <input 
          type="text" 
          placeholder="Find patient" 
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => searchQuery && setIsResultsOpen(true)}
          className="w-full bg-transparent text-slate-700 pl-10 
          pr-4 py-2 outline-none placeholder:text-slate-400 text-sm"
        />
        <div className="flex items-center pr-4 py-1 gap-2">
          <Fingerprint 
            size={18} 
            className="text-slate-400 hover:text-slate-600 
            cursor-pointer transition-colors" 
            title="Fingerprint"
          />
          
          {/* Filter Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-1 text-slate-400 
              hover:text-slate-600 cursor-pointer transition-colors group"
              title="Search filters"
            >
              <ListFilter size={18} />
              {getActiveFilterCount() < 5 && (
                <span className="text-xs bg-blue-500 text-white 
                rounded-full w-4 h-4 flex items-center justify-center">
                  {getActiveFilterCount()}
                </span>
              )}
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white 
              border border-gray-200 rounded-lg shadow-xl z-50">
                <div className="p-3">
                  <h3 className="text-sm font-semibold 
                  text-slate-800 mb-2">Search Filters</h3>
                  
                  <div className="space-y-2">
                    {[
                      { key: 'name', label: 'Name' },
                      { key: 'patientId', label: 'Patient ID' },
                      { key: 'department', label: 'Clinic/Department' },
                      { key: 'age', label: 'Age' },
                      { key: 'gender', label: 'Gender' }
                    ].map((filter) => (
                      <label
                        key={filter.key}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters[filter.key]}
                          onChange={() => handleFilterToggle(filter.key)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 
                          border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-sm text-slate-700 
                        group-hover:text-slate-900 transition-colors">
                          {filter.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Active filters count */}
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>Active filters:</span>
                      <span>{getActiveFilterCount()}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isResultsOpen && searchQuery && (
        <div className="absolute top-full left-0 right-0 
        mt-1 bg-white border border-gray-200 rounded-lg 
        shadow-lg z-40 max-h-60 overflow-y-auto scrollbar-hide">
          {/* Results Header */}
          <div className="p-3 border-b border-gray-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">
                {filteredPatients.length} patient{filteredPatients.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>

          {/* Patient Results List */}
          <div className="py-2">
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <div
                  key={patient.patientId}
                  onClick={() => handlePatientSelect(patient)}
                  className="flex items-center justify-between 
                  px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors 
                  border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex-1">
                    <div className="font-medium text-slate-800 text-sm">
                      {patient.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {patient.patientId} • {patient.department} • {patient.age} • {patient.gender}
                    </div>
                  </div>
                  <ChevronDown size={16} className="text-slate-400 transform -rotate-90" />
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-500 text-center">
                No patients found for "{searchQuery}"
              </div>
            )}
          </div>

          {/* Active Filter Pills */}
          {searchQuery && (
            <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
              <div className="flex flex-wrap gap-1">
                <span className="text-xs text-slate-500 mr-2">Searching in:</span>
                {Object.entries(selectedFilters)
                  .filter(([_, isActive]) => isActive)
                  .map(([filterKey]) => (
                    <span
                      key={filterKey}
                      className="inline-flex items-center 
                      px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                    >
                      {filterKey === 'department' ? 'clinic' : filterKey}
                    </span>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientFilter;