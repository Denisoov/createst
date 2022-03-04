import { Middleware } from '@nuxt/types'

const authRedirect: Middleware = ({ store, redirect }) => {
  const token = store.state.user.token

  if (!token) {
    redirect({name: 'login'})
  }
}

export default authRedirect
