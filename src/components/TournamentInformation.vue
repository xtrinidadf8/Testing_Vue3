<template>
  <section :class="[`information--${theme}-mode`, 'information']">
    <template v-for="(item, index) in information" :key="index">
      <div :class="[`information__element--${theme}-mode`, 'information__element']">
        <i :class="`fas ${item.icon}`"></i>
        <span>{{ item.text }}</span>
      </div>
    </template>
  </section>
</template>

<script>
import { reactive } from 'vue'
import theme from '../theme.js'

export default {
  name: 'TournamentInformation',
  setup () {
    const fullDateToDayAndMonth = (date) => {
      return date.toLocaleDateString('es', { day: 'numeric', month: 'numeric' })
    }

    const information = reactive({
      numberOfStreamers: {
        icon: 'fa-users',
        text: '12 streamers'
      },
      game: {
        icon: 'fa-gamepad',
        text: 'Fornite',
      },
      sumOfRewards: {
        icon: 'fa-trophy',
        text: '2500 € en Premios',
      },
      dates: {
        icon: 'fa-calendar-alt',
        text: `${fullDateToDayAndMonth(new Date())} al ${fullDateToDayAndMonth(new Date())} de ${(new Date()).getFullYear()}`,
      }
    })

    return {
      information,
      theme
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
  font-size: 1.2rem;
  line-height: 2rem;
}

.information {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.information__element {
  @include Rajdhani;
  flex-grow: 1;
  display: inline-block;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  &--dark-mode {
    color: #bab9bb;
    background-color: #000000;
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.7);
    background-color: #b0b0b030;
  }
}

.fas {
  margin: 0.5rem;
}
</style>