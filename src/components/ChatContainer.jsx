import React, { useEffect, useRef } from "react";
// formatMessageTime ඔබේ utils file එකේ ඇති බව උපකල්පනය කරමි. 
// නැත්නම් පහත dummy function එක uncomment කරන්න.
// const formatMessageTime = (date) => new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
import { formatMessageTime } from "../lib/utils";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
    const messagesEndRef = useRef(null);

    // Dummy Messages Data (පරීක්ෂා කිරීම සඳහා)
    const dummyMessages = [
        { id: 1, text: "Hi there!", senderId: selectedUser?.id, timestamp: Date.now() },
        { id: 2, text: "Hello! How are you?", senderId: 999, timestamp: Date.now() }, // 999 = My ID
        { id: 3, text: "I am good, thanks for asking.", senderId: selectedUser?.id, timestamp: Date.now() },
        { id: 4, img: "https://via.placeholder.com/300", senderId: 999, timestamp: Date.now() }, // Image message
        { id: 5, text: "Nice photo!", senderId: selectedUser?.id, timestamp: Date.now() },
    ];

    // අලුත් මැසේජ් එකක් ආපු ගමන් පහළට auto-scroll වීමට
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedUser, dummyMessages]);

    // User කෙනෙක් select කර නැති විට පෙන්වන කොටස
    if (!selectedUser) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-white bg-[#1F1934]/50">
                <div className="bg-white/10 p-6 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                </div>
                <p className="text-lg font-medium">Select a user to start chatting</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-[#1F1934]/50 backdrop-blur-lg relative">

            {/* --- Chat Header --- */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-700 bg-[#1F1934]/80">
                {/* Back Button (Mobile Only) */}
                <button onClick={() => setSelectedUser(null)} className="md:hidden text-gray-300 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>

                {/* User Info */}
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold text-white">
                    {selectedUser.name.charAt(0)}
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                        {selectedUser.name}
                        {selectedUser.isOnline && <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span>}
                    </h3>
                    <p className="text-xs text-gray-400">Online</p>
                </div>

                {/* More Options Icon */}
                <button className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </button>
            </div>

            {/* --- Messages Area (Scrollable) --- */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600">
                {dummyMessages.map((msg, index) => {
                    // Logic: If msg.senderId is the selected user's ID, it's incoming (Left). Otherwise it's mine (Right).
                    const isMyMessage = msg.senderId !== selectedUser.id;

                    return (
                        <div key={index} className={`flex w-full ${isMyMessage ? "justify-end" : "justify-start"}`}>
                            <div className={`flex flex-col max-w-[70%] md:max-w-[60%] ${isMyMessage ? "items-end" : "items-start"}`}>

                                {/* Message Bubble */}
                                {msg.img ? (
                                    <img src={msg.img} alt="sent" className="rounded-lg mb-1 border border-gray-600 max-w-full" />
                                ) : (
                                    <div className={`px-4 py-2 rounded-2xl text-sm break-words ${isMyMessage
                                            ? "bg-[#8185B2] text-white rounded-br-none"
                                            : "bg-[#352F4D] text-gray-200 rounded-bl-none"
                                        }`}>
                                        {msg.text}
                                    </div>
                                )}

                                {/* Timestamp */}
                                <span className="text-[10px] text-gray-500 mt-1 px-1">
                                    {formatMessageTime ? formatMessageTime(msg.timestamp) : "10:30 AM"}
                                </span>
                            </div>
                        </div>
                    );
                })}
                {/* Invisible element to scroll to */}
                <div ref={messagesEndRef} />
            </div>

            {/* --- Input Area (Fixed at bottom) --- */}
            <div className="p-4 bg-[#1F1934] border-t border-gray-700">
                <form className="flex items-center gap-2 bg-[#282142] p-2 rounded-full border border-gray-600 focus-within:border-[#8185B2] transition-colors">

                    {/* Image Upload Icon */}
                    <button type="button" className="p-2 text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>

                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-white text-sm px-2"
                    />

                    {/* Send Button */}
                    <button type="submit" className="p-2 bg-[#8185B2] rounded-full text-white hover:bg-[#6b6f9a] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatContainer;