import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index';
import vChatTitle from 'vue-wechat-title'
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
    Anchor,
    Form
} from "ant-design-vue";
import "swiper/dist/css/swiper.css";
import {
    DatePicker
} from 'element-ui';

Vue.config.productionTip = false;

Vue.use(vChatTitle).use(BackTop).use(Modal).use(Tabs).use(Select).use(Input).use(Button).use(Icon).use(Cascader).use(DatePicker).use(breadcrumb).use(Checkbox).use(Radio).use(Layout).use(Menu).use(Table).use(Pagination).use(LocaleProvider).use(Tooltip).use(Rate).use(Anchor).use(Form)

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})