import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index';
import 'iview/dist/styles/iview.css';
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
    Upload
} from "ant-design-vue";
import "swiper/dist/css/swiper.css";
import {
    DatePicker
} from 'element-ui';
Vue.config.productionTip = false;

Vue.use(BackTop).use(Modal).use(Tabs).use(Select).use(Input).use(Button).use(Cascader).use(DatePicker).use(breadcrumb).use(Checkbox).use(Radio).use(Layout).use(Menu).use(Table).use(Pagination).use(LocaleProvider).use(Tooltip).use(Rate).use(Icon).use(Upload)
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})