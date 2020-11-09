<template>
  <nav :class="`navbar navbar--${theme}`">
    <div :class="[`navbar__naming--${theme}-mode`, 'navbar__naming']">
      {{ brandUppercase }}
      CHALLENGE
    </div>
    <div class="navbar__links">
      <template v-for="(link, index) in links" :key="index">
        <router-link :class="[`navbar__links__link--${theme}-mode`,
                    'navbar__links__link',
                    'navbar__links__link--lateral-margin',
                    ]"
           :to="link.href">
          <span :class="routePath === link.href ? 'active' : ''" class="navbar__links__link__text">
            {{ link.name }}
          </span>
        </router-link>
      </template>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import theme from '../theme.js'
import router from '../router'
export default {
  name: 'NavigationBar',
  props: {
    brand: String,
  },
  setup (props) {
    const links = [
      {
        name: 'Clasificación',
        href: "/"
      },
      {
        name: 'Premios',
        href: "/premios"
      },
      {
        name: 'Clips',
        href: "/clips"
      },
      {
        name: 'Reglas',
        href: "/reglas"
      }
    ]

    const brandUppercase = computed(() => {
      const brand = props.brand ?? ''
      return brand.toUpperCase()
    })

    const routePath = computed( () => {
      return router.currentRoute.value.path
    })

    return {
      links,
      brandUppercase,
      theme,
      routePath
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
  font-size: 1.4rem;
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
  white-space: normal;

  &--dark-mode {
    color: #dfdfdf;
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
  text-decoration: none;

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
  height: 0.2rem;
  display: block;
  background: #bf0000;
  transition: 300ms;
}
.active::after {
  width: 100%;
}
.navbar__links__link__text:hover:after {
  width: 100%;
}
</style>