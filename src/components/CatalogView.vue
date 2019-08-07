<template>
  <div>
    <header class="header">
      <img src="../assets/logo.png" width="200"/>
    </header>
    <div class="items">
      <catalog-item v-for="(item, $index) in catalog" :item="item" :index="$index" :key="$index" v-once/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import CatalogItem from './CatalogItem.vue'
import content from '../services/ContentService'
// import Rellax from 'rellax'

@Component({
  components: {
    CatalogItem,
  }
})
export default class CatalogView extends Vue {
  public catalog = content.catalog

  mounted () {
    // Vue.nextTick(() => new Rellax())
  }

}
</script>

<style lang="scss" scope>
.header {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  img {
    display: block;
  }
}

.items {
  max-width: 1280px;
  margin: 0px auto;
  padding: 0 30px;
}
</style>
