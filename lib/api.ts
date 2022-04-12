import axios from "axios";

export const URL = process.env.NEXT_PUBLIC_URL_API;

export const API = axios.create({
  baseURL: URL,
  timeout: 15000,
});
