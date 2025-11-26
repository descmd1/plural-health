import {
    ChevronDown,
    MinusCircle,
    ChevronsRight,
    EllipsisVertical,
    Check,
    Minus,
    Heart,
    Dot,
} from "lucide-react";
import {
    Userdata,
    getStatusBgColor,
    getStatusTextColor,
    getIconBgColor,
} from "./Userdata";
import Image from "next/image";

const UserList = () => {
    return (
        <div className="overflow-x-auto bg-[#EDF0F8] rounded-lg px-6 py-1">
            <table
                className="min-w-full border-separate"
                style={{ borderSpacing: "0 12px" }}
            >
                <thead>
                    <tr>
                        <th className="px-2 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider"></th>
                        <th className="px-2 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider">
                            #
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider">
                            Patient Information
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider"></th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider">
                            Clinic
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider">
                            Date / Time
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider">
                            Wallet balance (₦)
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#A6AFC2] tracking-wider">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Userdata.map((user, index) => (
                        <tr
                            key={index}
                            className="group bg-white rounded-lg shadow-sm border border-gray-100 hover:bg-[#DFE2E9] hover:shadow-md transition-shadow"
                        >
                            {/* Patient Information */}
                            <td className="px-4 py-4 rounded-l-lg">
                                <div className="flex flex-col items-center gap-2">
                                    {index === 0 && (
                                        <MinusCircle
                                            size={22}
                                            color="white"
                                            fill="black"
                                        />
                                    )}
                                    <ChevronDown size={14} color="black" />
                                </div>
                            </td>
                            <td className="px-4 py-4 rounded-l-lg">
                                <div className="text-[#051438] font-semibold text-base">
                                    {user.serialNumber}
                                </div>
                            </td>
                            <td className="px-4 py-4 rounded-l-lg">
                                <div>
                                    <h3 className="font-semibold text-base text-[#051438] mb-1">
                                        {user.name}
                                    </h3>
                                    <div className="flex font-medium text-sm text-[#677597]">
                                        <span>{user.patientId}</span>
                                        <Dot size={22} />
                                        <span>{user.gender}</span>
                                        <Dot size={22} />
                                        <span>{user.age}</span>
                                    </div>
                                </div>
                            </td>
                            {/* Type */}
                            <td className="px-4 py-4">
                                <div className="flex gap-2 items-center">
                                    {user.type && (
                                        <span className="px-3 py-1 bg-[#D0D1FB] text-[#0B0C7D] text-sm font-medium rounded-md">
                                            {user.type}
                                        </span>
                                    )}
                                    {!user.type && (
                                        <span className="px-0 ml-[-28px] py-1 invisible">
                                            Placeholder
                                        </span>
                                    )}
                                    <div>
                                        {index === 1 ? (
                                            <Image
                                                src="./frame green.svg"
                                                alt="Green frame"
                                                width={28}
                                                height={28}
                                                className="bg-[#E2F8EB] px-1 py-1 rounded-sm"
                                            />
                                        ) : index === 2 ? (
                                            <Image
                                                src="./frame orange.svg"
                                                alt="Orange frame"
                                                width={28}
                                                height={28}
                                                className="bg-[#FFF6DB] px-1 py-1 rounded-sm"
                                            />
                                        ) : (
                                            <Image
                                                src="./frame red.svg"
                                                alt="Red frame"
                                                width={28}
                                                height={28}
                                                className="bg-[#F7E3E3] px-1 py-1 rounded-sm"
                                            />
                                        )}
                                    </div>
                                </div>
                            </td>

                            {/* Department */}
                            <td className="px-4 py-4 flex items-center w-[160px] justify-between">
                                <span className="text-[#051438] text-base font-medium break-words whitespace-normal max-w-[120px] line-clamp-2">
                                    {user.department}
                                </span>
                                <span className="h-6 w-6 rounded-md font-semibold text-[#051438] items-center justify-center bg-white text-sm mt-1 opacity-0 group-hover:opacity-100 flex">
                                    +1
                                </span>
                            </td>

                            {/* Date & Time */}
                            <td className="px-4 py-4">
                                <div
                                    className={`font-semibold ${getStatusTextColor(
                                        user.status
                                    )}`}
                                >
                                    {user.date && (
                                        <p className="text-base">{user.date}</p>
                                    )}
                                    <p className="text-base">{user.time}</p>
                                </div>
                            </td>

                            {/* Amount */}
                            <td className="px-4 py-4">
                                {user.amount && (
                                    <p className="text-[#051438] font-semibold text-base">
                                        {user.amount}
                                    </p>
                                )}
                            </td>

                            {/* Status */}
                            <td className="px-4 py-4 rounded-r-lg flex items-center gap-4">
                                <div
                                    className={`inline-flex items-center justify-between gap-2 px-3 py-1 rounded-md w-[170px] text-sm font-medium ${getStatusBgColor(
                                        user.status
                                    )} ${getStatusTextColor(user.status)}`}
                                >
                                    <span>{user.status}</span>
                                    {user.icon && (
                                        <div className="flex-shrink-0">
                                            {user.icon === ChevronsRight ? (
                                                <div
                                                    className={`flex h-4 w-4 rounded-full items-center justify-center ${getIconBgColor(
                                                        user.status
                                                    )}`}
                                                >
                                                    <ChevronsRight
                                                        size={14}
                                                        className="text-white"
                                                    />
                                                </div>
                                            ) : user.icon === Heart ? (
                                                <div
                                                    className={`flex h-4 w-4 rounded-full items-center justify-center ${getIconBgColor(
                                                        user.status
                                                    )}`}
                                                >
                                                    <Heart
                                                        size={10}
                                                        className="text-white"
                                                        fill="white"
                                                    />
                                                </div>
                                            ) : user.icon === Minus ? (
                                                <div
                                                    className={`flex h-4 w-4 rounded-full items-center justify-center ${getIconBgColor(
                                                        user.status
                                                    )}`}
                                                >
                                                    <Minus
                                                        size={14}
                                                        className="text-white"
                                                    />
                                                </div>
                                            ) : user.icon === Check ? (
                                                <div
                                                    className={`flex h-4 w-4 rounded-full items-center justify-center ${getIconBgColor(
                                                        user.status
                                                    )}`}
                                                >
                                                    <Check
                                                        size={14}
                                                        className="text-white"
                                                    />
                                                </div>
                                            ) : typeof user.icon ===
                                              "string" ? (
                                                <div
                                                    className={`flex h-4 w-4 rounded-full items-center justify-center ${getIconBgColor(
                                                        user.status
                                                    )}`}
                                                >
                                                    <img
                                                        src={user.icon}
                                                        alt="status icon"
                                                        width={12}
                                                        height={12}
                                                        className="text-white"
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <EllipsisVertical size={14} color="black" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
