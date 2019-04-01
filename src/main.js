import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index'
//import { Tabs } from 'ant-design-vue'
import {
    BackTop
} from "ant-design-vue";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;

// Vue.use(Tabs)
Vue.use(BackTop)
    //console.log(Swiper)
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})