<template>
  <div id="app">
    <component :is="view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LoginView from './components/LoginView.vue'
import CatalogView from './components/CatalogView.vue'
import authentication from './services/AuthenticationService'

@Component
export default class App extends Vue {

  get view () {
    return authentication.state.authenticated ? CatalogView : LoginView
  }

}
</script>

<style lang="scss">
$primary: #ce9951;

@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/base/_all.sass";
@import "bulma/sass/form/_all.sass";
@import "bulma/sass/elements/button.sass";
// @import "swiper/dist/css/swiper.css";

body {
  background: #dcdcda;
  line-height: 1.6;
}

.label {
  font-weight: 900;
  font-size: 1.1em;
  text-transform: uppercase;
  padding-bottom: 5px;
  letter-spacing: .5px;
  color: #8b724b;
}

.title {
  font-weight: 900;
  line-height: .9;
  text-transform: uppercase;
  letter-spacing: -3px;
  font-size: 3em;
  padding-bottom: 25px;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 2.6em;
    letter-spacing: -2px;
  }
}
</style>
