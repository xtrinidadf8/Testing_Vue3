<template>
  <div :class="'footer--' + theme" class="footer">
    <div
        :class="`footer__item--${theme}-mode`"
        class="footer__item"
    >
      Playoffnations
    </div>
    <div
        :class="`footer__item--${theme}-mode`"
        class="footer__item"
    >
      Terms and Conditions
    </div>
    <div
        :class="`footer__item--${theme}-mode`"
        class="footer__item"
    >
      Social Media
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  props: {
    theme: String,
  },
});
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
  background-color: #1b0f23;
}

.footer--light {
  background-color: #e9e9e9;
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