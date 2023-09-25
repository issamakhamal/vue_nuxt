const storage = function () {
  return typeof localStorage != 'undefined' ? localStorage : {}
}

export const jwt = {
  getToken() {
      return storage().token;

  },

  setToken(data){

    storage().token = this.token();
  },

  logout() {
    storage().token = ""
  },
  isConnected() {
    return !!storage().token

  },

  rand() {
    return Math.random().toString(36).substr(2); // remove `0.`
  },

  token() {
    return this.rand() + this.rand() + this.rand() + "-" + this.rand() + this.rand() + this.rand(); // to make it longer
  },

}

