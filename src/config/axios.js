/*
 * @Author: mikey.dongqizhen 
 * @Date: 2019-04-18 17:08:47 
 * @Last Modified by: mikey.dongqizhen
 * @Last Modified time: 2019-04-29 16:40:17
 */


// config axios https://www.jianshu.com/p/7a9fbcbb1114
import axios from 'axios'

let request = axios.create()

// 添加请求拦截器
request.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    if (config.url.indexOf('/platform')) {
        config.transformRequest = [
            (data) => {
                return new_to_Data(data)
            }
        ]
    }
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

request.defaults.timeout = 5000 //请求超时时间
request.withCredentials = false // 是否携带cookie信息
request.responseType = `json`
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
request.defaults.transformRequest = [ //`transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动该选项只适用于以下请求方式：`put/post/patch`数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
    (data) => {
        return toData(data)
    }
]
request.defaults.baseURL = env.API_HOST.URL; //如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址

// request.defaults.adapter = function(config) {
//     /* ... */
//     console.log(config)
// }


export default request