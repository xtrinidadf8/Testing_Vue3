<template>
  <section :class="[`information--${theme}-mode`, 'information']">
    <template v-for="(item, index) in information">
      <div :key="index" :class="[`information__element--${theme}-mode`, 'information__element']">
        <i :class="`fas ${item.icon}`"></i>
        <span>{{ item.text }}</span>
      </div>
    </template>
  </section>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'TournamentInformation',
  props: {
    theme: String,
  },
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
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 2rem;
}

.information {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.information__element {
  @include Rajdhani;
  flex-grow: 1;
  display: inline-block;
  justify-content: center;
  text-align: center;

  &--dark-mode {
    color: #bab9bb;
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.7);
  }
}

.fas {
  margin: 0.5rem;
}
</style>