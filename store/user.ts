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

export const mutations: MutationTree<UserState> = {}
