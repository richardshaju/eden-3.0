import React from "react";
import logo from '../images/image.png'
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login')
  };

  return (
    <div className="fixed w-full h-20 shadow-md bg-[#ffffff] text-[#384c8e] flex justify-between items-center px-6 py-4">
      <a href="/">
        <img
          src={
            logo
          }
          alt="adad"
          className="w-14"
        />
      </a>
      <div className="flex gap-10">
        <a href="/">Contributors</a>
        <a href="/">About</a>
        <a className="cursor-pointer" onClick={logout}>Logout</a>
      </div>
    </div>
  );
}

export default Navbar;
