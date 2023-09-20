import Vue from 'vue'
//import axios from 'axios';
//import jwt from "jsonwebtoken";

//var jwt = require('jsonwebtoken');

const API_URL = 'http://localhost:3000';
/*const ApiService = {
  init () {
    if(!Vue.axios) {
      Vue.use(VueAxios, axios)
      Vue.axios.defaults.baseURL = API_URL
    }
  },

  get (resource, id = '') {
    id = id ? `/${id}` : ''

    return Vue.axios
      .get(`${resource}${id}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  post (resource, params, headers = {}) {

    const post_params = new URLSearchParams();

    for (var param_name in params) {
      if (params.hasOwnProperty(param_name)) {
        post_params.append(param_name, params[param_name]);
      }
    }

    return Vue.axios({
      method: 'post',
      url: `${resource}`,
      data: post_params,
      headers: headers
    }).catch(function (error) {
      throw new Error(`[RWV] ApiService ${error}`)
    });
  }
}*/

//export default ApiService

export const UserService = {

  Login (data) {
    return fetch(API_URL + '/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    });
  },
  Register (data) {
    return fetch(API_URL + '/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      })
    });
  },

}


