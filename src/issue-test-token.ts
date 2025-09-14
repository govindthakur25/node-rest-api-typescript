import jwt from "jsonwebtoken";
import config from "./config";

const paylod = {
  sub: "0cdbed84-0b12-4b89-91ae-5572e8e1258e",
};

const token = jwt.sign(paylod, config.appSecret, {
  expiresIn: "1d",
  issuer: "task-manager-app",
});

console.log(token);
