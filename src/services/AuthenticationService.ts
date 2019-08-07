import Vue from 'vue'

export interface AuthenticationServiceState {
  authenticated: boolean
  authenticatedError: Error | null
}

export class AuthenticationService {
  public state = Vue.observable<AuthenticationServiceState>({
    authenticated: false,
    authenticatedError: null,
  })

  public login = (password: string) => {
    try {
      if (password !== 'password') {
        throw new Error('Incorrect password.')
      }

      this.state.authenticated = true
    } catch (e) {
      this.state.authenticatedError = e
    }
  }

}

export default new AuthenticationService()