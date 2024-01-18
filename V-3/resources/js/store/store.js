import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state:{
        //variables
        token: localStorage.getItem('token') || 0
    },

    mutations:{
        //update variable value
        UPDATE_TOKEN:function(state, payload){
            state.token = payload
        },

    },

    actions:{
        // action to be performed
        setToken: function(context,payload){
            localStorage.setItem('token',payload);
            context.commit('UPDATE_TOKEN', payload)
        },
        removeToken: function(aaa, bbb){
            localStorage.removeItem('token')
            aaa.commit('UPDATE_TOKEN',0)
        },

    },

    getters:{
        // get state variable value
        getToken: function(state){
            return state.token
        }
    }
})

export default store;
