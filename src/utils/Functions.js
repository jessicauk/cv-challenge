import Axios from './Axios';



export const get = async (endpoint) => {
    const axiosInstance = new Axios({});
    const response = await axiosInstance.get(endpoint);
    console.log('response here', response)
}