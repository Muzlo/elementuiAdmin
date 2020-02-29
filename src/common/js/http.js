import axios from 'axios'

var instance = axios.create({ 
    timeout: 1000 * 12
});

// 已经为ajax请求设置了loading 请求前自动调用 请求完成自动结束
        // 添加请求拦截器
        instance.interceptors.request.use(config => {
            // 在发送请求之前做些什么
            console.log(config)
            //根据config.url判断路径 是否需要加请求头
            return config
        }, error => {
            // 对请求错误做些什么
            return Promise.reject(error)
        })

        
        // 添加响应拦截器
        instance.interceptors.response.use(response => {
            const res = response.data
            return res
        }, error => {
            // 对响应错误做点什么
            return Promise.reject(error)
        })

export default instance;