'use client'
import { useState } from "react"
import UserList from "@/app/components/UserList"
import { ListFilter, 
  ChevronLeft, 
  ChevronRight, 
  Fingerprint, 
  PlusCircle, 
  PlusSquare, 
  Search} from "lucide-react"
import AddPatientModal from "@/app/components/AddPatientModal"
import AppointmentModal from "@/app/components/AppointmentModal"
import SortByDropdown from "@/app/components/SortByDropdown"
import ClinicsDropdown from "@/app/components/ClinicsDropdown"
import Header from "@/app/components/Header"
import PatientFilter from "@/app/components/PatientFilter"

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleSavePatient = (patientData) => {
    console.log('Saving patient:', patientData);
    setIsModalOpen(false);
  };
  const handleSaveAppointment = (appointmentData) => {
    console.log('Creating appointment:', appointmentData);
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="md:flex flex-col bg-[#EDF0F8] min-h-screen bg-[#EDF0F8]">
      <div className="md:flex flex-col w-full md:gap-4">
        <Header />
        <section className="md:flex flex-col w-full flex items-center justify-center px-6 gap-4">
          {/* <div className="flex items-center justify-center relative 
          bg-white rounded-lg md:w-[600px] w-full">
  <Search size={18} className="absolute left-3 text-slate-300" />
  <input 
    type="text" 
    placeholder="Find patient" 
    className="w-full bg-transparent text-slate-700 pl-10 pr-4 py-2 
    outline-none placeholder:text-slate-400 text-sm"
  />
  <div className="flex items-center pr-4 py-1 gap-2">
    <Fingerprint size={18} />
    <ListFilter size={18} />
  </div>
</div> */}
<PatientFilter />

<div className="flex w-full md:justify-between gap-3">
  <button 
   onClick={() => setIsModalOpen(true)}
  className="flex gap-2 md:p-2 p-1 font-semibold text-sm 
  items-center bg-[#0B0C7D] rounded-md">
Add new patient
<PlusCircle size={14} fill="#fff" color="black"/>
  </button>
  <button 
  onClick={() => setIsAppointmentModalOpen(true)}
  className="flex gap-2 md:p-2 p-1 items-center font-semibold 
  text-sm bg-[#0B0C7D] rounded-md">
    Create new patient
    <PlusSquare size={14} fill="#fff" color="black"/>
  </button>
</div>

<div className="flex items-center w-full justify-between mt-4">
  <div className="md:flex items-center gap-4">
  <p className="text-[#051438] font-medium text-base m-0">Appointments</p>
  <ClinicsDropdown />
   <SortByDropdown />
</div>
<div className="md:flex gap-4 items-center">
  <p className="m-o text-[#677597] font-medium 
  text-sm">1 - 20 <span className="text-[#051438] font-medium 
  text-base m-0">of</span> 179</p>
  <div className="flex gap-1 justify-end">
  <ChevronLeft size={22} color="#677597" 
  className="rounded-md px-1 py-1 bg-[#E6E8EB]"/>
  <ChevronRight size={22} color="black" 
  className="rounded-md px-1 py-1 bg-[#FFFFFF]"/>
  </div>
</div>
</div>
        </section>
      </div>
         <UserList />
         <AddPatientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePatient}
      />
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        onSave={handleSaveAppointment}
      />
    </div>
  )
}

export default page