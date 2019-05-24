import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
console.log(process.env)
const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "首页",
            component: () =>
                import ( /* webpackChunkName: "index" */ "../views/index"),
            meta: {
                title: '网来商城'
            },
        },
        {
            path: "/merchant",
            meta: {
                requireAuth: true
            },
            component: () =>
                import ("../views/page/merchant/merchant"),
            children: [{
                    path: "/",
                    name: '默认',
                },
                {
                    path: "openShop",
                    name: '我要开店',
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/openShop")
                }, {
                    name: '店铺首页',
                    path: "shopIndex",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/shopIndex")
                },
                {
                    path: "shopInfo",
                    name: "店铺信息",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/shopInfo")
                },
                {
                    path: "shopCertification",
                    name: "店铺认证",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/shopCertification")
                },
                {
                    path: "publishGoods",
                    name: "发布商品",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/publishGoods")
                },
                {
                    path: "productManage",
                    name: "产品管理",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/productManage")
                },
                {
                    path: "inquiryManage",
                    name: "询价管理",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/inquiryManage")
                },
                {
                    path: "inquiryDetail",
                    name: "询价单详情",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/inquiryOrderDetail")
                },
                {
                    path: "orderManage",
                    name: "订单管理",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/orderManage")
                },
                {
                    path: "orderDetail",
                    name: "订单详情",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/orderDetail")
                },
                {
                    path: "accountSecurity",
                    name: "账户安全",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/accountSecurity")
                },
                {
                    path: "personalCenter",
                    name: "个人中心",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/personalCenter")
                },
                {
                    path: "messageCenter",
                    name: "信息中心",
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/messageCenter"),
                },
                {
                    path: "messageDetail",
                    name: '信息详情',
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/messageDetail")
                }, {
                    path: "changePassword",
                    name: '更改密码',
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/changePassword")
                }, {
                    path: "changePhone",
                    name: '更改手机号',
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/changePhone")
                }, {
                    path: "changeEmail",
                    name: '更改邮箱',
                    component: () =>
                        import ("../views/page/merchant/merchantChildren/changeEmail")
                },
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
                    import ('../views/page/shop/detailsChildren/videoDetails')
            }, {
                path: 'caseDetails',
                name: '案例详情',
                component: () =>
                    import ('../views/page/shop/detailsChildren/caseDetails')
            }, {
                path: 'articleDetails',
                name: '文章详情',
                component: () =>
                    import ('../views/page/shop/detailsChildren/articleDetails')
            }, {
                path: 'productDetails/:id',
                name: '产品详情',
                meta: {
                    title: '产品详情'
                },
                component: () =>
                    import ('../views/page/shop/detailsChildren/productDetails')
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
            path: '/shopDetails',
            component: () =>
                import ('../views/page/shop/shopDetails')
        }, {
            path: '/lookingProduct',
            component: () =>
                import ('../views/page/shop/lookingProduct'),
            children: [{
                name: '产品分类',
                path: '/',
                component: () =>
                    import ('../views/page/shop/lookingProductChildren/brandClassific')
            }, {
                name: '产品分类主页',
                path: 'oneOfBrandClassificne',
                component: () =>
                    import ('../views/page/shop/lookingProductChildren/oneOfBrandClassific')
            }, {
                name: '品牌主页',
                path: 'brand',
                component: () =>
                    import ('../views/page/shop/lookingProductChildren/brand')
            }, {
                name: '型号主页',
                path: 'model',
                component: () =>
                    import ('../views/page/shop/lookingProductChildren/model')
            }]
        }, {
            name: '关于我们',
            path: '/aboutUs',
            component: () =>
                import ('../views/page/shop/aboutUs')
        }, {
            name: '参数对比',
            path: '/comparisonOfParameters',
            component: () =>
                import ('../views/page/shop/comparisonOfParameters')
        }, {
            name: '店铺介绍',
            path: '/shopIntroduction',
            component: () =>
                import ('../views/page/shop/shopIntroduction')
        }, {
            path: '/login',
            component: () =>
                import ('../views/page/login/login'),
            children: [{
                name: '登录',
                path: '/',
                component: () =>
                    import ('../views/page/login/loginChildren/loginUp')
            }, {
                name: '注册',
                path: '/register',
                component: () =>
                    import ('../views/page/login/loginChildren/register')
            }, {
                name: '忘记密码',
                path: '/forgetPassword',
                component: () =>
                    import ('../views/page/login/loginChildren/forgetPassword')
            }]
        }, {
            name: '服务协议',
            path: '/register/agreement',
            component: () =>
                import ('../views/page/login/agreement')
        }, {
            path: '/userCenter',
            component: () =>
                import ('../views/page/shop/userCenter'),
            children: [{
                    path: "/",
                    name: '选购单',
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/purchaseOrder")
                },
                {
                    path: "myInquiry",
                    name: "我的询价",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/myInquiry")
                },
                {
                    path: "myOrder",
                    name: "我的订单",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/myOrder")
                },
                {
                    path: "myQuote",
                    name: "我的报价",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/myQuote")
                },
                {
                    path: "myStore",
                    name: "我的收藏",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/myStore")
                },
                {
                    path: "addressManage",
                    name: "地址管理",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/addressManage")
                },
                {
                    path: "invoiceManage",
                    name: "发票管理",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/invoiceManage")
                },
                {
                    path: "myMessage",
                    name: "个人信息",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/myMessage")
                },
                {
                    path: "myCenter",
                    name: "个人信息中心",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/messageCenter"),
                },
                {
                    path: "userSecurity",
                    name: "用户安全",
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/accountSecurity")
                },
                {
                    path: "messageDetail",
                    name: '消息详情',
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/messageDetails")
                }, {
                    path: "changePassword",
                    name: '修改密码',
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/changePassword")
                }, {
                    path: "changePhone",
                    name: '修改手机号',
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/changePhone")
                }, {
                    path: "changeEmail",
                    name: '修改邮箱',
                    component: () =>
                        import ("../views/page/shop/userCenterChildren/changeEmail")
                },
            ]
        }, {
            name: "底部tab",
            path: '/footer/guide',
            component: () =>
                import ('../views/page/guide/guide'),
            children: [{
                    name: "底部关于我们",
                    path: "aboutUs",
                    component: () =>
                        import ("../views/page/guide/guideChildren/aboutUs.vue")
                },
                {
                    name: "如何注册",
                    path: "howToRegister",
                    component: () =>
                        import ("../views/page/guide/guideChildren/howToRegister.vue")
                },
                {
                    name: "卖家入门",
                    path: "sellerEntry",
                    component: () =>
                        import ("../views/page/guide/guideChildren/sellerEntry.vue")
                },
                {
                    name: "买家入门",
                    path: "buyerEntry",
                    component: () =>
                        import ("../views/page/guide/guideChildren/buyerEntry.vue")
                },
                {
                    name: "询价系统",
                    path: "inquirySystem",
                    component: () =>
                        import ("../views/page/guide/guideChildren/inquirySystem.vue")
                },
                {
                    name: "快速下单",
                    path: "quickOrder",
                    component: () =>
                        import ("../views/page/guide/guideChildren/quickOrder.vue")
                },
                {
                    name: "如何采购",
                    path: "howToPurchase",
                    component: () =>
                        import ("../views/page/guide/guideChildren/howToPurchase.vue")
                },
                {
                    name: "投诉维权",
                    path: "complaints",
                    component: () =>
                        import ("../views/page/guide/guideChildren/complaints.vue")
                },
                {
                    name: "开通店铺",
                    path: "howToOpenShop",
                    component: () =>
                        import ("../views/page/guide/guideChildren/howToOpenShop.vue")
                },
                {
                    name: "营销中心",
                    path: "marketingCenter",
                    component: () =>
                        import ("../views/page/guide/guideChildren/marketingCenter.vue")
                },
                {
                    name: "发布新品",
                    path: "releaseNewProducts",
                    component: () =>
                        import ("../views/page/guide/guideChildren/releaseNewProducts.vue")
                },
                {
                    name: "商家服务",
                    path: "merchantService",
                    component: () =>
                        import ("../views/page/guide/guideChildren/merchantService.vue")
                },
                {
                    name: "支付方式",
                    path: "paymentMethod",
                    component: () =>
                        import ("../views/page/guide/guideChildren/paymentMethod.vue")
                },
                {
                    name: "交易维权",
                    path: "tradingRights",
                    component: () =>
                        import ("../views/page/guide/guideChildren/tradingRights.vue")
                },
                {
                    name: "客服中心",
                    path: "customerService",
                    component: () =>
                        import ("../views/page/guide/guideChildren/customerService.vue")
                },
                {
                    name: "网来商城规则",
                    path: "shopRules",
                    component: () =>
                        import ("../views/page/guide/guideChildren/shopRules.vue")
                },
            ]
        }

    ]
});

router.beforeEach((to, from, next) => {

    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    let isLogin = JSON.parse(window.localStorage["vuex-along"])["vuex-along"];
    if (window.localStorage["vuex-along"] == "{}" || JSON.parse(window.localStorage["vuex-along"])["vuex-along"].isLogin == false) {
        isLogin = false;
    } else {
        isLogin = true;
    }
    if (to.meta.requireAuth) {
        if (!isLogin) {
            router.push({ name: "login" });
        }
    }
    next()
})

export default router;