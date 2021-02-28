import axios from "axios";

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
      throw new Error("Error");
    }
  }
  async post(endpoint = "") {
    try {
      const response = await axiosInstance.post(endpoint);
      return response.data;
    } catch (error) {
      throw new Error("Error");
    }
  }
  async put(endpoint = "") {
    try {
      const response = await axiosInstance.put(endpoint);
      return response.data;
    } catch (error) {
      throw new Error("Error");
    }
  }
  async deletion(endpoint = "") {
    try {
      const response = await axiosInstance.deletion(endpoint);
      return response.data;
    } catch (error) {
      throw new Error("Error");
    }
  }
  async patch(endpoint = "") {
    try {
      const response = await axiosInstance.patch(endpoint);
      return response.data;
    } catch (error) {
      throw new Error("Error");
    }
  }
}
