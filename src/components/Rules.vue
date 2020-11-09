<template>
  <div class="rules">
    <div :class="`rules__header--${theme}-mode`" class="rules__header">
      REGLAS
    </div>
    <div v-for="(rule) in rules">
        <p :class="`rules__text--${theme}-mode`" class="rules__text">
          <span> {{ rule.position}}</span>
          <span> - </span>
          {{rule.text}}
        </p>
    </div>
  </div>
</template>

<script>
import theme from "../theme.js";

export default {
  name: "Rules",
  setup() {
    const rules = [
      {
        position: 1,
        text: "Tendremos potestad absoluta para expulsar a algún miembro en caso de que incumpla alguna norma."
      },
      {
        position: 2,
        text: "Respetar las normativas generales de Fornite."
      },
      {
        position: 3,
        text: "Todos los games deberán ser jugados en stream."
      },
      {
        position: 4,
        text: "Deberá tener facecam o como máximo handcam para comprobar que es él la persona que está judando."
      },
      {
        position: 5,
        text: "Jugar en el servidor de Europa"
      },
      {
        position: 6,
        text: "Máximo 3 minutos de delay"
      },
      {
        position: 7,
        text: "Tener activado la opcion de guardar retransmisiones y que sean accesibles para todo el mundo."
      },
      {
        position: 8,
        text: "No se podrá cambiar el nombre de la cuenta"
      },
      {
        position: 9,
        text: "El nombre de la cuenta deberá ser con caracteres normales para facilitar el trackeo"
      }
    ]
    return {
      rules,
      theme
    }
  }
}
</script>

<style lang="scss" scoped>

  @mixin Rajdhani {
    font-family: Rajdhani, sans-serif;
    font-size: 0.9rem;
    font-weight: bold;
    line-height: 2rem;
  }

  .rules {
    margin: 2rem 2rem 2rem 2rem;
    max-width: 50%;
  }

  .rules__text {
    @include Rajdhani;
    background-color: #66666626;
    padding: 1rem;
    border-radius: 0.5rem;

    &--dark-mode {
      color: #bab9bb;
    }

    &--light-mode {
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .rules__header {
    @include Rajdhani;
    font-size: 3rem;
    line-height: 3rem;

    &--dark-mode {
      color: #bab9bb;
    }

    &--light-mode {
      color: rgba(0, 0, 0, 0.9);
    }
  }
</style>