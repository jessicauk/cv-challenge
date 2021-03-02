import axios from "axios";
import { APIError } from './APIError';
import { ERROR_GET, ERROR_POST, ERROR_PUT, ERROR_DELETE, ERROR_PATCH } from './constants';

const axiosInstance = axios.create({
  timeout: 35000,
  validateStatus: (status) => status >= 200 && status < 600,
});

export default class Axios {
  constructor(headers) {
    if (Axios.instance) {
      return Axios.instance;
    }
    this.headers = headers;
    Axios.instance = this;
  }
  async get(endpoint = "") {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      throw new APIError(ERROR_GET);
    }
  }
  async post(endpoint = "", data) {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new APIError(ERROR_POST)
    }
  }
  async put(endpoint = "") {
    try {
      console.log("asdaddasda", endpoint)
      const response = await axiosInstance.put(endpoint);
      return response.data;
    } catch (error) {
      throw new APIError(ERROR_PUT);
    }
  }
  async deletion(endpoint = "", data) {
    try {
      const response = await axiosInstance.deletion(endpoint, data);
      return response.data;
    } catch (error) {
      throw new APIError(ERROR_DELETE);
    }
  }
  async patch(endpoint = "", data) {
    try {
      const response = await axiosInstance.patch(endpoint, data);
      return response.data;
    } catch (error) {
      throw new APIError(ERROR_PATCH);
    }
  }
}
