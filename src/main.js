import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index';
// import { Menu } from 'ant-design-vue';
import {
    TreeSelect
} from 'vant';

// Vue.use(Menu);
Vue.use(TreeSelect);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})