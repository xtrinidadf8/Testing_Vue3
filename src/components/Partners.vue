<template>
  <div :class="[`partners--${theme}-mode`, 'partners']">
    Partners Here
  </div>
</template>

<script>
import theme from "../theme";

export default {
  name: "Partners",
  setup(){
    return {
      theme
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin Rajdhani {
    font-family: Rajdhani, sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .partners {
    @include Rajdhani;
    text-align: center;
    height: 15rem;

    &--dark-mode {
      color: #bab9bb;
      background-color: #292d29;
    }

    &--light-mode {
      color: rgba(0, 0, 0, 0.7);
      background-color: #f0f0f0;
    }
  }
</style>