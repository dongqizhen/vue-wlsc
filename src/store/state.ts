interface StateType {
    isLogin:Boolean,
    userInfo:Object,
    defaultSelectedKeys:Array<any>
}

 let state:StateType={
    isLogin:false,
    userInfo:{

    },
    defaultSelectedKeys:["0"]
}

export default state;