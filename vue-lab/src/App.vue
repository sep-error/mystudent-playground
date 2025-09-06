<template>
  <h1>{{ title }}</h1>
  <StudentCard name="Jerome" language="JavaScript" hobby="Painting" />
  <StudentCard name="Aaron" language="Python" hobby="Cycling" />
  <StudentCard name="Balong" language="Java" hobby="Gaming" />
  <StudentCard name="Precious" language="Html" hobby="Cooking" />
  <StudentCard name="Jenine" language="Php" hobby="Photography" />
</template>

<script setup>
import StudentCard from './components/StudentCard.vue'

const title = 'My Classmates'
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>