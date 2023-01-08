import axios from "axios";
import { cookies } from "../../service/auth";

const instance = axios.create({
  withCredentials: true,
  // baseURL: "https://fast-coffee-be.vercel.app/",
  baseURL: "http://localhost:3001/",
});

export default instance;
