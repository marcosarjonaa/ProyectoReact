import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
    const TOKEN = localStorage.getItem("TOKEN"); 
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN  }`;
    }
    return config;  
  }, (error) => {
    return Promise.reject(error);
  });
  

export default api;
