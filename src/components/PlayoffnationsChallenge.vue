<template>
  <div class="main">
    <ClassificationTable :theme="theme"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Table from "./ClassificationTable.vue";
export default defineComponent({
  name: "PlayoffnationsChallenge",
  components: {
    Table,
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
  methods: {
    swapTheme(value) {
      this.changeTheme = value ? "dark" : "light";
      this.$emit("swap", this.changeTheme);
    },
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