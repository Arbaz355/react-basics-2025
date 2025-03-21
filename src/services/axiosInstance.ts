import axios from "axios";

const TEN_SECONDS = 10 * 60;
const BASE_URL = import.meta.env.VITE_APP_BASE_API_URL;

const axiosCustomInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TEN_SECONDS,
});

const addAuthToken = aync (config) => {
    const token = `Berear ${sessionStorage.getItem("token")}` 
    config.headers = config.headers 
    config.headers["Authorozation"] = token;
}

axiosCustomInstance.interceptors.request.use(async (config) => addAuthToken(config))

export default axiosCustomInstance;