import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ $axios, store }, inject): void => {
  const API_URL = 'http://btz:8080/'
  const token = store.state.token

  $axios.setBaseURL(API_URL)
  $axios.setToken(token, 'Bearer')
}

export default axiosPlugin
