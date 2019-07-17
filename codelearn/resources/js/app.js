import Vue from 'vue'
import Landing from './components/header.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

const app = new Vue({
    el: '#app',
    components: {
        Landing,
    }
});
