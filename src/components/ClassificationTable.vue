<template>
  <section class="table table--spaced">
    <div :class="`table__filters--${theme}-mode`" class="table__filters">
      <div
          class="table__filters--center"
          v-for="filter in filters"
          :key="filter"
      >
        {{ filter }}
      </div>
    </div>
    <template v-for="(streamer, index) in tournamentData" :key="index">
      <ClassificationTableData :streamer="streamer"
                               :index="index"
                               :filters="filters">
      </ClassificationTableData>
    </template>
  </section>
</template>

<script>
import ClassificationTableData from './ClassificationTableData.vue'
import theme from '../theme.js'

export default {
  name: 'ClassificationTable',
  components: {
    ClassificationTableData
  },
  setup () {
    return {
      theme,
      filters: [
        '#',
        'STREAMER',
        'REDES',
        'CUENTA',
        'PUNTOS DE ARENA',
        'GANADAS'
      ],
      tournamentData: [
        {
          name: 'MateoZ',
          twitch: 'https://www.twitch.tv/mateoz',
          live: false,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/d9b999a9-3427-4caf-a1c4-1920386be7ec-profile_image-70x70.png',
          account: 'MateoZ',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'Exal',
          twitch: 'https://www.twitch.tv/theexal04',
          live: true,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/9b12482f-ab62-465b-a84d-89da2526d764-profile_image-70x70.png',
          account: 'Exal',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'Blanchito',
          twitch: 'https://www.twitch.tv/blanchitooo',
          live: true,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/fc81b73a-aa16-4378-b1b0-075b53a49d1b-profile_image-70x70.png',
          account: 'Blanchito',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'Bazattak007',
          twitch: 'https://www.twitch.tv/bazattak007​',
          live: false,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/a00630fd-e257-4672-9bf5-6007975031cb-profile_image-70x70.jpg',
          account: 'Bazattak007',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'Neburix',
          twitch: 'https://www.twitch.tv/neburixtv',
          live: true,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/4271565d-c666-4293-8185-4ae919b35f38-profile_image-70x70.png',
          account: 'Neburix',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'Doraditox',
          twitch: 'https://www.twitch.tv/doraditox',
          live: true,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/9e519e6e-239e-447c-a3c9-dee3d802f641-profile_image-70x70.png',
          account: 'Doraditox',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'Unluckylife',
          twitch: 'https://www.twitch.tv/unluckylife_',
          live: true,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/e92b27ce-9406-4a4a-a747-3d61b431c09a-profile_image-70x70.png',
          account: 'Unluckylife',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'Ryux',
          twitch: 'https://www.twitch.tv/ryux',
          live: true,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/a66ed555-3510-45a2-ab98-b231b462c782-profile_image-70x70.png',
          account: 'Ryux',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'DiegoGB',
          twitch: 'https://www.twitch.tv/diegogb',
          live: false,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/cf62b4af-9300-4bee-9e97-e35acfce8953-profile_image-70x70.png',
          account: 'DiegoGB',
          wins: 50,
          arenaPoints: 2000
        },
        {
          name: 'kkwet',
          twitch: 'https://www.twitch.tv/kkwetfn',
          live: true,
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/4f8abd22-7978-4a3c-a143-9ac2438457af-profile_image-70x70.png',
          account: 'kkwet',
          wins: 50,
          arenaPoints: 2000
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

.table {
  display: grid;
  grid-template-areas:
    "filter"
    "content";

  &--spaced {
    margin: 0 2vmin 3rem 2vmin;
  }
}

@mixin Rajdhani {
  font-family: Rajdhani, sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 2rem;
}

.table__filters {
  @include Rajdhani;
  grid-area: filter;
  gap: 1rem;
  display: grid;
  grid-template-columns: 0.1fr 0.9fr 0.8fr 1fr 1fr 1fr;
  padding: 1rem 1rem 0 1rem;
  border-bottom: solid 0.2rem #bf0000;

  &--center {
    justify-self: center;
  }

  &--dark-mode {
    color: #bab9bb;
  }

  &--light-mode {
    color: rgba(0, 0, 0);
  }
}

//Collapsed
@media screen and (max-width: 700px) {
  .table__filters {
    display: none;
  }
}
</style>