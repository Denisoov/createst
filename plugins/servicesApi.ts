import { Plugin } from '@nuxt/types'

const apiService: Plugin = ({ $axios }, inject): void => {
  const apiService = $axios.create()

  inject('apiService', apiService)
}

export default apiService
