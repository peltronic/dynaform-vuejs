import Vue from 'vue';
import Vuex from 'vuex';
import formbuilder from './modules/formbuilder';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        formbuilder
    }
});
