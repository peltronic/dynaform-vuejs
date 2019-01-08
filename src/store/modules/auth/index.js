import axios from 'axios';

// NOTES:
//   ~ https://stackoverflow.com/questions/45523101/how-to-refer-laravel-csrf-field-inside-a-vue-template

const state = { 
    session_user: null,
}
const mutations = { 
    SET_SESSION_USER(state, payload) {
        state.session_user = payload;
    },
}
const actions = { 
    login ({ commit }, payload) {
        const url = '/login';
        //const url = '/api/v1/login';
        return axios.post(url, payload).then((response) => { 
            //console.log('login response: '+JSON.stringify(response));
            //localStorage.setItem("token", response.data.token); 
            //commit('SET_TOKEN', response.data.token);
            commit('SET_SESSION_USER', response.data.session_user);
            return response;
        }).then( (response) => {
            //axios.get('/api/bar/foo'); // dummy GET call to trigger laravel_token...
            axios.get('/dashboard'); // dummy GET call to trigger laravel_token...
            return response;
        }); 
    },
    register ({ commit }, payload) {
        const url = '/register';
        return axios.post(url, payload).then((response) => { 
            commit('SET_SESSION_USER', response.data.session_user);
            return response;
        }).then( (response) => {
            axios.get('/dashboard'); // dummy GET call to trigger laravel_token...
            return response;
        }); 
    }
}
const getters = { 
    sessionUsername(state) {
        return (null!==state.session_user) ? state.session_user.username : null;
    },
    isLoggedIn(state) {
        return state.session_user !== null;
    }
}

const authModule = { 
    state,
    mutations,
    actions,
    getters
}
export default authModule;
