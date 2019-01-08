import axios from 'axios';

// NOTES:
//   ~ 
//

const state = {
    //session_user: null,
    formcomponents: [],
}

const mutations = {
    UPDATE_FORMCOMPONENTS (state, payload) {
        state.formcomponents = payload;
    }
}

const actions = {
    /*
    getFormcomponents({ commit }, take) {
        return [1,5,7,9];
    },
    */
    getFormcomponents({ commit }, take) {
        //const url = '/api/formcomponents.json?take='+take;
        const url = '/api/formcomponents.json';
        return axios.get(url).then( (response) => {
            commit('UPDATE_FORMCOMPONENTS', response.data);
            return response;
        });
    },
}

const getters = {
    formcomponents: state => state.formcomponents,
}

const formbuilderModule = { 
    state,
    mutations,
    actions,
    getters
}

export default formbuilderModule;
