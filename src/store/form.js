
////////
import {jwt} from "~/services/jwt.service";

export const state = () => ({
  formData: []
})


export const getters = {
  getTokenValue (state) {
    return !!jwt.getToken();
  },
}

export const actions = {

  addFormData({ commit }, formData) {
    commit('addFormData', formData);
  },

  checkUser({ commit, state }, formData) {
    if(!!state.formData.find(user => user.name === formData.name || user.email === formData.email)){
      jwt.setToken(formData.name);
      let token = jwt.getToken();
      this.$router.push('/page/form');
      //window.location.reload();
      return {'message' : 'succes'}
    }
    else{
      return {'message' : 'error'}
    }

  },
}

export const mutations = {
  addFormData(state, formData) {
    state.formData.push(formData);
  },
}

