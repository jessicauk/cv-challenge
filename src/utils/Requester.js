import Axios from "./Axios";
import { APIError } from './APIError';
import { ERROR_GET, ERROR_POST, ERROR_PUT, ERROR_DELETE, ERROR_PATCH } from './constants';


export const get = async (endpoint) => {
  try {
    const axiosInstance = new Axios();
    const response = await axiosInstance.get(endpoint);
    return response;
  } catch (error) {
    throw new APIError(ERROR_GET);
  }
};
export const post = async (endpoint, data) => {
  try {
    const axiosInstance = new Axios();
    const response = await axiosInstance.post(endpoint, data);
    return response;
  } catch (error) {
    throw new APIError(ERROR_POST);
  }
};
export const put = async (endpoint, data) => {
  try {
    const axiosInstance = new Axios();
    const endpointURL = `${endpoint}/${data.id}`;
    const response = await axiosInstance.put(endpointURL, data);
    return response;
  } catch (error) {
    throw new APIError(ERROR_PUT);
  }
};
export const deletion = async (endpoint, data) => {
  try {
    const axiosInstance = new Axios();
    const endpointURL = `${endpoint}/${data.id}`;
    console.log("deletion", endpoint)
    console.log("endpointURL", endpointURL)
    const response = await axiosInstance.delete(endpointURL);
    return response;
  } catch (error) {
    throw new APIError(ERROR_DELETE);
  }
};
export const patch = async (endpoint, data) => {
  try {
    const axiosInstance = new Axios();
    const response = await axiosInstance.patch(endpoint, data);
    return response;
  } catch (error) {
    throw new APIError(ERROR_PATCH);
  }
};
