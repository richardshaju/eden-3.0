import Company from "../models/Company.js";
import User from "../models/User.js";

export async function createCompany(data) {
  console.log(data);
  try {
    const { userId, name, logo, description, uuid } = data;
    const company = await Company.create({ name, logo, description, uuid });
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { companies: company._id } },
      { new: true }
    );

    return { success: true, message: "Company created", company, user };
  } catch (error) {
    console.error("Error in createCompany:", error);
    throw error;
  }
}

export async function getCompanies(userId) {
  const result = await User.findOne({ _id: userId });
  const companies = await Company.find({ _id: result.companies });
  return companies;
}
export async function joinCompany(data) {
  const company = await Company.findOne({ uuid: data.uuid });
  const user = await User.findOne({ _id: data.userId });
  if (company) {
    return { success: true, message: "company found", company, user };
  } else {
    return { success: false, message: "company not found" };
  }
}

export async function joinTheParticularCompany(data) {
  console.log(data);
  const updatedCompany = await Company.findByIdAndUpdate(
    data.company._id,
    {
      $push: {
        employee: {
          employeeId: data.user._id,
          name: data.user.name,
          email: data.user.email,
          dateOfJoining: data.dateOfJoining,
          exp: data.experience,
        },
      },
    },
    { new: true }
  );

  console.log(updatedCompany);

  const user = await User.findByIdAndUpdate(
    data.user._id,
    { $push: { companies: data.company._id} },
    { new: true }
  );

  return { success: true, message: "Employee added"};
 
}

export async function fetchCompany(id){
  console.log(id);
  const companies = await Company.findOne({ _id: id });
  return companies;
}