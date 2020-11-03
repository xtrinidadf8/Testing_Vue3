<template>
  <div class="banner">
    <video loop autoplay muted :class="['banner__video', `banner__video--${theme}-mode`]">
      <source src="../assets/header-video.mp4" type="video/mp4">
      <track label="Spanish" kind="captions" srclang="es" src="">
    </video>
    <div class="banner__logo__wrapper">
      <a class="banner__logo" target="_blank" rel="noopener noreferrer" href="https://www.playoffnations.com/">
        <img class="banner__logo__image" alt="Playoffnations" src="../assets/playoffnations-logo.png"/>
      </a>
    </div>
    <div :class="['banner__toggle__theme']">
      <SwitchButton> {{theme}} </SwitchButton>
    </div>
  </div>
</template>

<script>
import SwitchButton from './SwitchButton.vue'
import theme from '../theme.js'
export default {
  name: 'HeaderBanner',
  components: {
    SwitchButton
  },
  setup() {
    return {
      theme
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 40vw;
  max-height: 27rem;
  min-height: 12rem;
  margin-bottom: 1.5rem;
}

.banner__logo__wrapper {
  position: absolute;
  top: 0;
  height: 49%;
  max-height: 70%;
  min-width: 6rem;
  min-height: 8rem;
}

.banner__logo {
  cursor: pointer;
  position: relative;
  top: 4rem;
  left: 1.5rem;
}

.banner__logo__image {
  flex-grow: 1;
  display: block;
  height: 100%;
}

.banner__video {
  width: 100%;
  height: 100%;
  pointer-events: none;
  padding-bottom: 0.5rem;

  &--dark-mode {
    background: linear-gradient(0deg, #1c102600 0%, rgba(0, 0, 0, 0.96) 52%)
  }
  &--light-mode {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 75%);
  }
}

.banner__toggle__theme {
  position: fixed;
  top: 13vmin;
  right: 0;
}
</style>