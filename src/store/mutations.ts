const mutations = {
    changeLoginState(state:any,val:Boolean){
        state.isLogin = val
    },
    changeUserInfoState(state:any,val:Object){
        state.userInfo = val
    },
    changeDefaultSelectedKeys(state:any,val:Array<any>){
        state.defaultSelectedKeys = val
    }
}

export default mutations;