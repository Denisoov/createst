// typescript.nuxtjs.org/cookbook/store.html#vanilla
import { ActionTree, MutationTree } from 'vuex'

import { FullState } from '@/types/index'
import { UserState } from '@/types/store/user'

const defaultState: UserState = {
  token: null,
  first_name: '',
  second_name: '',
  patronymic: '',
  username: '',
}

export const state = (): UserState => defaultState

export const mutations: MutationTree<UserState> = {
  SET_ENTRY_TOKEN: (state, token: String) => {
    state.token = token
  },
}

export const actions: ActionTree<UserState, FullState> = {
  async signIn({ commit, state }, dataSignIn) {
    try {
      const token = await this.$apiFactory.auth.signIn(dataSignIn)

      this.$cookies.set('token', token)

      commit('SET_ENTRY_TOKEN', token.data.token)
    }
    catch (err) {
      console.log(err)
    }
  },
}

