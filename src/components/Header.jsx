import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderButtons = () => {
    if (location.pathname === "/") {
      return (
        <>
          <button
            className="bg-lightOrange text-black text text-sm md:text-lg rounded-full py-1 px-2 inline-block sm:tracking-wider font-medium"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-lightOrange text-black text text-sm md:text-lg rounded-full py-1 px-2 inline-block sm:tracking-wider font-medium"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </>
      );
    } else if (location.pathname === "/dashboard") {
      return (
        <>
          <button
            className="bg-green-600 hover:bg-green-400 text-black text text-sm md:text-lg rounded-full py-1 px-2 inline-block sm:tracking-wider font-medium"
            onClick={() => navigate("/profile")}
          >
            Create Profile
          </button>
          <button
            className="bg-lightOrange text-black text text-sm md:text-lg rounded-full py-1 px-2 inline-block sm:tracking-wider font-medium"
            onClick={() => {
              navigate("/");
              toast.success("Logout Successful!!");
            }}
          >
            Logout
          </button>
        </>
      );
    } 
    return null;
  };

  return (
    <div className="py-3 px-5 bg-newBlack bg-cover bg-center bg-no-repeat sticky w-full top-0 z-50 flex justify-between items-center shadow-lg">
      <div className="text-xl font-bold text-white">Amrytt</div>
      <div className="flex space-x-4">{renderButtons()}</div>
    </div>
  );
};

export default Header;
