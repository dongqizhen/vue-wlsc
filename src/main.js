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
    Icon
} from "ant-design-vue";
import "swiper/dist/css/swiper.css";

// import { Menu } from 'ant-design-vue';
import {
    TreeSelect
} from 'vant';
Vue.config.productionTip = false;

Vue.use(BackTop).use(Modal).use(Tabs).use(Select).use(Input).use(Button).use(Icon)

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})