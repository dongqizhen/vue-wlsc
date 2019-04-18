const mutations = {
    changeLoginState(state:any,val:Boolean){
        console.log(val)
        state.isLogin = val
    }
}

export default mutations;