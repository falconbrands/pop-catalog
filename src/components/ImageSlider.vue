<template>
  <div class="image-slider">
    <div ref="container" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, $index) in images" :key="$index">
          <img :data-src="image" class="swiper-lazy">
        </div> 
      </div>
    </div>
    <div class="pagination" v-if="count > 1">
      <div class="pagination-item"
          :class="getPaginationClass(i - 1)" 
          @click="go(i - 1)"
          v-for="i in count"
          :key="i">
      </div>
      <!-- pagination {{ count }} {{ index }} -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import Swiper from 'swiper'

@Component({

})
export default class ImageSlider extends Vue {
  public $refs!: {
    container: HTMLElement
  }
  public count: number = 0
  public index: number = 0
  public slider!: Swiper
  
  @Prop(Array) images!: string[]

  public go (index: number) {
    this.slider.slideTo(index)
  }

  public getPaginationClass (index: number) {
    return {
      'is-active': this.index === index
    }
  }

  async mounted () {
    Vue.nextTick(() => {
      const slider = new Swiper(this.$refs.container, {
        on: {
          init: () => {
            setTimeout(() => {
               this.count = slider.slides.length
              this.index = slider.realIndex
            }, 200)
            // this.count = slider.slides.length
            // this.index = slider.realIndex
            // console.log(this)
          },
          slideChange: () => {
            this.count = slider.slides.length
            this.index = slider.realIndex
          },
          lazyImageReady: () => {
            slider.update()
          }
        },
        autoHeight: true,
        watchOverflow: true,
        preloadImages: false,
        pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
    // Enable lazy loading
    // lazy: true,
    lazy: {
    loadPrevNext: true,
  }
      })

      this.slider = slider
    })

    
    
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  display: block;
}

.pagination {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.pagination-item {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #bbb;
  margin: 0 5px;
  transition: all 0.3s;
  cursor: pointer;

  &.is-active {
    background: #fff;
  }
}
</style>
