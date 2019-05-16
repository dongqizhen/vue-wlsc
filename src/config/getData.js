import axios from './axios'

export async function _getData(url = '', data = {}, config = {}) {

    if (!data.userid) {
        delete data.userid
    }
    return await axios.post(url, {
        ... {

        },
        ...data
    }).then(data => {
        console.log(data)
        if (data.data.code == 0) {
            return data.data.result
        } else {
            return data
        }

    }).catch(err => {
        // /* if (errorCallBack) {
        //     errorCallBack(err)
        // } else {
        //     console.log(err)
        // } */
    })
}

export async function _getDataAll(funArr = []) {
    axios.all(funArr)
        .then(axios.spread(function(acct, perms) {
            // 两个请求现在都执行完成
            return true
        }));
}