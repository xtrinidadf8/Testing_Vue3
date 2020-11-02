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
                               :theme="theme"
                               :filters="filters">
      </ClassificationTableData>
    </template>
  </section>
</template>

<script>
import ClassificationTableData from './ClassificationTableData.vue'

export default {
  name: 'ClassificationTable',
  components: {
    ClassificationTableData
  },
  data () {
    return {
      filters: [
        '#',
        'STREAMER',
        'REDES',
        'CUENTA',
        'GANADAS'
      ],
      tournamentData: [
        {
          name: 'MateoZ',
          twitch: 'https://www.twitch.tv/mateoz',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/d9b999a9-3427-4caf-a1c4-1920386be7ec-profile_image-70x70.png',
          account: 'MateoZ',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'Exal',
          twitch: 'https://www.twitch.tv/theexal04',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/9b12482f-ab62-465b-a84d-89da2526d764-profile_image-70x70.png',
          account: 'Exal',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'Blanchito',
          twitch: 'https://www.twitch.tv/blanchitooo',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/fc81b73a-aa16-4378-b1b0-075b53a49d1b-profile_image-70x70.png',
          account: 'Blanchito',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'Bazattak007',
          twitch: 'https://www.twitch.tv/bazattak007​',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/a00630fd-e257-4672-9bf5-6007975031cb-profile_image-70x70.jpg',
          account: 'Bazattak007',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'Neburix',
          twitch: 'https://www.twitch.tv/neburixtv',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/4271565d-c666-4293-8185-4ae919b35f38-profile_image-70x70.png',
          account: 'Neburix',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'Doraditox',
          twitch: 'https://www.twitch.tv/doraditox',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/9e519e6e-239e-447c-a3c9-dee3d802f641-profile_image-70x70.png',
          account: 'Doraditox',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'Unluckylife',
          twitch: 'https://www.twitch.tv/unluckylife_',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/e92b27ce-9406-4a4a-a747-3d61b431c09a-profile_image-70x70.png',
          account: 'Unluckylife',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'Ryux',
          twitch: 'https://www.twitch.tv/ryux',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/a66ed555-3510-45a2-ab98-b231b462c782-profile_image-70x70.png',
          account: 'Ryux',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'DiegoGB',
          twitch: 'https://www.twitch.tv/diegogb',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/cf62b4af-9300-4bee-9e97-e35acfce8953-profile_image-70x70.png',
          account: 'DiegoGB',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
        {
          name: 'kkwet',
          twitch: 'https://www.twitch.tv/kkwetfn',
          logo:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/4f8abd22-7978-4a3c-a143-9ac2438457af-profile_image-70x70.png',
          account: 'kkwet',
          games: 100,
          wins: 50,
          loses: 50,
          winrate: 0.5,
        },
      ],
    }
  },
  props: {
    theme: String,
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
    margin: 2rem 2vmin 3rem 2vmin;
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
  grid-template-columns: 0.1fr 0.9fr 0.5fr 1fr 1fr;
  padding: 1rem 1rem 0 1rem;
  border-bottom: solid 0.1rem;

  &--center {
    justify-self: center;
  }

  &--dark-mode {
    color: #bab9bb;
  }

  &--light-mode {
    color: rgba(0, 0, 0, 0.75);
  }
}

//Collapsed
@media screen and (max-width: 700px) {
  .table__filters {
    display: none;
  }
}
</style>