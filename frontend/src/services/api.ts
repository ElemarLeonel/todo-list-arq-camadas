import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:50000",
});

export default api;
