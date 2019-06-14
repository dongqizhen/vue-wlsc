import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index';
import vChatTitle from 'vue-wechat-title'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
import VueLazyload from 'vue-lazyload'
import NoData from './components/common/nodata'
import loading from './components/common/loading'
import VueStar from 'vue-star'
import animated from 'animate.css'
import {
    BackTop,
    Modal,
    Tabs,
    Input,
    Button,
    Icon,
    breadcrumb,
    Checkbox,
    Radio,
    Layout,
    Menu,
    Table,
    Pagination,
    LocaleProvider,
    Tooltip,
    Rate,
    Upload,
    Anchor,
    Form,
    DatePicker,
    Skeleton,
    Affix,
    Message,
    Notification,
    Steps
} from "ant-design-vue";
import "swiper/dist/css/swiper.css";
import {
    Stepper
} from 'vant';
import 'vant/lib/index.css';
import {
    Option,
    Select,
    Cascader
} from 'element-ui'
Vue.config.productionTip = false;

Vue.use(vChatTitle).use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
    lazyComponent: true
}).use(animated).use(Share).use(BackTop).use(Modal).use(Tabs).use(Select).use(Input).use(Button).use(Icon).use(Upload).use(Cascader).use(DatePicker).use(breadcrumb).use(Checkbox).use(Radio).use(Layout).use(Menu).use(Table).use(Pagination).use(LocaleProvider).use(Tooltip).use(Rate).use(Anchor).use(Form).use(Skeleton).use(Affix).use(Steps).use(Option).use(Stepper);

let userid = '';
if (window.localStorage["vuex-along"] != "{}") {
    userid = JSON.parse(window.localStorage["vuex-along"])['vuex-along'].userInfo.id
}

Vue.prototype.$API_URL = env.API_HOST;
Vue.prototype.$message = Message
Vue.prototype.$notification = Notification
Vue.prototype.$userid = userid
Vue.prototype.$getLocalStorage = (key = 'vuex-along', val = 'vuex-along') => {
    return JSON.parse(window.localStorage[key])[val]
}


Vue.component('no-data', NoData)
Vue.component('loading', loading)
Vue.component('VueStar', VueStar)

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})