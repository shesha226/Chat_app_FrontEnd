import React from "react";

const RightSideComponent = ({ selectedUser }) => {

    // User කෙනෙක් select කර නැතිනම් මේ කොටස හිස්ව තබයි (හෝ වෙනත් දෙයක් පෙන්විය හැක)
    if (!selectedUser) return <div className="hidden xl:block w-full h-full bg-[#1F1934]/50 border-l border-gray-700"></div>;

    return (
        <div className="w-full h-full bg-[#1F1934]/50 backdrop-blur-lg border-l border-gray-700 flex flex-col overflow-y-auto">

            {/* --- Profile Header Section --- */}
            <div className="pt-10 pb-6 flex flex-col items-center border-b border-gray-700">
                <div className="relative">
                    <img
                        src={selectedUser?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-4 border-[#282142]"
                    />
                    {/* Status Indicator */}
                    {selectedUser.isOnline && (
                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#1F1934] rounded-full"></span>
                    )}
                </div>

                <h2 className="mt-4 text-xl font-semibold text-white tracking-wide">
                    {selectedUser?.name || "Unknown User"}
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                    {selectedUser?.isOnline ? "Active Now" : "Offline"}
                </p>

                <div className="px-6 text-center mt-4">
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                        {selectedUser?.bio || "Hey there! I am using ChatApp."}
                    </p>
                </div>
            </div>

            {/* --- Information Section --- */}
            <div className="p-4 space-y-4">

                {/* Information Row */}
                <div className="bg-[#282142]/50 p-3 rounded-lg">
                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Contact Info</h3>
                    <div className="flex items-center gap-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="text-sm text-gray-300">user@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span className="text-sm text-gray-300">+94 71 234 5678</span>
                    </div>
                </div>

                {/* --- Shared Media Mockup --- */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xs font-bold text-gray-500 uppercase">Shared Media</h3>
                        <span className="text-xs text-purple-400 cursor-pointer hover:underline">See all</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="aspect-square bg-gray-700 rounded-md overflow-hidden hover:opacity-80 cursor-pointer">
                                <img src={`https://picsum.photos/200?random=${item}`} alt="media" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* --- Block / Report Actions --- */}
            <div className="mt-auto p-4 border-t border-gray-700">
                <button className="w-full py-2 text-red-400 bg-red-400/10 hover:bg-red-400/20 rounded-lg text-sm font-medium transition-colors">
                    Block User
                </button>
            </div>
        </div>
    );
}

export default RightSideComponent;