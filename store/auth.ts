import { ActionTree, MutationTree } from 'vuex'

import { 
    CurrentForm,
    AuthState
} from '@/types/store/auth'

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
    }
}
export const actions: ActionTree<AuthState> = {
    changeCurrentForm({ commit }, formName: CurrentForm) {
        commit('SET_CURRENT_FORM', formName)
    }
}  