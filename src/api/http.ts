import axios from 'axios'

const config = {
    baseURL: 'http://shop_api.chaohua-sxx.cn',
    timeout: 7000
}

class Request {
    instance: any
    constructor(config1: any) {
        this.instance = axios.create(config1)
        // 添加请求拦截器
        this.instance.interceptors.request.use(function (config: any) {
            // 在发送请求之前做些什么
            const token = localStorage.getItem('token')
            if (token) {
                config.headers.token =token
            }
            return config;
        }, function (error: any) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        this.instance.interceptors.response.use(function (response: any) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error: any) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    get(url: string, params: any) {
        return this.instance.get(url, { params })
    }
    post(url: string, params: any) {
        return this.instance.post(url, params)
    }
    delete(url: string, params: any) {
        return this.instance.delete(url, { params })
    }
    put(url: string, params: any) {
        return this.instance.put(url, params)
    }
}

export default new Request(config)