<template>
  <header>
    <Banner :theme="theme"></Banner>
    <NavigationBar :theme="theme" :brand="brand"></NavigationBar>
    <TournamentInformation :theme="theme"></TournamentInformation>
<!--    <BannerPartner :theme="theme"></BannerPartner>-->
  </header>
</template>

<script lang="js">
import { defineComponent } from "vue";
import NavigationBar from "./HeaderNavigationBar.vue";
import Banner from "./HeaderBanner.vue";
import TournamentInformation from "./TournamentInformation.vue";
import BannerPartner from "./BannerPartner.vue";
export default defineComponent({
  name: "Header",
  components: {
    Banner,
    NavigationBar,
    TournamentInformation,
    BannerPartner
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
  display: block;
}
</style>