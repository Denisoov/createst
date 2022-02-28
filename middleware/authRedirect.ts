import { Middleware } from '@nuxt/types'

const authRedirect: Middleware = ({ store, redirect, route }) => {
  console.log('i am redirecty')
}

export default authRedirect
