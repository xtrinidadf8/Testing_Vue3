<template>
  <div
      :class="`table__data--${theme}-mode`"
      class="table__data"
      @click="toggleDropdown"
  >
    <div class="table__data__info table__data__info--center table__data__info--position">
      <span>{{ index + 1 }}</span>
    </div>
    <div class="table__data__info table__data__info--center table__data__info--streamer">
      <span>{{ streamer.name }}</span>
    </div>
    <i :class="`fas fa-caret-${arrow}`" class="table__data__info__arrow"></i>
    <div class="table__data__info table__data__info--center table__data__info--property_value">
      <a :href="streamer.twitch" target="_blank" rel="noopener noreferrer">
        <img
            class="table__data__info__image"
            v-bind:src="streamer.logo"
            alt=""
        />
        <div class="table__data__info__stream_status"></div>
      </a>
    </div>
    <div :data-name="`${filters[3].toLowerCase()}:`" class="table__data__info table__data__info--center table__data__info--property_value">
      <span>{{ streamer.account }}</span>
    </div>
    <div :data-name="`${filters[4].toLowerCase()}:`" class="table__data__info table__data__info--center table__data__info--property_value">
      <span>{{ streamer.wins }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ClassificationTableData",
  data() {
    return {
      dropDownPositions: [
        "right",
        "down"
      ],
      arrow: "right"
    }
  },
  methods: {
    toggleDropdown(content) {
      let classificationData = content.target;
      let hiddenData = classificationData.querySelectorAll(".table__data__info--property_value");
      console.log(content);
      if (this.arrow === this.dropDownPositions[0]) {
        this.arrow = this.dropDownPositions[1]
      } else {
        this.arrow = this.dropDownPositions[0]
      }
      hiddenData.forEach((property) => {
        property.classList.toggle("table__data__info--property_value--visible");
      })
    }
  },
  props: {
    theme: String,
    streamer: Object,
    index: Number,
    filters: Array,
  },
});
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
  grid-template-columns: 0.1fr 0.9fr 0.5fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;

  &--reduce-font-size {
    font-size: 0.8rem;
  }
  &:nth-child(odd) {
    background-color: #0000002e;
    border-radius: 0.25rem;
  }
  &:nth-child(even) {
    background-color: #0000000d;
    border-radius: 0.25rem;
  }
  &--dark-mode {
    color: #bab9bb;
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.7);
  }
}

.table__data__info {
  &--center {
   align-self: center;
   justify-self: center;
    display: flex;
  }
}

.table__data__info > a{
  position: relative;
  display: inline-flex;
}

.table__data__info__image {
  max-height: 2rem;
  border-radius: 50%;
}

.table__data__info__arrow {
  display: none;
}

.table__data__info__stream_status {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: grey;
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
}

@media screen and (max-width:700px) {
  .table__data {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
  }

  .table__data__info {
    font-size: 1rem;
    &--position {
      grid-column: 1 / 3;
      justify-self: baseline;
    }
    &--streamer {
      grid-column: 3 / 4 ;
    }
    &--property_value {
      display: none;
      justify-self: baseline;
      width: 100%;
      grid-column: 1 / 6;
      &--visible {
        position: relative;
        display: flex;
        justify-content: center;
      }
    }
  }

  .table__data__info::before {
    content: attr(data-name);
    text-transform:capitalize;
    font-size: 0.7rem;
    position: absolute;
    left: 2rem;
  }

  .table__data__info__arrow {
    display: inline-block;
    grid-column: 5;
    justify-self: end;
    align-self: center;
    font-size: 1.2rem;
    pointer-events: none;
  }
}
</style>