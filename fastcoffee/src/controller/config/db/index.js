import axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  // baseURL: "https://fast-coffee-be.vercel.app/",
  baseURL: "http://localhost:3001/",
});

export default instance;
