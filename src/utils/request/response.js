import axios from 'axios'
import instance from './index'


instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let obj = {
        data: response.data,
        status:response.status
    }

    return obj
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});



export default instance
