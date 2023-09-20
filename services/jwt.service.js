const storage = function () {
  return typeof localStorage != 'undefined' ? localStorage : {}
}

export default {
  getToken() {
    if (storage().token) {
      try {
        return JSON.parse(storage().token)
      } catch (e) {
        this.logout()
        return {}
      }
    }
    else {
      return {}
    }

  },

  setCurrentUser(user) {
    storage().token = JSON.stringify(token)
  },
  logout() {
    storage().token = ""
  },
  isConnected() {
    return !!storage().token

  }
}
