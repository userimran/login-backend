import express from "express";
import { ragsiterUser, loginUser, getUsers} from "../controller/user-controller.js";
const route = express.Router();

route.get('/', getUsers);
route.post('/ragister', ragsiterUser);
route.post('/login', loginUser);
  

export default route;