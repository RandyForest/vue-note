import Vue from 'vue';
import App from './table-comp';

new Vue({
    el: "#app",
    data() {
        return {
            list: [[3, 2, 3], [3, 2, 1]]
        };
    },
    template: '<App/>',
    components: { App }
});