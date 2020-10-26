import axios from 'axios'
 const instance = axios.create({
    timeout: 3000,
    headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
    // baseURL:'http://www.juhe.cn/'
});

export default instance
