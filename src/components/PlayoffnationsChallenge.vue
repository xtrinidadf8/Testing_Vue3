<template>
  <div class="main">
    <TournamentInformation :theme="theme"></TournamentInformation>
    <ClassificationTable :theme="theme"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ClassificationTable from "./ClassificationTable.vue";
import TournamentInformation from "./TournamentInformation.vue";
export default defineComponent({
  name: "PlayoffnationsChallenge",
  components: {
    ClassificationTable,
    TournamentInformation
  },
  props: {
    theme: String,
  },
  data() {
    return {
      toggleActive: false,
      changeTheme: this.theme,
    };
  },
});
</script>

<style scoped>
.main {
  color: #bab9bb;
}

.main--dark {
  color: #bab9bb;
}
.main--light {
  color: rgba(0, 0, 0, 0.65);
}
</style>