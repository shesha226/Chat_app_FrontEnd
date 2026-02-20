import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogingPage from "./pages/LogingPage";
import ProfilePage from "./pages/ProfilePage";



const App = () => {


  return (

    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>

  );
};

export default App;