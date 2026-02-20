import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSideComponent from "../components/RightSideComponent";

const HomePage = () => {
    // ආරම්භයේදී කිසිවෙක් select කර නැති නිසා null භාවිතා කිරීම වඩාත් සුදුසුයි (false වෙනුවට)
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="h-screen bg-[#1F1934] flex items-center justify-center p-2 md:p-5">

            {/* Main Container Box */}
            <div className="w-full max-w-[1500px] h-[90vh] bg-[#282142]/90 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex">

                {/* --- Sidebar Section --- */}
                {/* Mobile: Chat එකක් select කර ඇත්නම් Sidebar එක සඟවයි. Desktop: සැමවිටම පෙන්වයි. */}
                <div className={`w-full md:w-[350px] border-r border-gray-700 h-full ${selectedUser ? "hidden md:flex" : "flex"}`}>
                    <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                </div>

                {/* --- Chat & RightSide Section --- */}
                {/* Mobile: Chat එකක් select කර නැත්නම් මේ කොටස සඟවයි. */}
                <div className={`flex-1 h-full flex flex-col ${!selectedUser ? "hidden md:flex" : "flex"}`}>

                    {selectedUser ? (
                        <div className="flex h-full w-full">
                            {/* Chat Area */}
                            <div className="flex-1 h-full relative">
                                {/* Back button for Mobile only */}
                                <div className="md:hidden absolute top-4 left-4 z-50">
                                    <button onClick={() => setSelectedUser(null)} className="text-white bg-gray-700 p-2 rounded-full">
                                        ← Back
                                    </button>
                                </div>
                                <ChatContainer selectedUser={selectedUser} />
                            </div>


                            <div className="hidden xl:block w-[300px] border-l border-gray-700 h-full">
                                <RightSideComponent selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                            </div>
                        </div>
                    ) : (
                        // No Chat Selected View (Welcome Screen)
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
                            <div className="bg-[#1F1934] p-6 rounded-full animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-purple-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-2.281l-9.8-9.8a2.126 2.126 0 010-3.007c.504-.504 1.32-.504 1.824 0l9.8 9.8c.63.63.78 1.58.375 2.375a2.125 2.125 0 11-3.375-3.375h-7.5c-1.17 0-2.125.955-2.125 2.125v11.25c0 1.17.955 2.125 2.125 2.125h7.5z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-200">Welcome to ChatApp</h2>
                            <p>Select a user from the sidebar to start messaging.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;