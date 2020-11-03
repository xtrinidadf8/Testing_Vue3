<template>
  <div :class="`awards__header--${theme}-mode`" class="awards__header">
    Premios (Work in Progress)
  </div>
  <div class="awards">
    <div :class="`awards__content--${award.size}`" class="awards__content" v-for="(award) in awards">
      <div :class="`awards__content__block--${theme}-mode`" class="awards__content__block" :style="{ backgroundColor:  award.color,}">
        <i :class="`fas ${award.icon}`"
           class="awards__content__block__icon">
        </i>
      </div>
      <div :class="`awards__content__text--${theme}-mode awards__content__text--${award.size}`" class="awards__content__text">
        <span>{{award.title}}</span>
        <span>{{award.price}} €</span>
      </div>
    </div>
  </div>
</template>

<script>
import theme from "../theme.js";

export default {
  name: "Awards",
  setup() {
    const awards = [
      {
        position: 1,
        title: "PRIMER PREMIO",
        price: 1200,
        size: 'large',
        color: 'rgb(240, 224, 115)',
        icon: 'fa-trophy',
      },
      {
        position: 2,
        title: "SEGUNDO PREMIO",
        price: 500,
        size: 'medium',
        color: '#a4a4a4',
        icon: 'fa-trophy',
      },
      {
        position: 3,
        title: "TERCER PREMIO",
        price: 250,
        size: 'small',
        color: '#9f8958',
        icon: 'fa-trophy',
      },
      {
        position: 4,
        title: "CUARTO PREMIO",
        price: 50,
        size: 'small',
        color: '#21dfed',
        icon: 'fa-award',
      },
    ]
    return {
      awards,
      theme
    }
  }
}
</script>

<style lang="scss" scoped>

  @mixin Rajdhani {
    font-family: Rajdhani, sans-serif;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1rem;
  }

  .awards {
    margin: 0 2rem 2rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .awards__header {
    @include Rajdhani;
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 1rem;
    margin-left: 3rem;

    &--dark-mode {
      color: #bab9bb;
    }

    &--light-mode {
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .awards__content {
    display: flex;
    padding: 0 2rem 0 2rem;
    background-color: #82787833;
    margin: 0 1rem 1rem 1rem;
    min-height: 5rem;
    &--large {
      flex-basis: 80%;
      font-size: 3rem;
      flex-grow: 1;
      min-height: 10rem;
    }

    &--medium {
      flex-basis: 80%;
      font-size: 2rem;
      flex-grow: 1;
      min-height: 7rem;
    }

    &--small {
      flex-basis: 40%;
      font-size: 1.7rem;
      min-height: 6rem;
    }
  }

  .awards__content__block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: auto;

    &--dark-mode {
      color: #2d2c2c;
    }

    &--light-mode {
      color: white;
    }
  }

  .awards__content__text {
    @include Rajdhani;
    margin-left: 2rem;
    display: grid;
    padding: 1rem;

    &--large {
      font-size: 2rem;
      line-height: 2rem;
    }

    &--medium {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    &--small {
      font-size: 1rem;
      line-height: 1rem;
    }

    &--dark-mode {
      color: #bab9bb;
    }

    &--light-mode {
      color: rgba(0, 0, 0, 0.9);
    }
  }
</style>