/* ajax请求函数模块
返回值：promise
*/
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        let promise;
        if (type === 'GET') {
            let paramStr = "";
            Object.keys(data).forEach(key => {
                paramStr += (key + '=' + data[key] + '&');
            });
            if (paramStr !== '') {
                paramStr = paramStr.substring(0, paramStr.lastIndexOf('&'));
                url = url + '?' + paramStr;
            }
            // 发送GET请求
            promise = axios.get(url);
        } else {
            // 发送POST请求
            promise = axios.post(url, data);
        }
        promise.then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            reject(error);
        });
    });
}