<template>
  <div class="banner">
    <video loop autoplay muted class="banner__video"
      :class="`banner__video--${theme}-mode`">
      <source src="../assets/header-video.mp4" type="video/mp4">
    </video>
    <div class="banner__logo__wrapper">
      <a class="banner__logo" target="_blank" rel="noopener noreferrer" href="https://www.playoffnations.com/">
        <img class="banner__logo__image"
             src="../assets/playoffnations-logo.png"
             alt="Playoffnations"
        />
      </a>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Banner",
  props: {
    theme: String,
  }
});
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 2rem;
  position: relative;
  height: 40vw;
  max-height: 25rem;
  min-height: 10rem;
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
  top: 1rem;
  left: 1rem;
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
  &--darl-mode {
    background: linear-gradient(0deg, #1c1026 0%, rgba(0, 0, 0, 0.96) 52%)
  }
  &--light-mode {
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(0 0 0 / 88%)  75%);
  }

}
</style>