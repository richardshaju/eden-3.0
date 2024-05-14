import Company from "../models/Company.js";

export async function updateEmployee(data) {
  console.log(data);

  const { role, deparment } = data.employeeToUpdate;
  try {
    const updatedCompany = await Company.findOneAndUpdate(
      {
        _id: data.companyId,
        "employee.employeeId": { $ne: data.employeeToUpdate.employeeId },
      },
      {
        $addToSet: {
          employee: {
            role: role,
            deparment: deparment,
          },
        },
      },
      { new: true }
    );

    console.log(updatedCompany);
    return updatedCompany; // Return the updated company
  } catch (error) {
    console.error("Error updating employee:", error);
  }
}
