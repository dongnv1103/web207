import axios from "axios";

const instance = axios.create({
    // baseURL: "https://6008fce80a54690017fc2946.mockapi.io";
    baseURL: "http://localhost:3001"
});
export default instance;