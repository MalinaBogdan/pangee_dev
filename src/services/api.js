import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://pangee-siecwauy.xyz/"
      : "/", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
