<template>
    <div class="switch-button-control">
      <div class="switch-button" :class="{ enabled: isEnabled }" @click="toggle" :style="{'--color': color}">
        <div class="button">
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import theme from '../theme.js'

export default {
  name: 'SwitchButton',
  event: "toggle",
  props: {
    color: {
      type: String,
      required: false,
      default: "#4D4D4D"
    },
  },
  setup() {
    let isEnabled = ref(true)
    return {
      isEnabled,
      theme
    }
  },
  methods: {
    toggle() {
      this.isEnabled = !this.isEnabled;
      theme.value = this.isEnabled ? 'dark' : 'light'
      this.$emit("toggle", this.isEnabled);
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
}
.switch-button-control {
  @include Rajdhani;
  display: flex;

  .switch-button {
    $switch-button-height: 2.125rem;
    $switch-button-color: var(--color);
    $switch-button-border-thickness: 2px;

    display: flex;
    align-items: center;
    background-color: $switch-button-color;
    height: $switch-button-height;
    width: calc(#{$switch-button-height} * 1.2);
    border: $switch-button-border-thickness solid $switch-button-color;
    box-shadow: inset 0px 0px $switch-button-border-thickness 0px
    rgba(0, 0, 0, 0.33);
    border-radius: 0.3rem 0 0 0.3rem;
    $button-side-length: calc(
      #{$switch-button-height} - (2 * #{$switch-button-border-thickness})
    );

    cursor: pointer;

    .button {
      margin-left: 0.4rem;
      border: $switch-button-border-thickness solid $switch-button-color;
      border-radius: $button-side-length;
      background: $switch-button-color;
      color: white;
      font-family: 'Font Awesome 5 Free',serif;
      font-weight: 900;
      &::before {
        content: "\f186";
      }
    }

    &.enabled {
      box-shadow: none;

      .button::before {
        content: "\f185";
      }
    }
  }
}

</style>