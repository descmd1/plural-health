"use client";
import {
    Asterisk,
    ChevronDown,
    ClosedCaption,
    Fingerprint,
    User,
    XIcon,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const AddPatientModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        patientId: "HOSP98765433",
        dateOfBirth: "",
        gender: "",
        phoneNumber: "",
        title: "",
        isNewPatient: "",
        patientPicture: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#EDF0F8] rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto scrollbar-hide">
                {/* Header */}
                <div className="px-4 py-4 flex w-full justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-base font-bold text-[#051438]">
                            Add new patient
                        </h2>
                        <p className="text-sm text-[#677597] mt-1">
                            Fill in the patient information in the fields
                            provided below
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-[#DFE2E9]"
                    >
                        <XIcon size={16} color="black" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="bg-[#EDF0F8]">
                    <div className="flex flex-col gap-6 w-full items-center justify-center">
                        <div className="w-full flex flex-col space-y-6">
                            {/* Patient Picture Section */}
                            <div className="flex w-full p-4 rounded-lg justify-between">
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 bg-[#A6AFC2] rounded-full flex items-center justify-center border-gray-300 mt-[-10]">
                                        <User size={48} />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <button className="flex items-center gap-4 text-xs bg-[#0B0C7D] font-medium text-white px-2 py-2.5 rounded-md">
                                                Take patient's picture{" "}
                                                <ChevronDown
                                                    size={14}
                                                    color="white"
                                                    className="mt-0.5"
                                                />
                                            </button>
                                            <button className="flex items-center gap-4 text-xs bg-[#0B0C7D] font-medium text-white px-2 py-2.5 rounded-md">
                                                Add fingerprint{" "}
                                                <Fingerprint
                                                    size={16}
                                                    color="white"
                                                />
                                            </button>
                                        </div>
                                        <p className="m-0 text-xs text-[#7A90C2] mb-4">
                                            Patient picture should be updated by
                                            reception personnel
                                        </p>
                                    </div>
                                </div>

                                {/* Patient ID Section */}
                                <div className="flex flex-col rounded-lg w-[289px]">
                                    <div className="flex gap-6">
                                        <div></div>
                                        <p className="text-xs font-medium text-[#051438] mb-1 bg-[#D7E3FC] px-2 py-1 rounded-md flex gap-2">
                                            <Image
                                                src="./error.svg"
                                                alt="error"
                                                width={20}
                                                height={20}
                                            />
                                            If there is an existing Patient ID,
                                            input the patient's existing ID into
                                            the field
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-sm font-medium text-gray-700">
                                                Patient ID
                                            </h3>
                                        </div>
                                        <div className="flex gap-2 relative">
                                            <input
                                                type="text"
                                                name="patientId"
                                                value={formData.patientId}
                                                onChange={handleInputChange}
                                                className="px-3 py-1 border border-[#DFE2E9] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#051438]"
                                            />
                                            <Image
                                                src="./error2.svg"
                                                alt="error"
                                                width={16}
                                                height={16}
                                                className="flex absolute right-2 top-2.5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form Fields - Left */}
                            <div className="space-y-4 flex flex-col items-center justify0center w-full">
                                <div className="flex justify-between items-center w-full px-4">
                                    <div className="flex gap-1">
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#FFFFFF] text-[#A6AFC2] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="First name"
                                        />
                                        <Asterisk size={8} color="#FF4D4D" />
                                    </div>

                                    <div className="flex gap-1">
                                        <input
                                            type="text"
                                            name="middleName"
                                            value={formData.middleName}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#FFFFFF] text-[#A6AFC2] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Middle name"
                                        />
                                        <Asterisk size={8} color="#FF4D4D" />
                                    </div>
                                    <div className="flex gap-1">
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#FFFFFF] text-[#A6AFC2] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Last name"
                                        />
                                        <Asterisk size={8} color="#FF4D4D" />
                                    </div>
                                    <div>
                                        <select
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#FFFFFF] text-[#A6AFC2] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Title</option>
                                            <option value="mr">Mr.</option>
                                            <option value="mrs">Mrs.</option>
                                            <option value="ms">Ms.</option>
                                            <option value="dr">Dr.</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Form Fields - Right */}
                                <div className="space-y-4 flex w-full justify-between items-center px-4">
                                    <div className="flex gap-1">
                                        <input
                                            type="date"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleInputChange}
                                            placeholder="Date of birth"
                                            className="w-full bg-[#FFFFFF] text-[#A6AFC2] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <Asterisk size={8} color="#FF4D4D" />
                                    </div>
                                    <div className="flex gap-1">
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            className="w-4/3 bg-[#FFFFFF] text-[#A6AFC2] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                        <Asterisk size={8} color="#FF4D4D" />
                                    </div>
                                    <div className="flex gap-1">
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#FFFFFF] text-[#A6AFC2] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Phone number"
                                        />
                                        <Asterisk size={8} color="#FF4D4D" />
                                    </div>
                                    <div className="mt-[-8px]">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Is patient new to the hospital?
                                        </label>
                                        <select
                                            name="isNewPatient"
                                            value={formData.isNewPatient}
                                            onChange={handleInputChange}
                                            className="w-6 h-6 bg-[#FFFFFF] shadow-lg rounded-full border-[#EFF1F4] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value=""></option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer Buttons */}
                        <div className="px-6 py-4 flex justify-end space-x-3 mt-28 w-full">
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-[#6658F4] bg-[#FFFFFF] border border-[#6658F4] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Save & close
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-[#FFFFFF] bg-[#0B0C7D] border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Create appointment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPatientModal;
