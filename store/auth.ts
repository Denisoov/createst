import { ActionTree, MutationTree, GetterTree } from 'vuex'

import { 
    CurrentForm,
    AuthState
} from '@/types/store/auth'
import { FullState } from '~/types'

const defaultState: AuthState = {
  currentForm: CurrentForm.SIGN_IN,
  loginForm: {
    first_name: '',
    second_name: '',
    patronymic: '',
    username: '',
    password: '' 
  },
  signInForm: {
    username: '',
    password: ''
  }
}

export const state = (): AuthState => defaultState

export const mutations: MutationTree<AuthState> = {
    SET_LOGIN_FORM: (state, first_name: string) => {
        state.loginForm.first_name = first_name
    },
    SET_CURRENT_FORM: (state, currentForm: CurrentForm) => {
        state.currentForm = currentForm
    },
    SET_SECOND_NAME: (state, secondName: String) => {
      state.loginForm.second_name = secondName
    },
    SET_FIRST_NAME: (state, firstName: String) => {
      state.loginForm.first_name = firstName
    },
    SET_PATRONYMIC: (state, patronymic: String) => {
      state.loginForm.patronymic = patronymic
    },
    SET_USERNAME: (state, username: String) => {
      state.loginForm.username = username
    },
    SET_PASSWORD: (state, password: String) => {
      state.loginForm.password = password
    },
}

export const actions: ActionTree<AuthState, FullState> = {
    changeCurrentForm({ commit }, formName: CurrentForm) {
        commit('SET_CURRENT_FORM', formName)
    }
}  

export const getters: GetterTree<AuthState, FullState> = {
  currentForm: ({ currentForm }) => {
    return currentForm
  }
}  