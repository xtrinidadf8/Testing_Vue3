<template>
  <section :class="`information--${theme}-mode`" class="information">
    <div class="information__element" v-for="item in information" >
      <i :class="`fas ${item.icon}`"></i>
      <span>{{item.text}}</span>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TournamentInformation",
  props: {
    theme: String,
  },
  setup() {
    function fullDateToDayAndMonth(date) {
      return date.toLocaleString("es", {day: 'numeric', month: 'numeric'})
    }
    const information = {
      numberOfStreamers: {
        icon: "fa-users",
        text: 32 + " streamers"
      },
      game: {
        icon: "fa-gamepad",
        text: "Fornite",
      },
      sumOfRewards: {
        icon: "fa-trophy",
        text: 2500 + " en Premios",
      },
      dates: {
        icon: "fa-calendar-alt",
        text: "del " + fullDateToDayAndMonth(new Date()) +
              " al " + fullDateToDayAndMonth(new Date()) + " de " + (new Date()).getFullYear(),
      }
    };
    return {
      information,
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
.information {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.information__element {
  @include Rajdhani;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>