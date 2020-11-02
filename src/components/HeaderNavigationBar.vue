<template>
  <nav :class="`navbar navbar--${theme}`">
    <div :class="[`navbar__naming--${theme}-mode`, 'navbar__naming']">
      {{ brandUppercase }} CHALLENGE
    </div>
    <div class="navbar__links">
      <template v-for="(link, index) in links">
        <a :class="[`navbar__links__link--${theme}-mode`, 'navbar__links__link', 'navbar__links__link--lateral-margin']"
           :key="index">
          <span class="navbar__links__link__text"> {{ link }} </span>
        </a>
      </template>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'NavigationBar',
  props: {
    theme: String,
    brand: String,
  },
  setup (props) {
    const links = ['Classificacíon', 'Premios', 'Clips', 'Reglas']

    const brandUppercase = computed(() => {
      const brand = props.brand ?? ''
      return brand.toUpperCase()
    })

    return {
      links,
      brandUppercase
    }
  }
}
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
  flex-wrap: wrap;
}

.navbar--dark {
  background-color: #1b0f23;
}

.navbar__naming {
  @include Rajdhani;
  margin-left: 1rem;
  font-size: 5vmin;
  line-height: 6vmin;
  flex-basis: 5rem;
  flex-grow: 0.75;
  display: flex;
  align-items: center;

  &--dark-mode {
    color: #bab9bb;
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.85);
  }
}

.navbar__links {
  margin-top: 2rem;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
}

.navbar__links__link {
  @include Rajdhani;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0;

  &--dark-mode {
    color: #bab9bb;
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.8);
  }

  &--lateral-margin {
    margin: 0 1rem 0 1rem;
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