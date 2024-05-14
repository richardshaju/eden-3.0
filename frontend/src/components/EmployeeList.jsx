import React, { useState, useEffect } from "react";

function EmployeeList({ employees,companyId }) {
  const [updatedEmployees, setUpdatedEmployees] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Function to handle initial loading of data
  if (!dataLoaded && employees?.length > 0) {
    setUpdatedEmployees(employees);
    setDataLoaded(true);
  }

  if (!updatedEmployees) {
    return <div>Loading...</div>;
  }
  const handleRoleChange = (id, role) => {
    console.log("Changing role for employee with id:", id);
    console.log("New role:", role);
    setUpdatedEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.employeeId === id ? { ...employee, role } : employee
      )
    );

    console.log(updatedEmployees);
  };

  const handleDepartmentChange = (id, department) => {
    setUpdatedEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.employeeId === id ? { ...employee, department } : employee
      )
    );
  };

  const handleSave = async (id) => {
    const employeeToUpdate = updatedEmployees.find(
      (employee) => employee.employeeId === id 
    );
    try {
      const response = await fetch(`http://localhost:5000/updateemployee`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({employeeToUpdate, companyId }),
      });
      if (response.ok) {
        // Handle success
        console.log(`Employee with id ${id} updated successfully!`);
      } else {
        // Handle error
        console.error(`Failed to update employee with id ${id}`);
      }
    } catch (error) {
      // Handle error
      console.error("Error occurred while updating employee:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold bg-gray-200 p-3 border-b border-gray-300">
        Employee List
      </h2>
      <div className="p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {updatedEmployees.map((employee) => (
              <tr key={employee.employeeId}>
                <td>{employee.name}</td>
                <td>
                  <select
                    value={employee.role}
                    onChange={(e) =>
                      handleRoleChange(employee.employeeId, e.target.value)
                    }
                    className="border border-gray-300 rounded-md px-2 py-1"
                  >
                    <option value="">{employee.role || "Select role"}</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    {/* Add more roles */}
                  </select>
                </td>
                <td>
                  <select
                    value={employee.department}
                    onChange={(e) =>
                      handleDepartmentChange(employee.employeeId, e.target.value)
                    }
                    className="border border-gray-300 rounded-md px-2 py-1"
                  >
                    <option value="">{employee.department || "Select role"}</option>
                    <option value="IT">IT</option>
                    <option value="Design">Design</option>
                    {/* Add more departments */}
                  </select>
                </td>
                <td>
                  <button onClick={() => handleSave(employee.employeeId)}>Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
