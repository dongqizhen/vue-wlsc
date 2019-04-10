import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "首页",
            component: () =>
                import ( /* webpackChunkName: "index" */ "../views/index")
        },
        {
            path: "/merchant",
            component: () =>
                import ("../views/page/merchant/merchant"),
            children: [{
                    path: "/",
                    name: '店铺首页',
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/shopIndex")
                }, {
                    path: "shopIndex",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/shopIndex")
                },
                {
                    path: "shopInfo",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/shopInfo")
                },
                {
                    path: "shopCertification",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/shopCertification")
                },
                {
                    path: "publishGoods",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/publishGoods")
                },
                {
                    path: "productManage",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/productManage")
                },
                {
                    path: "inquiryManage",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/inquiryManage")
                },
                {
                    path: "orderManage",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/orderManage")
                },
                {
                    path: "accountSecurity",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/accountSecurity")
                },
                {
                    path: "personalCenter",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/personalCenter")
                },
                {
                    path: "messageCenter",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/messageCenter")
                },
            ]
        },
        {
            name: '详情',
            path: '/detaile',
            component: () =>
                import ('../views/page/shop/detaile')
        }, {
            name: "搜索",
            path: "/search",
            component: () =>
                import ('../views/page/shop/search.vue')
        }

    ]
});