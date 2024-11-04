import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="pb-12">
        <Navbar />
      </div>
      <main className="min-h-[calc(100vh-232px)] p-12 container mx-auto ">
        {/* Dynamic section */}
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
