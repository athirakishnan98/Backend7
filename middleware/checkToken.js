import jwt from "jsonwebtoken";

const checkToken = (role) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(403).json({ message: "You are not authorized" });
      }
      const ogToken = token.split(" ")[1];
      const isValid = jwt.verify(ogToken, "gf54566897y989uj0i09789ybh12@#");
      if(!role.includes(isValid.role) ){
        return res.status(403).json({message:"You are not authorised"})
      }
      next();
    } catch (e) {
      return res.status(403).json({ message: "You are not authorized" });
    }
  };
};

export default checkToken;
