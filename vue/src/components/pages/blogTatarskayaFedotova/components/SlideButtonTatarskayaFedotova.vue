<template>
  <div class="slider-container">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="{ active: currentSlide === index}"
      class="slider-container__slider-circle"
      @click="() => { currentSlide !== index && changeSlide(index) }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['slides', 'currentSlide'],
  methods: {
    changeSlide (index) {
      this.$emit('changeSlideIndex', index);
    }
  }
};
</script>

<style lang="less" scoped>
.slider-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__slider-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    background-color: lightgrey;
    transition: background-color 0.3s;

    &.active {
      background-color: white;
    }
  }
}
</style>
