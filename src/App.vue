<template>
  <div id="app" :class="[`app--${theme}`, 'app']">
    <Header :brand="brand"></Header>
    <PlayoffnationsChallenge></PlayoffnationsChallenge>
    <Partners></Partners>
    <Footer></Footer>
  </div>
</template>

<script>
import PlayoffnationsChallenge from './components/PlayoffnationsChallenge.vue'
import Header from './components/Header.vue'
import Partners from "./components/Partners.vue";
import Footer from './components/Footer.vue'
import theme from './theme.js'

export default {
  components: {
    PlayoffnationsChallenge,
    Header,
    Partners,
    Footer,
  },
  setup () {
    return {
      theme,
      brand: 'Playoffnations'
    }
  },
}
</script>

<style>
*, ::after, ::before {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
}

html,
body {
  margin: 0;
  padding: 0;
}

.app--dark {
  /*background-image: url("https://overworld.qodeinteractive.com/wp-content/uploads/2019/11/h3-page-bg-img.jpg");*/
  /*background-image: url("assets/big_dark_mode_background.jpg");*/
  background-repeat: repeat;
  background-position: 0 0;
  background-color: #1a1818;
}

.app--light {
  /*background-image: url("assets/big_light_mode_background.jpg");*/
  background-repeat: repeat;
  background-position: 0 0;
}
</style>
