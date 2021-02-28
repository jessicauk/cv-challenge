import axios from "axios";

const axiosInstance = axios.create({
  timeout: 35000,
  validateStatus: (status) => status >= 200 && status < 600,
});

export default class Axios {
  constructor(headers) {
    this.headers = headers;
  }
  async get(endpoint = "") {
    const config = { headers: this.headers };
    try {
      const response = await axiosInstance.get(endpoint);
      console.log("HEREEEEE", response)
      console.log("HEREEEEE DATA", response.data)
      return response.data;
    } catch (error) {
      throw new Error("Error");
    }
  }
}
