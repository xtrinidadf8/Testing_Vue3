<template>
  <header>
    <HeaderBanner></HeaderBanner>
    <NavigationBar :brand="brand"></NavigationBar>
    <TournamentInformation></TournamentInformation>
        <BannerPartner></BannerPartner>
  </header>
</template>

<script>
import NavigationBar from './HeaderNavigationBar.vue'
import HeaderBanner from './HeaderBanner.vue'
import TournamentInformation from './TournamentInformation.vue'
import BannerPartner from './BannerPartner.vue'
import theme from '../theme.js'

export default {
  name: 'Header',
  components: {
    HeaderBanner,
    NavigationBar,
    TournamentInformation,
    BannerPartner
  },
  props: {
    brand: String,
  },
  setup() {
    return {
      theme
    }
  },
}
</script>

<style scoped>
header {
  display: block;
}
</style>