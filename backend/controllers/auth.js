import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signup(user) {
  try {
    const { name, email, password, image } = user;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        image,
      });
      const token = await jwt.sign({ email }, "clover", { expiresIn: "1h" });

      const response = {
        newUser,
        token,
      };
      return { success: true, message: "User added", response };
    } else {
      return { success: false, message: "User already exists" };
    }
  } catch (error) {
    console.error("Error in signup:", error);
    throw error;
  }
}

export async function login(user) {
  const { email, password } = user;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (passwordMatch) {
        const token = await jwt.sign({ email }, "clover", { expiresIn: "1h" });
        const response = {
          existingUser,
          token,
        };
        return { success: true, message: "Login success", response };
      } else {
        console.log( "Password error");
        return { success: false, message: "Password error" };
      }
    } 
  } catch (error) {
    console.error("Error in login:", error);
    throw error;
  }
}
