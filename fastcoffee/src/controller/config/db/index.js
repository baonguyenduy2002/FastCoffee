import axios from "axios";

const instance = axios.create({
  baseURL: "https://fast-coffee-be.vercel.app/",
});

export default instance;
