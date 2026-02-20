import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
    const navigate = useNavigate();

    // උදාහරණයක් ලෙස data (For demo purposes)
    // මම මෙතනට 'isOnline' කියලා property එකක් එකතු කළා status එක බලාගන්න.
    const dummyUsers = [
        { id: 1, name: "John Doe", lastMessage: "See you later!", isOnline: true },
        { id: 2, name: "Jane Smith", lastMessage: "Okay, thanks.", isOnline: false },
        { id: 3, name: "Dev Team", lastMessage: "Meeting at 10 AM", isOnline: true },
        { id: 4, name: "Alice Brown", lastMessage: "Can you check this?", isOnline: false },
    ];

    return (
        <div className={`bg-[#282142]/90 h-full p-5 flex flex-col border-r border-gray-700 text-white ${selectedUser ? "max-md:hidden" : "w-full md:w-80"}`}>

            {/* --- Header Section --- */}
            <div className="pb-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold tracking-wide">Chats</h2>

                    {/* Settings Dropdown */}
                    <div className="relative group">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-40 p-2 rounded-lg bg-[#1F1934] border border-gray-700 shadow-xl z-50 hidden group-hover:block">
                            <button onClick={() => navigate('/profile')} className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors">
                                Edit Profile
                            </button>
                            <hr className="my-1 border-gray-600" />
                            <button className="w-full text-left px-3 py-2 text-sm text-red-400 rounded-md hover:bg-white/10 hover:text-red-300 transition-colors">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="bg-[#1F1934] p-2 rounded-lg flex items-center border border-gray-600 focus-within:border-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-transparent border-none text-gray-200 focus:outline-none px-3 text-sm placeholder-gray-500"
                    />
                </div>
            </div>

            {/* --- User List Section --- */}
            <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-600">
                {dummyUsers.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${selectedUser?.id === user.id
                            ? "bg-[#8185B2] text-white"
                            : "hover:bg-white/5 text-gray-300"
                            }`}
                    >
                        {/* Left Side: Avatar + Name + Message */}
                        <div className="flex items-center gap-3 overflow-hidden">
                            {/* User Avatar */}
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold shrink-0">
                                    {user.name.charAt(0)}
                                </div>
                                {/* Online Green Dot on Avatar */}
                                {user.isOnline && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#282142] rounded-full"></span>
                                )}
                            </div>

                            <div className="flex flex-col truncate">
                                <span className="font-medium text-sm truncate">{user.name}</span>
                                <span className={`text-xs truncate ${selectedUser?.id === user.id ? "text-gray-200" : "text-gray-500"}`}>
                                    {user.lastMessage}
                                </span>
                            </div>
                        </div>

                        {/* Right Side: Status Text */}
                        <div className="shrink-0 pl-2">
                            {user.isOnline ? (
                                <span className="text-[10px] font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                                    Online
                                </span>
                            ) : (
                                <span className="text-[10px] font-medium text-gray-500">
                                    Offline
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;