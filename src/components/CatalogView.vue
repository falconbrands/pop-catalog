<template>
  <div>
    <header class="header">
      [FALCON-LOGO]
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
import Rellax from 'rellax'

@Component({
  components: {
    CatalogItem,
  }
})
export default class CatalogView extends Vue {
  public catalog = content.catalog

  mounted () {
    Vue.nextTick(() => new Rellax())
  }

}
</script>

<style lang="scss" scope>
.header {
  position: absolute;
  width: 100%;
  padding: 20px;
  text-align: center;
}
</style>
