<template>
  <nav :class="`navbar navbar--${theme}`">
  <div :class="`navbar__naming--${theme}-mode`" class="navbar__naming">
    {{brandUppercase}} CHALLENGE
  </div>
  <div class="navbar__links">
    <a :class="`navbar__links__link--${theme}-mode`" class="navbar__links__link" v-for="link in links">
      <span class="navbar__links__link__text"> {{link}} </span>
    </a>
  </div>
  </nav>
</template>

<script lang="js">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationBar",
  props: {
    theme: String,
    brand: String,
  },
  setup() {
    const links = ["Classificacíon", "Premios", "Clips", "Reglas"];
    return {
      links,
    }
  },
  computed: {
    brandUppercase() {
      return this.brand.toUpperCase();
    }
  }
});
</script>

<style lang="scss" scoped>
@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2rem;
}
.navbar {
  display: flex;
  min-height: 7rem;
  max-height: 10rem;
  justify-content: center;
}

.navbar--dark {
  background-color: #1b0f23;
}

.navbar--light {
  background-color: #e9e9e9;
}
.navbar__naming {
  @include Rajdhani;
  font-size: 3rem;
  line-height: 3rem;
  flex-basis: 5rem;
  flex-grow: 0.75;
  display: flex;
  align-items: center;
  &--dark-mode {
    color: #bab9bb;
  }
  &--light-mode {
    color: rgba(0, 0, 0, 0.65);
  }
}

.navbar__links {
  flex-grow: 1;
  display: flex;
}
.navbar__links__link {
  @include Rajdhani;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0;
  width: 0;

  &--dark-mode {
    color: #bab9bb;
  }
  &--light-mode {
    color: rgba(0, 0, 0, 0.65);
  }
}

.navbar__links__link__text::after {
  content: "";
  width: 0;
  height: 0.1rem;
  display: block;
  background: #bab9bb;
  transition: 300ms;
}

.navbar__links__link__text:hover::after {
  width: 100%;
}
</style>