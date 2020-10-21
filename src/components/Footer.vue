<template>
  <div :class="'footer--' + theme" class="footer">
    <div
        v-bind:class="'footer__item--Rajdhani-' + theme + '-mode'"
        class="footer__item"
    >
      Playoffnations
    </div>
    <div
        v-bind:class="'footer__item--Rajdhani-' + theme + '-mode'"
        class="footer__item"
    >
      Terms and Conditions
    </div>
    <div
        v-bind:class="'footer__item--Rajdhani-' + theme + '-mode'"
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

<style scoped>
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

.footer__item--Rajdhani-dark-mode {
  font-family: Rajdhani, sans-serif;
  color: #bab9bb;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2rem;
}

.footer__item--Rajdhani-light-mode {
  font-family: Rajdhani, sans-serif;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2rem;
}
</style>