<template>
  <header>
    <Banner :theme="theme"></Banner>
    <NavigationBar :theme="theme" :brand="brand"></NavigationBar>
  </header>
</template>

<script lang="js">
import { defineComponent } from "vue";
import NavigationBar from "./HeaderNavigationBar.vue";
import Banner from "./HeaderBanner.vue";
export default defineComponent({
  name: "Header",
  components: {
    Banner,
    NavigationBar
  },
  props: {
    theme: String,
    brand: String,
  },
  methods: {
    created: function () {
      console.log(this.theme);
    },
  },
});
</script>

<style scoped>
header {
  max-height: 25rem;
  display: block;
  padding: 1rem 0rem 0 3rem ;
}
</style>