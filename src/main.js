import Vue from 'vue'
import DatatableFactory from 'vuejs-datatable'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store'

Vue.use(BootstrapVue)
Vue.use(DatatableFactory)

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
