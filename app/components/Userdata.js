import { Check, ChevronsRight, Heart, Minus } from "lucide-react";
export const Userdata = [
    {
        serialNumber: "1",
        name: "Akpopodion Endurance",
        userId: "HOSP2938476",
        gender: "male",
        age: "21yrs",
        type: "New",
        department: "Neurology",
        amount: "120, 000",
        time: "11:30 AM",
        date: "22 Sep 2025",
        status: "Processing",
        icon: ChevronsRight,
    },
    {
        serialNumber: "2",
        name: "Boluwatife Olusola",
        userId: "HOSP87654321",
        gender: "Female",
        age: "30yrs",
        type: "New",
        department: "Ears, Nose & Throat",
        amount: "230, 500",
        time: "05:30 PM",
        date: "22 Sep 2025",
        status: "Not arrived",
        icon: Minus,
    },
    {
        serialNumber: "3",
        name: "Aile Mertz",
        userId: "HOSP76354892",
        gender: "Female",
        age: "23days",
        type: "New",
        department: "Neurology",
        amount: "90, 000",
        time: "03:45 PM",
        date: "22 Sep 2025",
        status: "Awaiting vitals",
        icon: Heart,
    },
    {
        serialNumber: "4",
        name: "Akuchi Amadi",
        userId: "HOSP98765432",
        gender: "Female",
        age: "11mths",
        department: "Accident & Emergency",
        amount: "100,000",
        time: "02:00 PM",
        date: "22 Sep 2025",
        status: "Not arrived",
        icon: Minus,
    },
    {
        serialNumber: "5",
        name: "Omolola Bakare",
        userId: "HOSP23456789",
        gender: "Female",
        age: "26yrs",
        department: "Accident & Emergency",
        amount: "180,000",
        time: "11:15 PM",
        date: "22 Sep 2025",
        status: "Awaiting doctor",
        icon: Heart,
    },
    {
        serialNumber: "6",
        name: "Ayobami Musa",
        patientId: "HOSP34567890",
        gender: "Female",
        age: "11mths",
        department: "Accident & Emergency",
        amount: "190,000",
        time: "12:45 AM",
        date: "22 Sep 2025",
        status: "Admitted to ward",
        icon: "./hospital-orange.svg",
    },
    {
        serialNumber: "7",
        name: "Ngozi Okeke",
        userId: "HOSP5678901",
        gender: "Female",
        age: "11mths",
        department: "Accident & Emergency",
        amount: "200,000",
        time: "10:00 AM",
        date: "22 Sep 2025",
        status: "Transferred to A&E",
        icon: "./hospital-purple.svg",
    },
    {
        serialNumber: "8",
        name: "Chinwe Azikiwe",
        userId: "HOSP56789012",
        gender: "Female",
        age: "11mths",
        department: "Accident & Emergency",
        amount: "210,000",
        time: "08:00 AM",
        date: "22 Sep 2025",
        status: "Seen doctor",
        icon: Check,
    },
];

export const getStatusBgColor = (status) => {
    switch (status) {
        case "Processing":
            return "bg-[#FFF6DB] border-yellow-300";
        case "Not arrived":
            return "bg-[#FFDBDB] border-red-300";
        case "Awaiting vitals":
            return "bg-[#E9CCFF] border-purple-300";
        case "Awaiting doctor":
            return "bg-[#D0D1FB] border-indigo-300";
        case "Admitted to ward":
            return "bg-[#FFEFDB] border-orange-300";
        case "Transferred to A&E":
            return "bg-[#EFDBFF] border-purple-300";
        case "Seen doctor":
            return "bg-[#E2F8EB] border-green-300";
        default:
            return "bg-gray-100 border-gray-300";
    }
};

export const getStatusTextColor = (status) => {
    switch (status) {
        case "Processing":
            return "text-yellow-600";
        case "Not arrived":
            return "text-red-600";
        case "Awaiting vitals":
            return "text-purple-600";
        case "Awaiting doctor":
            return "text-blue-800";
        case "Admitted to ward":
            return "text-orange-600";
        case "Transferred to A&E":
            return "text-purple-600";
        case "Seen doctor":
            return "text-green-600";
        default:
            return "text-gray-800";
    }
};

export const getIconBgColor = (status) => {
    const textColor = getStatusTextColor(status);
    if (textColor.includes("red")) return "bg-red-600";
    if (textColor.includes("yellow")) return "bg-yellow-600";
    if (textColor.includes("orange")) return "bg-orange-600";
    if (textColor.includes("blue")) return "bg-blue-600";
    if (textColor.includes("purple")) return "bg-purple-600";
    if (textColor.includes("green")) return "bg-green-600";
    return "bg-gray-600";
};
