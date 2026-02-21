import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Camera, Save, ArrowLeft, FileText } from "lucide-react";

const ProfilePage = () => {
    const navigate = useNavigate();

    // 1. Consolidated State
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        bio: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // 2. Handle Text Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Handle Image Selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add update logic here
        console.log("Updated Profile:", formData, selectedImage);
        navigate("/home");
    };

    return (
        // Theme Background
        <div className="min-h-screen bg-gradient-to-br from-[#1F1934] to-[#151125] flex items-center justify-center p-4">

            {/* Main Card */}
            <div className="w-full max-w-3xl bg-[#282142]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative">

                {/* Header Section */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#151125]/50">
                    <button
                        onClick={() => navigate("/home")}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft size={20} /> <span className="hidden sm:inline">Back</span>
                    </button>
                    <h2 className="text-xl font-bold text-white tracking-wide">Edit Profile</h2>
                    <div className="w-8"></div> {/* Spacer for centering */}
                </div>

                <form onSubmit={handleSubmit} className="p-8">

                    {/* Avatar Upload Section */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group">
                            <label htmlFor="avatar-upload" className="cursor-pointer">
                                <div className="w-32 h-32 rounded-full border-4 border-[#282142] shadow-xl overflow-hidden relative">
                                    <img
                                        src={previewUrl || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                        alt="Profile"
                                        className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                                    />
                                    {/* Overlay Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="text-white w-8 h-8" />
                                    </div>
                                </div>
                            </label>
                            <input
                                onChange={handleImageChange}
                                type="file"
                                id="avatar-upload"
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mt-3">Click to change profile photo</p>
                    </div>

                    {/* Form Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="password"
                                    className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                                <input
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    type="password"
                                    className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Bio (Full Width) */}
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Bio</label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full bg-[#151125]/50 border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-600 transition-all resize-none"
                                    placeholder="Tell us about yourself..."
                                ></textarea>
                            </div>
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-lg shadow-lg shadow-purple-900/20 flex items-center gap-2 transform transition active:scale-95"
                        >
                            <Save size={18} /> Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ProfilePage;