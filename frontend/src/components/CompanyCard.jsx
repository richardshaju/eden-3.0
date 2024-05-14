import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ icon, name, employees, id }) => {
  const numberOfEmployees = employees?.length;

  return (
    <Link to={`/dashboard/${id}`}>
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 ">
      <img src={icon} alt="Company Icon" className="w-12 h-12 rounded-full" />
      <div className="text-left">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{numberOfEmployees} Employees</p>
      </div>
    </div>
    </Link>
  );
};

export default CompanyCard;
