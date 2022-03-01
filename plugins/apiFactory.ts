import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'


import Auth from '~/api/auth'

declare module 'vuex/types/index' {
  interface Store<S> {
    $apiFactory: NuxtAxiosInstance
  }
}

const apiFactory: Plugin = ({ $axios }, inject): void => {
  const API_URL = 'http://btz:8080/'
  $axios.setBaseURL(API_URL)

  const apiFactories = {
    auth: new Auth($axios)
  }

  inject('apiFactory', apiFactories)
}

export default apiFactory
