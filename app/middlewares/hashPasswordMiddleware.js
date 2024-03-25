import bcrypt from "bcrypt";

const hashPasswordMiddleware = async (req, res, next) => {
  if (req.body.password) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    next();
  } else {
    next();
  }
};

export default hashPasswordMiddleware;
