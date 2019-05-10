import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index';
import vChatTitle from 'vue-wechat-title'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
import VueLazyload from 'vue-lazyload'
import {
    BackTop,
    Modal,
    Tabs,
    Select,
    Input,
    Button,
    Icon,
    breadcrumb,
    Cascader,
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
    Message
} from "ant-design-vue";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;


Vue.use(vChatTitle).use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
    lazyComponent: true
}).use(Share).use(BackTop).use(Modal).use(Tabs).use(Select).use(Input).use(Button).use(Icon).use(Upload).use(Cascader).use(DatePicker).use(breadcrumb).use(Checkbox).use(Radio).use(Layout).use(Menu).use(Table).use(Pagination).use(LocaleProvider).use(Tooltip).use(Rate).use(Anchor).use(Form).use(Skeleton).use(Affix);

Vue.prototype.$API_URL = env.API_HOST;
Vue.prototype.$message = Message
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})