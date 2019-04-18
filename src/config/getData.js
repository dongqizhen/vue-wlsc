import axios from './axios'

export async function _getData(url = '', data = {}, successCallBack, errorCallBack) {

    if (!data.userid) {
        delete data.userid
    }

    return await axios.post(url, {
        ... {
            userid: userInfo.userid || '15900', //10533 15900 16511
            token: userInfo.token
        },
        ...data
    }).then(data => {

        if (data.data.status.code == 200) {
            successCallBack(data.data.result)

        } else {
            console.log(data.data.status)
            Toast({
                message: data.data.status.message,
                duration: 1000
            });

        }
        return data
    }).catch(err => {
        if (errorCallBack) {
            errorCallBack(err)
        } else {
            console.log(err)
        }
    })
}