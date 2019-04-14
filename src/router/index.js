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
                    path: "personalCenter",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/personalCenter")
                },
                {
                    path: "accountSecurity",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/accountSecurity")
                }
            ]
        },
        {
            name: '详情',
            path: '/details',
            component: () =>
                import ('../views/page/shop/details'),
            children: [{
                path: 'videoDetails',
                name: '视频详情',
                component: () =>
                    import ('../views/page/shop/detaileChirldren/videoDetails')
            }, {
                path: 'caseDetails',
                name: '案例详情',
                component: () =>
                    import ('../views/page/shop/detaileChirldren/caseDetails')
            }, {
                path: 'articleDetails',
                name: '文章详情',
                component: () =>
                    import ('../views/page/shop/detaileChirldren/articleDetails')
            }, {
                path: 'productDetails',
                name: '产品详情',
                component: () =>
                    import ('../views/page/shop/detaileChirldren/productDetails')
            }]
        }, {
            name: "搜索",
            path: "/search",
            component: () =>
                import ('../views/page/shop/search.vue')
        }, {
            name: '找店铺',
            path: '/lookingShop',
            component: () =>
                import ('../views/page/shop/lookingShop.vue')
        }, {
            name: '店铺详情',
            path: '/lookingShop/shopDetails',
            component: () =>
                import ('../views/page/shop/shopDetails')
        }, {
            name: '找产品',
            path: '/lookingProduct',
            component: () =>
                import ('../views/page/shop/lookingProduct'),
            children: [{
                name: '产品分类',
                path: '/',
                component: () =>
                    import ('../views/page/shop/lookingProductChirldren/brandClassific')
            }, {
                name: '产品分类主页',
                path: 'oneOfBrandClassificne',
                component: () =>
                    import ('../views/page/shop/lookingProductChirldren/oneOfBrandClassific')
            }, {
                name: '品牌主页',
                path: 'brand',
                component: () =>
                    import ('../views/page/shop/lookingProductChirldren/brand')
            }, {
                name: '型号主页',
                path: 'model',
                component: () =>
                    import ('../views/page/shop/lookingProductChirldren/model')
            }]
        }

    ]
});