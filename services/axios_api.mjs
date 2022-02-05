import axios from "axios";
import configuracao from "./configuracao.mjs";

const api = axios.create({
  baseURL: configuracao['urlBase'],
});

api.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${configuracao['token']}`;
  return config;
});

export default api