<template>
  <div class="banner">
    <img class="banner__image" src="../assets/banner-partners.jpg">
    <iframe class="banner__video" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/a2TyhQ8vQqw?autoplay=1&loop=1&playlist=a2TyhQ8vQqw&mute=1" frameborder="0">
    </iframe>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BannerPartner",
  props: {
    theme: String,
  },
});
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.banner__image {
  height: 100%;
  flex-grow: 1;
  justify-self: center;
  align-self: center;
}

.banner__video {
  flex-grow: 0.5;
}
</style>