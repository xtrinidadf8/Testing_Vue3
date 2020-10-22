<template>
  <div class="banner">
    <a class="banner__logo">
      <img class="banner__logo__image"
           src="https://www.playoffnations.com/wp-content/uploads/2020/03/1584888171829_POFFN_logo.png"
           alt="Playoffnations"
      />
    </a>
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

<style scoped>
.banner {
  min-height: 15rem;
  max-height: 20rem;
  background-image: url("../assets/header-banner.jpg");
  background-size: cover;
  background-position: 0 -0.5rem;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
  margin-right: 3rem;
}
.banner__logo {
  display: flex;
  padding: 0.1rem;
  align-content: center;
  min-width: 3rem;
  max-width: 10rem;
}

.banner__logo__image {
  flex-grow: 1;
  height: 50%;
}
</style>