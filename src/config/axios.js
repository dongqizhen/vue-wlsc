/*
 * @Author: mikey.dongqizhen 
 * @Date: 2019-04-18 17:08:47 
 * @Last Modified by: mikey.dongqizhen
 * @Last Modified time: 2019-06-02 01:17:15
 */


// config axios https://www.jianshu.com/p/7a9fbcbb1114
import axios from 'axios'
import {
    toData,
    new_to_Data
} from './jsonData'

let request = axios.create();
//console.log(window.localStorage["vuex-along"])



//添加请求拦截器
axios.interceptors.request.use(function(config) {
    if (config.url.indexOf('!request.action') == -1) {
        let token;
        if (window.localStorage["vuex-along"] != "{}") {
            token = JSON.parse(window.localStorage["vuex-along"])['vuex-along'].userInfo.token
        }
        config.headers['X-Nideshop-Token'] = token
        config.transformRequest = [
            (data) => {
                console.log(data)
                return new_to_Data(data)
                    //return JSON.stringify(data)
            }
        ]
    } else {
        config.headers['Content-Type'] = "application/x-www-form-urlencoded"
        config.transformRequest = [
            (data) => {
                return toData(data)
            }
        ]
    }
    return config;

}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.defaults.timeout = 1000000 //请求超时时间
axios.withCredentials = false // 是否携带cookie信息
axios.responseType = `json`
axios.defaults.headers.post['Content-Type'] = 'application/json';
// if (token) {
//     //request.defaults.headers.common['X-Nideshop-Token'] = token;
// }

axios.defaults.transformRequest = [ //`transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动该选项只适用于以下请求方式：`put/post/patch`数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
    (data) => {

        return new_to_Data(data)
    }
]
axios.defaults.baseURL = `${env.API_HOST.URL}/api/`; //如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址

// request.defaults.adapter = function(config) {
//     /* ... */
//     console.log(config)
// }


export default axios