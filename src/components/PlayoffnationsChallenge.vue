<template>
  <div class="main">
    <ClassificationTable :theme="theme"/>
  </div>
</template>

<script>
import ClassificationTable from './ClassificationTable.vue'

export default {
  name: 'PlayoffnationsChallenge',
  components: {
    ClassificationTable,
  },
  props: {
    theme: String,
  }
}
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