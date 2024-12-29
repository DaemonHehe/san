import { sign } from "jsonwebtoken";

const generateRefreshToken = (id) => {
  return sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export default { generateRefreshToken };
