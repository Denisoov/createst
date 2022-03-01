import { Middleware } from '@nuxt/types'

const authRedirect: Middleware = ({ store, redirect, route }) => {
  const token = store.state.user.token

  if (!token) {
    redirect('/login')
  }
}

export default authRedirect
