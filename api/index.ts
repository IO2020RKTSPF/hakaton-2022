import axios from "axios";
import config from "config";

export interface LoginPostBody {
  identifier: string;
  password: string;
}

export interface RegisterPostBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthPostResponse {
  token: string;
}

export interface MeGetResponse {
  email: string;
}

const api = axios.create({
  baseURL: config.apiUrl,
});

export default api;
