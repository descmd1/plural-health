"use client";
import { useState } from "react";

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
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">
                        Add new patient
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Fill in the patient information in the fields provided
                        below
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Patient Picture Section */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-sm font-medium text-gray-700">
                                            Take patient's picture
                                        </h3>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                            8
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-4">
                                        Patient picture should be updated by
                                        reception personnel
                                    </p>
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                            <span className="text-gray-400 text-sm">
                                                Photo
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Add fingerprint
                                        </button>
                                    </div>
                                </div>

                                {/* Form Fields - Left */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter first name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Middle name
                                        </label>
                                        <input
                                            type="text"
                                            name="middleName"
                                            value={formData.middleName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter middle name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Date of birth
                                        </label>
                                        <input
                                            type="date"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Gender
                                        </label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">
                                                Select gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                {/* Patient ID Section */}
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-gray-700">
                                            Patient ID
                                        </h3>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-3">
                                        If there is an existing Patient ID,
                                        input the patient's existing ID into the
                                        field
                                    </p>
                                    <input
                                        type="text"
                                        name="patientId"
                                        value={formData.patientId}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Form Fields - Right */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter last name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Title
                                        </label>
                                        <select
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">
                                                Select title
                                            </option>
                                            <option value="mr">Mr.</option>
                                            <option value="mrs">Mrs.</option>
                                            <option value="ms">Ms.</option>
                                            <option value="dr">Dr.</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter phone number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Is patient new to the hospital?
                                        </label>
                                        <select
                                            name="isNewPatient"
                                            value={formData.isNewPatient}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">
                                                Select option
                                            </option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Save & close
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Create appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPatientModal;
