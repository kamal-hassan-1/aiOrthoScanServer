import User from "../../Models/user.js";
import bcrypt from "bcrypt";

export const loginService = async (userData) => {
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    throw new Error("User doesn't exist!");
  }

  const isMatch = await bcrypt.compare(userData.password, user.password);

  if (!isMatch) {
    throw new Error("Wrong Password");
  }
  const {password,...userwithoutpassword}=user._doc;
  return userwithoutpassword;

};
