<template>
  <div class="login-view">
    <form class="password-form form" @submit.prevent="submit">
      <img class="logo" src="../assets/logo.png" width="200" />
      <!-- <div class="instructions">
        Please enter your password to view this content.
      </div> -->
      <div class="field">
        <input placeholder="Enter password" class="input" type="password" v-model="password" />
      </div>
      <div class="field">
        <button class="button is-fullwidth">
          Enter
        </button>
      </div>
      
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import authentication from '../services/AuthenticationService'

@Component({

})
export default class LoginView extends Vue {
  public password: string = ''

  public submit () {
    authentication.login(this.password)
    this.password = ''
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  position: relative;
  min-height: 100vh;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-form {
  width: 100%;
  max-width: 300px;
}

.instructions {
  padding: 20px 0;
}

.logo {
  display: block;
  margin: 0 auto 30px auto;
}
</style>
