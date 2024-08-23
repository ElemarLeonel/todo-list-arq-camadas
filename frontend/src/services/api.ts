import axios from "axios";

const URL = import.meta.env.BASE_URL;

const api = axios.create({
  baseURL: URL,
});

export default api;
