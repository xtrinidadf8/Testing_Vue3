<template>
  <div :class="[`table__data--${theme}-mode`, 'table__data']"
       @click="arrow === arrows[0] ? arrow = arrows[1] : arrow = arrows[0]">
    <div class="table__data__info table__data__info--center table__data__info--position">
      <span>{{ index + 1 }}</span>
    </div>
    <div class="table__data__info table__data__info--center table__data__info--streamer">
      <span>{{ streamer.name }}</span>
    </div>
    <div class="table__data__info table__data__info--center table__data__info--logos">
      <a :href="streamer.twitch" target="_blank" rel="noopener noreferrer">
        <img :class="`table__data__info__image--${theme}-mode`"
            class="table__data__info__image" :src="streamer.logo" alt=""/>
        <div class="table__data__info__stream_status table__data__info__stream_status--bottom-centered
                    table__data__info__stream_status--red-round-background table__data__info__stream_status--white-bold-text"
             :class="{ live : streamer.live}">
          EN DIRECTO
        </div>
      </a>
      <a href="">
        <img :class="`table__data__info__image--${theme}-mode`"
            class="table__data__info__image table__data__info__image--small table__data__info__image--centered" src="../assets/Twitter_Logo_Blue.png"/>
      </a>
    </div>
    <i :class="`fas fa-caret-${arrow}`" class="table__data__info__arrow"></i>

    <div :data-name="`${filters[3].toLowerCase()}:`"
         class="table__data__info table__data__info--center table__data__info--property_value"
         :class="{ 'table__data__info--property_value--visible': arrow === arrows[1] }">
      <span>{{ streamer.account }}</span>
    </div>
    <div :data-name="`${filters[4].toLowerCase()}:`"
         class="table__data__info table__data__info--center table__data__info--property_value"
         :class="{ 'table__data__info--property_value--visible': arrow === arrows[1] }">
      <span>{{ streamer.arenaPoints }}</span>
    </div>
    <div :data-name="`${filters[5].toLowerCase()}:`"
         class="table__data__info table__data__info--center table__data__info--property_value"
         :class="{ 'table__data__info--property_value--visible': arrow === arrows[1] }">
      <span>{{ streamer.wins }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import theme from '../theme.js'

export default {
  name: 'ClassificationTableData',
  setup() {
    const arrows = ['right', 'down']
    let arrow = ref('right')

    return {
      theme,
      arrows,
      arrow
    }
  },
  props: {
    streamer: Object,
    index: Number,
    filters: Array,
  },
}

</script>

<style lang="scss" scoped>
@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 2rem;
}

.table__data {
  @include Rajdhani;
  display: grid;
  grid-template-columns: 0.1fr 0.9fr 0.8fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;

  &--reduce-font-size {
    font-size: 0.8rem;
  }

  &--dark-mode {
    color: #dfdfdf;

    &:nth-child(odd) {
      background-color: #ffffff21;
      border-radius: 0.25rem;
    }

    &:nth-child(even) {
      background-color: #0000000d;
      border-radius: 0.25rem;
    }
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.9);

    &:nth-child(odd) {
      background-color: #0000002e;
      border-radius: 0.25rem;
    }

    &:nth-child(even) {
      background-color: #0000000d;
      border-radius: 0.25rem;
    }
  }
}

.table__data__info {
  &--center {
    align-self: center;
    justify-self: center;
    display: flex;
  }
}

.table__data__info > a {
  position: relative;
  display: inline-flex;
}

.table__data__info__image {
  max-height: 3rem;
  border-radius: 50%;
  &--small {
    max-height: 3rem;
    border-radius: 0.2rem;
    margin-left: 2rem;
  }

  &--centered {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  &--dark-mode:hover {
    box-shadow: 0 0 0.7rem 0.1rem rgba(247, 243, 243, 0.51);
  }

  &--light-mode:hover {
    box-shadow: 0 0 0.7rem 0.1rem rgba(117, 112, 112, 0.51)
  }

}

.table__data__info__arrow {
  display: none;
}

.table__data__info__stream_status {

  display: none;

  &.live {
    display: flex;
    justify-content: center;
    padding: 0.2rem;
  }

  &--bottom-centered {
    position: absolute;
    bottom: -0.6rem;
    left: 50%;
    transform: translateX(-50%);
  }

  &--red-round-background {
    background-color: #e91916d6;
    border-radius: 0.2rem;
  }

  &--white-bold-text {
    color: white;
    font-size: 0.7rem;
    white-space: nowrap;
    font-weight: bold;
    line-height: 1rem;
    text-align: center;
  }
}

@media screen and (max-width: 700px) {
  .table__data {
    grid-template-columns: repeat(7, minmax(1rem,2fr)) 1fr;
    grid-template-rows: auto;
  }

  .table__data__info {
    font-size: 1rem;

    &--position {
      grid-column: 1;
      justify-self: baseline;
    }

    &--streamer {
      grid-column: 2;
      justify-self: baseline;
    }
    &--logos {
      grid-column: 6 / 8;
    }
    &--property_value {
      display: none;
      flex-grow: 1;
      grid-column: 1 / 9;

      & > span {
        margin-right: 2rem;
      }

      &--visible {
        position: relative;
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }
    }
  }

  .table__data__info::before {
    content: attr(data-name);
    text-transform: capitalize;
    font-size: 0.7rem;
    position: absolute;
    left: 2rem;
  }

  .table__data__info__arrow {
    display: inline-block;
    grid-column: 9;
    justify-self: end;
    align-self: center;
    font-size: 1.2rem;
    pointer-events: none;
  }
}
</style>