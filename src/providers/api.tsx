import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/rafael-gon",
});

export default api;