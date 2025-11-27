'use client'
import { useState } from 'react';
import { XIcon, ChevronLeft, ChevronRight, List, Clock4 } from 'lucide-react';
import Calendar from 'react-calendar';
import PatientSearch from './PatientSearch';
import ClinicModal from './ClinicModal';
import AppointmentTypeModal from './AppointmentTypeModal';

const AppointmentModal = ({ isOpen, onClose, onSave }) => {
    const [value, setValue] = useState(new Date(2025, 8, 1));
    const [open, setOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false)

  if (!isOpen) return null;

  return (
     <>
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#EDF0F8] rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="px-6 py-4 flex w-full justify-between items-center">
          <h2 className="text-xl font-semibold text-[#051438] mt-1">Add new appointment</h2>
          <button onClick={onClose}
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-[#DFE2E9]">
                        <XIcon size={16} color="black"/>
                    </button>
        </div>

        <form>
          <div className="p-6">
            <div className="flex flex-col w-full gap-6">
              {/* Left Column - Form Fields */}
              <div className="flex flex-col gap-4">
               

                {/* Form Fields */}
                <div className="space-y-4">
                  
<PatientSearch/>

                    <div className='flex w-full justify-between'>
                      <p className="text-sm font-medium text-[#677597] mb-2">
                        Clinic
                      </p>
                      <button type='button' onClick={() => setOpen(true)}
                      className='flex text-sm font-medium text-[#051438] gap-3 cursor-pointer'>
                        Clinic <ChevronRight size={16} color='black' className='mt-1'/>
                      </button>
                    </div>
                    <div className='flex w-full justify-between border-t border-b border-[#CDD8F3] py-2'>
                      <p className="text-sm font-medium text-[#677597] mb-2">
                        Title
                      </p>
                      <button type='button' 
                      onClick={() => setTypeOpen(true)}
                      className='flex text-sm font-medium text-[#051438] gap-3 cursor-pointer'>
                        Appointment Type <ChevronRight size={16} color='black' className='mt-1'/>
                      </button>
                    </div>
                  
                  <div className='flex w-full justify-between'>
                    <p className="text-sm font-medium text-[#677597] mb-2">
                      Time
                    </p>
                    <div className='flex gap-3 text-[#051438] font-medium text-sm'>
                        <span>25 Sep 2025</span>
                         <span>09 : 49 AM</span>
                    </div>
                  </div>
                </div>
{/*  Calendar */}
             
<div className=" flex justify-between bg-[#677597] rounded-lg p-4 w-full max-w-3xl h-80">
        <List size={22} color='#CDD8F3'/>
      <div className='flex flex-col items-center w-80'>
      <h2 className="flex w-79 items-center justify-between text-lg font-semibold text-[#CDD8F3] mb-4 text-center">
        <ChevronLeft size={18} fill='#CDD8F3'/>
        September 2025
        <ChevronRight size={18} fill='#CDD8F3'/>
      </h2>
      <Calendar
        onChange={setValue}
        value={value}
        showNavigation={false}
        className="border-0 bg-transparent w-[50%]"
        formatShortWeekday={(locale, date) => 
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
        }
      />
      </div>
      <style jsx global>{`
        /* Remove all borders and background */
        .react-calendar {
          background: transparent;
          border: none;
          width: 100%;
        }
        
        /* Week days header - make them same line as dates */
        .react-calendar__month-view__weekdays {
          display: flex !important;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        
        .react-calendar__month-view__weekdays__weekday {
          flex: 1;
          text-align: center;
          font-weight: 600;
          font-size: 0.875rem;
          color: white;
          padding: 0.25rem;
        }
        
        .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none;
        }
        
        /* Calendar grid */
        .react-calendar__month-view__days {
          display: grid !important;
          grid-template-columns: repeat(7, 1fr);
          gap: 2px;
          justify-items: center !important; 
        }
        
        /* Individual day tiles */
.react-calendar__tile {
  background: transparent !important;
  border: none !important;
  width: 34px !important;
  height: 34px !important;
  margin: auto !important;     
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;        
  border-radius: 50% !important;
}

/* Hover state */
 .react-calendar__tile:enabled:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50% !important;
}
        /* Selected date - rounded with gray background */
        .react-calendar__tile--active {
          background-color: #6b7280 !important;
          border-radius: 50px !important;
          color: white;
        }
       

.react-calendar__tile--active {
  background-color: #7A90C2 !important;
  color: white !important;
  border-radius: 50% !important;
}

        /* Current date */
 .react-calendar__tile--now {
  background-color: rgba(255, 255, 255, 0.15) !important;
  border-radius: 50% !important;
}

        
        /* Neighboring month days */
        .react-calendar__month-view__days__day--neighboringMonth {
          color: #9ca3af;
        }
        
        /* Remove the navigation */
        .react-calendar__navigation {
          display: none;
        }
      `}</style>
      <Clock4 size={20} color='white'/>
    </div>

                {/* Report Section */}
                <div className='flex w-full justify-between items-center'>
                  <h3 className="text-sm font-medium text-[#677597] mb-3">Repeat</h3>
                  <div className="flex items-center gap-3 p-3">
                    <span className="text-sm font-medium text-[#051438]">Does not repeat</span>
                    <button
                      type="button"
                      className="text-blue-600 hover:text-[#051438] text-sm font-medium"
                    >
                      <ChevronRight size={12} color='black' />
                    </button>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="px-6 py-4 w-full flex justify-end space-x-3">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-[#6658F4] bg-[#FFF] border border-[#6658F4] rounded-md focus:outline-none"
            >
              Save & Close
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-[#0B0C7D] rounded-md focus:outline-none"
            >
              Create invoice
            </button>
          </div>
        </form>
      </div>
    </div>
   
    <ClinicModal open={open} 
onClose={() => setOpen(false)} />

<AppointmentTypeModal typeOpen={typeOpen} 
onClose={() => setTypeOpen(false)} />
    </>
  );
};

export default AppointmentModal;