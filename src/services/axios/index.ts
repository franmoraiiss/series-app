import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4003",
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});

export default api;
