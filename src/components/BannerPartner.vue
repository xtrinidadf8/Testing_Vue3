<template>
  <div class="banner">
    <a class="banner__image" href="">
      <img class="" alt="" src="../assets/banner-partners.jpg">
    </a>
    <iframe class="banner__video"
            allowfullscreen
            title=""
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/a2TyhQ8vQqw?loop=1&playlist=a2TyhQ8vQqw&mute=1"
            frameborder="0">
    </iframe>
  </div>
</template>

<script>
import theme from '../theme.js'

export default {
  name: 'BannerPartner',
  setup() {
    return {
      theme
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 2rem 0 2rem;
  flex-direction: row;
  height: auto;
}

.banner__image {
  flex-basis: 66%;
  flex-grow: 1;
  margin-right: 0.4rem;
  margin-bottom: 0.2rem;
  background: linear-gradient(0deg, #dd1a1a 0%, rgba(119, 30, 30, 0.96) 52%);

  & > img {
    max-width: 100%;
  }
}

.banner__video {
  margin-bottom: 0.2rem;
  flex-basis: 33%;
  width: 100%;
}
</style>