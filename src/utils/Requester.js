import Axios from "./Axios";

export const get = async (endpoint) => {
  try {
    const axiosInstance = new Axios({});
    const response = await axiosInstance.get(endpoint);
    return response;
  } catch (error) {
    throw new Error("Error");
  }
};
export const post = async (endpoint) => {
  try {
    const axiosInstance = new Axios({});
    const response = await axiosInstance.post(endpoint);
    return response;
  } catch (error) {
    throw new Error("Error");
  }
};
export const put = async (endpoint) => {
  try {
    const axiosInstance = new Axios({});
    const response = await axiosInstance.put(endpoint);
    return response;
  } catch (error) {
    throw new Error("Error");
  }
};
export const deletion = async (endpoint) => {
  try {
    const axiosInstance = new Axios({});
    const response = await axiosInstance.delete(endpoint);
    return response;
  } catch (error) {
    throw new Error("Error");
  }
};
export const patch = async (endpoint) => {
  try {
    const axiosInstance = new Axios({});
    const response = await axiosInstance.patch(endpoint);
    return response;
  } catch (error) {
    throw new Error("Error");
  }
};
