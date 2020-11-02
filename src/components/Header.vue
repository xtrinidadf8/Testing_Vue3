<template>
  <header>
    <HeaderBanner :theme="theme"></HeaderBanner>
    <NavigationBar :theme="theme" :brand="brand"></NavigationBar>
    <TournamentInformation :theme="theme"></TournamentInformation>
    <!--    <BannerPartner :theme="theme"></BannerPartner>-->
  </header>
</template>

<script>
import NavigationBar from './HeaderNavigationBar.vue'
import HeaderBanner from './HeaderBanner.vue'
import TournamentInformation from './TournamentInformation.vue'
import BannerPartner from './BannerPartner.vue'

export default {
  name: 'Header',
  components: {
    HeaderBanner,
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
      console.log(this.theme)
    },
  },
}
</script>

<style scoped>
header {
  display: block;
}
</style>