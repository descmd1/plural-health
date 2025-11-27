"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowDownWideNarrow } from "lucide-react";

const SortByDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("");
    const dropdownRef = useRef(null);

    const sortOptions = [
        {
            category: "Patient name",
            options: [
                { value: "name-asc", label: "Patient name: A-Z" },
                { value: "name-desc", label: "Patient name: Z-A" },
            ],
        },
        {
            category: "Patient ID",
            options: [
                { value: "id-asc", label: "Patient ID: Ascending" },
                { value: "id-desc", label: "Patient ID: Descending" },
            ],
        },
        {
            category: "Gender",
            options: [
                { value: "gender-male", label: "Gender: Male" },
                { value: "gender-female", label: "Gender: Female" },
            ],
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSortSelect = (value, label) => {
        setSelectedSort(value);
        setIsOpen(false);
        console.log("Selected sort:", label);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Dropdown Trigger */}
            <div
                className="flex items-center gap-1 cursor-pointer 
                hover:bg-[#DCE7FF]/60 rounded-md px-3 py-2 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex gap-0">
                    <ArrowDownWideNarrow size={16} color="#0B0C7D" />
                </div>
                <p className="text-[#0B0C7D] font-medium text-base m-0">
                    Sort by
                </p>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute top-full left-0 mt-2 
                bg-white border border-gray-200 rounded-lg shadow-xl 
                z-50 min-w-[280px] max-h-80 overflow-hidden"
                >
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-[#1A2B49] mb-4">
                            Sort by
                        </h3>

                        {sortOptions.map((category, categoryIndex) => (
                            <div
                                key={category.category}
                                className={categoryIndex > 0 ? "mt-6" : ""}
                            >
                                <div className="flex items-center mb-3">
                                    <span className="text-sm font-medium text-[#677597] mr-3">
                                        {category.category}
                                    </span>
                                    <div className="flex-1 h-px bg-gray-300"></div>
                                </div>

                                {/* Sort Options */}
                                <div className="space-y-2">
                                    {category.options.map((option) => (
                                        <div
                                            key={option.value}
                                            onClick={() =>
                                                handleSortSelect(
                                                    option.value,
                                                    option.label
                                                )
                                            }
                                            className={`flex items-center px-3 py-2 
                                              rounded-md cursor-pointer transition-colors ${
                                                  selectedSort === option.value
                                                      ? "bg-[#DCE7FF] text-[#1A2B49] font-medium"
                                                      : "text-[#677597] hover:bg-[#DCE7FF]/40"
                                              }`}
                                        >
                                            <span className="text-sm">
                                                {option.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SortByDropdown;
