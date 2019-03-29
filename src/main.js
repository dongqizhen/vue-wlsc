import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index'
//import { Carousel } from 'ant-design-vue'



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