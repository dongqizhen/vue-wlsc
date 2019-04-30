import axios from './axios'

export async function _getData(url = '', data = {}, successCallBack, errorCallBack) {

    if (!data.userid) {
        delete data.userid
    }

    return await axios.post(url, {
        ... {

        },
        ...data
    }).then(data => {
        console.log(data)
            // /* if (data.data.status.code == 200) {
            //     successCallBack(data.data.result)

        // } else {
        //     console.log(data.data.status)

        // } */
        return data.data.result
    }).catch(err => {
        // /* if (errorCallBack) {
        //     errorCallBack(err)
        // } else {
        //     console.log(err)
        // } */
    })
}