<template>
  <div class="swiper-container recommend_tabs">
    <div class="swiper-wrapper">
      <div
        v-for="(item, i) in tabs"
        :key="`tabs-${i}`"
        class="swiper-slide"
        :class="i == nav_val ? 'active' : ''"
        @click="tabClick(i, item)"
      >
        {{ item }}
      </div>
      <slot name="btn"></slot>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    data() {
      return {
        nav_val: this.defaultValue
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true
      },
      defaultValue: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      const that = this;
      this.mySwiper = new Swiper(".swiper-container.recommend_tabs", {
        slidesPerView: "auto",
        // freeMode: true,
        direction: "horizontal",
        //slideToClickedSlide: true,
        //allowTouchMove: false,
        touchRatio: 0,
        on: {
          init: function() {
            // this.marginLeft = $(this.slides.eq(0)).css("margin-left");
            this.navSlideWidth = this.slides[0].clientWidth; //导航字数需要统一,每个导航宽度一致

            this.bar = this.$el.find(".bar");
            this.bar[0].style.width = this.navSlideWidth + "px";
            // bar.css("width", this.navSlideWidth);
            this.bar.transition(300);
            this.navSum = this.slides[this.slides.length - 1].offsetLeft; //最后一个slide的位置

            this.clientWidth = parseInt(this.$wrapperEl[0].clientWidth); //Nav的可视宽度

            // this.navWidth = this.navSlideWidth * this.slides.length;
            this.navWidth = 0;
            for (let i = 0; i < this.slides.length; i++) {
              this.navWidth += parseInt(this.slides[i].swiperSlideSize);
            }
          },
          touchStart: function() {
            console.log(this);
            this.update();
          },
          tap: function(e) {
            //alert();

            if (this.clickedIndex == undefined) return;
            // mySwiper.slideTo(this.clickIndex, 0);

            this.bar.transform(
              "translateX(" + this.slides[this.clickedIndex].offsetLeft + "px)"
            );
            this.bar[0].style.width =
              this.slides[this.clickedIndex].clientWidth + "px";

            //导航居中
            let navActiveSlideLeft = this.slides[this.clickedIndex].offsetLeft; //activeSlide距左边的距离
            //this.setTransition(300);
          }
        }
      });
    },
    methods: {
      tabClick(i, item) {
        this.nav_val = i;
        this.$emit("tabClick", i, item);
      }
    },
    beforeDestroy() {
      this.mySwiper.destroy(false);
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .recommend_tabs {
    height: 35px;
    margin-bottom: 24px;
    margin-top: 40px;
    position: relative;
    .swiper-wrapper {
      position: absolute;
      display: flex;
      justify-content: flex-start;
    }
    .swiper-slide {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      //font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      cursor: pointer;
      margin-right: 34px;
      border-radius: 16.5px;
      padding: 0 18px;
      &.active {
        //font-family: PingFangSC-Medium;
        font-size: 14px;
        font-weight: 600;
        color: $theme-color;
        // background: #fff;
      }
      &:hover {
        color: $theme-color;
      }
    }
    .bar {
      position: absolute;
      height: 35px;
      //width: 116px;
      border: 1px solid $theme-color;
      border-radius: 16.5px;
      pointer-events: none;
      background: rgba($color: #fff, $alpha: 1);
      z-index: -1;
    }
  }
</style>