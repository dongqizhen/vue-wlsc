const mutations = {
    changeLoginState(state:any,val:Boolean){
        state.isLogin = val
    },
    changeUserInfoState(state:any,val:Object){
        state.userInfo = val
    }
}

export default mutations;