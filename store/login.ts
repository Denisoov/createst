import { ActionTree, MutationTree, GetterTree } from 'vuex'

import { CurrentForm, AuthState } from '@/types/store/login'
import { FullState } from '~/types'
import api from "~/plugins/apiFactory";

const defaultState: AuthState = {
  currentForm: CurrentForm.SIGN_IN,
  loginForm: {
    first_name: '',
    second_name: '',
    patronymic: '',
    username: '',
    password: '',
  },
  signInForm: {
    username: '',
    password: '',
  },
}

export const state = (): AuthState => defaultState

export const mutations: MutationTree<AuthState> = {
  SET_LOGIN_FORM: (state, first_name: string) => {
    state.loginForm.first_name = first_name
  },
  SET_CURRENT_FORM: (state, currentForm: CurrentForm) => {
    state.currentForm = currentForm
  },
  RESET_LOGIN_DATA: (state) => {
    Object.keys(state.loginForm).forEach((key): void => {
      state.loginForm[key] = ''
    })
  },
  RESET_SIGN_IN_DATA: (state) => {
    Object.keys(state.signInForm).forEach((key): void => {
      state.loginForm[key] = ''
    })
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
  SET_USERNAME_LOGIN: (state, username: String) => {
    state.loginForm.username = username
  },
  SET_PASSWORD: (state, password: String) => {
    state.loginForm.password = password
  },
  // для формы авторизации
  SET_USERNAME_SIGNIN: (state, username: String) => {
    state.signInForm.username = username
  },
  SET_PASSWORD_SIGNIN: (state, password: String) => {
    state.signInForm.password = password
  },
}

export const actions: ActionTree<AuthState, FullState> = {
  changeCurrentForm({ commit }, formName: CurrentForm) {
    commit('SET_CURRENT_FORM', formName)

    if (formName === CurrentForm.SIGN_IN) {
      commit('RESET_LOGIN_DATA', defaultState.loginForm)
    } else {
      commit('RESET_SIGN_IN_DATA', defaultState.signInForm)
    }
  },
  clearState({ commit }) {
    commit('RESET_LOGIN_DATA')
    commit('RESET_SIGN_IN_DATA')
  },
}

export const getters: GetterTree<AuthState, FullState> = {
  currentForm: ({ currentForm }) => {
    return currentForm
  },
}
