
////////
export const state = () => ({
  formData: []
})
export const actions = {

  addFormData({ commit }, formData) {
    commit('addFormData', formData);
  },

}

export const mutations = {
  addFormData(state, formData) {
    state.formData.push(formData);
  },
}

