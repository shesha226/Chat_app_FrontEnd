import React, { useState } from "react";
import { User, Mail, Lock, CheckCircle, ArrowRight } from "lucide-react";

const LoginPage = () => {
    // 1. State for toggling modes and steps
    const [isLogin, setIsLogin] = useState(true);
    const [signupStep, setSignupStep] = useState(1); // 1: Details, 2: Bio

    // 2. Consolidated Form Data State
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        bio: "",
        agreeToTerms: false,
    });

    // 3. Generic Change Handler
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // 4. Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            console.log("Logging in with:", formData);
            // Add login API logic here
        } else {
            if (signupStep === 1) {
                // Move to Bio step
                setSignupStep(2);
            } else {
                console.log("Registering with:", formData);
                // Add register API logic here
            }
        }
    };

    // Helper to toggle views
    const toggleMode = () => {
        setIsLogin(!isLogin);
        setSignupStep(1); // Reset step when switching
    };

    return (
        // Theme Update: Background Colors matched to HomePage
        <div className="min-h-screen bg-gradient-to-br from-[#1F1934] to-[#151125] flex items-center justify-center p-4">

            {/* Theme Update: Container glassmorphism and border colors */}
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-[#282142]/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10">

                {/* Left Side: Visual/Logo */}
                <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center bg-[#151125]/50 text-white relative overflow-hidden">
                    {/* Decorative Background Blob */}
                    <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <img
                        src="https://via.placeholder.com/150"
                        alt="Logo"
                        className="w-32 h-32 object-contain mb-6 rounded-full bg-white/5 border border-white/10 shadow-lg relative z-10"
                    />
                    <h1 className="text-3xl font-bold mb-2 relative z-10">Welcome Back</h1>
                    <p className="text-center text-gray-400 relative z-10">
                        {isLogin
                            ? "Enter your details to access your account."
                            : "Join our community and start your journey."}
                    </p>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 p-8 bg-transparent">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">

                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{isLogin ? "Login" : "Create Account"}</h2>
                            <button
                                type="button"
                                onClick={toggleMode}
                                // Theme Update: Text color to Purple/Pink
                                className="text-sm text-purple-400 hover:text-purple-300 underline transition-colors"
                            >
                                {isLogin ? "Need an account?" : "Have an account?"}
                            </button>
                        </div>

                        {/* --- FORM FIELDS --- */}

                        {/* Step 1: Login OR Signup Details */}
                        {(!isLogin && signupStep === 1) || isLogin ? (
                            <>
                                {!isLogin && (
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                                        <input
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Username"
                                            // Theme Update: Darker inputs with Purple focus border
                                            className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-200 placeholder-gray-500"
                                            required={!isLogin}
                                        />
                                    </div>
                                )}

                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-200 placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type="password"
                                        placeholder="Password"
                                        className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-200 placeholder-gray-500"
                                        required
                                    />
                                </div>

                                {!isLogin && (
                                    <div className="relative">
                                        <CheckCircle className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                                        <input
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            type="password"
                                            placeholder="Confirm Password"
                                            className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-200 placeholder-gray-500"
                                            required={!isLogin}
                                        />
                                    </div>
                                )}
                            </>
                        ) : null}

                        {/* Step 2: Signup Bio */}
                        {!isLogin && signupStep === 2 && (
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-400 text-sm">Tell us a little about yourself:</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-gray-200 placeholder-gray-500"
                                    placeholder="I am a developer who loves..."
                                ></textarea>
                            </div>
                        )}

                        {/* Terms Checkbox */}
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                id="terms"
                                // Theme Update: Accent color purple
                                className="w-4 h-4 rounded accent-purple-600 cursor-pointer bg-gray-700 border-gray-600"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer select-none">
                                I agree to the terms and conditions
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            // Theme Update: Purple Gradient Button
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-purple-900/30 transform transition active:scale-95 flex justify-center items-center gap-2"
                        >
                            {!isLogin && signupStep === 1 ? (
                                <>Next <ArrowRight size={18} /></>
                            ) : (
                                isLogin ? "Login" : "Complete Registration"
                            )}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;