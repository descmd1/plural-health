'use client'
import { useState } from "react"
import UserList from "@/app/components/UserList"
import { AlignLeft, AlignRight, ListFilter, Bell, BellDot, BellRing, ChevronDown, ChevronLeft, ChevronRight, Fingerprint, MoveDown, PlusCircle, PlusSquare, Search, User, User2, UserCircle, UserCircle2Icon, ArrowDownWideNarrow } from "lucide-react"
import Image from "next/image"
import AddPatientModal from "@/app/components/AddPatientModal"
import AppointmentModal from "@/app/components/AppointmentModal"

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleSavePatient = (patientData) => {
    console.log('Saving patient:', patientData);
    // Handle saving patient data
    setIsModalOpen(false);
  };
  const handleSaveAppointment = (appointmentData) => {
    console.log('Creating appointment:', appointmentData);
    // Handle appointment creation
    setIsAppointmentModalOpen(false);
  };
  return (
    <div className="flex flex-col bg-[#EDF0F8] min-h-screen bg-[#EDF0F8]">
      <div className="flex flex-col w-full gap-4">
        <header className="flex justify-between items-center w-full bg-[#EDF0F8] py-3 px-6 border-b-1 border-slate-300">
          <Image src='./plural logo.svg' alt="logo" width={80} height={80}/>
          <div className="flex gap-4">
            <p className="text-normal font-semibold font-sm text-slate-900 m-0">22 September</p>
            <p className="text-normal font-sm text-slate-600 m-0">09:34 AM</p>
          </div>
          <div className="flex gap-6">
            <p className="text-normal font-semibold font-sm text-slate-900 m-0">Hi Chris</p>
            <Bell size={24} color="#0B0C7D" fill="#0B0C7D" 
  strokeWidth={1.5}/>
         <div className="flex bg-[#A6AFC2] rounded-full p-1">
            <User2 size={16} color="#fff" fill="#fff" strokeWidth={1.5}/>
            </div>
          </div>
        </header>

        <section className="flex flex-col w-full flex items-center justify-center px-6">
          <div className="flex items-center justify-center relative bg-white rounded-lg w-[600px]">
  <Search size={18} className="absolute left-3 text-slate-300" />
  <input 
    type="text" 
    placeholder="Find patient" 
    className="w-full bg-transparent text-slate-700 pl-10 pr-4 py-2 outline-none placeholder:text-slate-400 text-sm"
  />
  <div className="flex items-center pr-4 py-1 gap-2">
    <Fingerprint size={18} />
    <ListFilter size={18} />
  </div>
</div>

<div className="flex w-full justify-between">
  <button 
   onClick={() => setIsModalOpen(true)}
  className="flex gap-2 p-2 font-semibold text-sm items-center bg-[#0B0C7D] rounded-md">
Add new patient
<PlusCircle size={14} fill="#fff" color="black"/>
  </button>
  <button 
  onClick={() => setIsAppointmentModalOpen(true)}
  className="flex gap-2 p-2 items-center font-semibold text-sm bg-[#0B0C7D] rounded-md">
    Create new patient
    <PlusSquare size={14} fill="#fff" color="black"/>
  </button>
</div>

<div className="flex items-center w-full justify-between mt-4">
  <div className="flex items-center gap-4">
  <p className="text-[#051438] font-medium text-base m-0">Appointments</p>
  <div className="flex items-center gap-1 justify-center text-center">
    <p className="text-[#051438] font-medium text-base m-0">All clinics</p>
    <ChevronDown size={16} color="black" className="mt-1"/>
  </div>
  <div className="flex items-center gap-1">
    <div className="flex gap-0">
    {/* <MoveDown size={16} color="#0B0C7D"/>
    <AlignLeft size={12} color="#0B0C7D" className="mt-1"/> */}
    <ArrowDownWideNarrow size={16} color="#0B0C7D"/>
    </div>
    <p className="text-[#0B0C7D] font-medium text-base m-0">Sort by</p>
  </div>
</div>
<div className="flex gap-4 items-center">
  <p className="m-o text-[#677597] font-medium text-sm">1 - 20 <span className="text-[#051438] font-medium text-base m-0">of</span> 179</p>
  <div className="flex gap-1">
  <ChevronLeft size={22} color="#677597" className="rounded-md px-1 py-1 bg-[#E6E8EB]"/>
  <ChevronRight size={22} color="black" className="rounded-md px-1 py-1 bg-[#FFFFFF]"/>
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