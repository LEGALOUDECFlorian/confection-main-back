import jwt from "jsonwebtoken";

export default function jwtTokens({
  id, lastname, firstname, email, role, workshopId,
}) {
  const user = {
    id, lastname, firstname, email, role, workshopId,
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "5m" });
  return ({ accessToken, refreshToken });
}
