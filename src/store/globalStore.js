import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('store', {
  state: () => ({login: null, isAuthed: false}),
  getters: {
    getLogin: (state) => state.login,
    getIsAuthed: (state) => state.isAuthed
  },
  actions: {
    setIsAuthed(value) {
      this.isAuthed = value
    },
    setLogin(login) {
      this.login = login
    }
  }
})
