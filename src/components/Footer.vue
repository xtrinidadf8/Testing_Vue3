<template>
  <div :class="[`footer--${theme}`, 'footer']">
    <div :class="[`footer__item--${theme}-mode`, 'footer__item']">
      Playoffnations
    </div>
    <div :class="[`footer__item--${theme}-mode`, 'footer__item']">
      Terms and Conditions
    </div>
    <div :class="[`footer__item--${theme}-mode`, 'footer__item']">
      Social Media
    </div>
  </div>
</template>

<script>
import theme from '../theme.js'

export default {
  name: 'Footer',
  setup() {
    return {
     theme
    }
  },
}
</script>

<style lang="scss" scoped>
@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 2rem;
}

.footer {
  height: 4rem;
  display: flex;
}

.footer--dark {
  background-color: #060606e8;
}

.footer--light {
  background-color: #d7d5d5;
}

.footer__item {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}

.footer__item {
  @include Rajdhani;

  &--dark-mode {
    color: #bab9bb;
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.75);
  }
}

</style>