import User from "../../Models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
dotenv.config();

export const loginService = async (userData) => {
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    throw new Error("User doesn't exist!");
  }

  const isMatch = await bcrypt.compare(userData.password, user.password);

  if (!isMatch) {
    throw new Error("Wrong Password");
  }
  const userObj=user.toObject();
  const token=jsonwebtoken.sign({id:userObj._id,name:userObj.fullName},
                                process.env.ACCESS_TOKEN_SECRET_KEY);

  delete userObj.password;
  return {
    userObj,
    token
  };

};
