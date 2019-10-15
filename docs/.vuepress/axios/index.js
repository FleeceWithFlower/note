import axios from "axios";




const instance = axios.create({
    baseURL: 'http:',
    timeout: 2000,
    headers: {
    }
});
/*axios.interceptors.request.use(
    function(config) {
        let token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        } else {
        }
        return config;
    },
    function(error) {
        console.log(error);
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);*/
