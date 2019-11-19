import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    admin: {
      pseudo: '',
      password: ''
    }
  },
  mutations: {
    SET_QUESTIONNAIRE(state, tab) {
      Vue.set(state, 'questions', tab)
    },
    SET_LOGIN(state, val) {
      Vue.set(state, 'admin', val )
    }
  },
  actions: {
    setQuestionnaire({commit, state}, tab) {
      let questions = state.questions
      questions = tab
      commit('SET_QUESTIONNAIRE', questions)
    },
    setLogin({commit, state}, pseudo, password) {
        let admin = state.admin
        admin.password = password
        admin.pseudo = pseudo
        commit('SET_LOGIN',admin)
    }
  },
  getters: {
    getQuestions: state => {
      return state.questions
    },
    getLogin: state => {
      return state.admin
    }
  },
  modules: {
  }
})
