import React from "react";
import { useState } from "react";

const LogingPage = () => {
    const [currentState, setCurrentState] = useState("login")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isDataSubmitted, setIsDataSubmitted] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-lg">
            <img src="" alt="logo" className="w-24 h-24 object-contain" />
            <form className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold">{currentState === "login" ? "Login" : "Register"}
                    <img src="" alt="" className="w-5 cursor-pointer" />
                </h2>
                {currentState === "sign up" && !isDataSubmitted && (
                    <>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Username" className="p-2 rounded-lg" />
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" className="p-2 rounded-lg" />
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="Password" className="p-2 rounded-lg" />
                        <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="text" placeholder="Confirm Password" className="p-2 rounded-lg" />
                    </>
                )}
                {!isDataSubmitted && (
                    <>
                        <input type="text" placeholder="Username" className="p-2 rounded-lg" />
                        <input type="text" placeholder="Email" className="p-2 rounded-lg" />
                        <input type="text" placeholder="Password" className="p-2 rounded-lg" />
                    </>
                )}


                <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
            </form>

        </div>
    )
}

export default LogingPage   