import Axios from './Axios';
jest.mock('./Axios');
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Axios.mockClear();
});
describe('Requester Axios', () => {
    it('Axios called the class constructor', () => {
        const axiosInstance = new Axios();
        expect(Axios).toHaveBeenCalledTimes(1);
    });

    it('should Axios called get method on the class instance', () => {
        // Show that mockClear() is working:
        expect(Axios).not.toHaveBeenCalled();
      
        const axiosInstance = new Axios();
        // Constructor should have been called again:
        expect(Axios).toHaveBeenCalledTimes(1);
      
        const endpoint = 'http://localhost:3000/profile'
        const data = {
            "firstName": "Bruce",
            "lastName": "Kaufman",
            "birthDate": "Wed Jan 12 2006 09:06:17 GMT+0000 (UTC)",
        };
        const id = 1;
        axiosInstance.get(endpoint);
        axiosInstance.post(endpoint, data);
        axiosInstance.put(endpoint, id);
        axiosInstance.deletion(endpoint, id);
      
        const mockAxiosInstance = Axios.mock.instances[0];
        const mockGet = mockAxiosInstance.get;
        const mockPost = mockAxiosInstance.post;
        const mockPut = mockAxiosInstance.put;
        const mockDelete = mockAxiosInstance.deletion;
        expect(mockGet.mock.calls[0][0]).toEqual(endpoint);
        expect(mockPost.mock.calls[0][0]).toEqual(endpoint, data);
        expect(mockPut.mock.calls[0][0]).toEqual(endpoint, id);
        expect(mockDelete.mock.calls[0][0]).toEqual(endpoint, id);
      });
});