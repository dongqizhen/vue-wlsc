import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index';
import {
    BackTop,
    Modal,
    Tabs,
    Select,
    Input,
    Button,
    Icon,
    Cascader
} from "ant-design-vue";
import "swiper/dist/css/swiper.css";
// import {
//     DatePicker
// } from 'element-ui';


// import { Menu } from 'ant-design-vue';
import {
    TreeSelect
} from 'vant';
Vue.config.productionTip = false;
import {
    DatePicker
} from "element-ui";
Vue.use(BackTop).use(Modal).use(Tabs).use(Select).use(Input).use(Button).use(Icon).use(Cascader).use(DatePicker)

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})