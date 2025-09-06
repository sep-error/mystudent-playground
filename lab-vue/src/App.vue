<template>
  <h1>My Classmates</h1>
  <StudentCard name="Alice" language="JavaScript" hobby="Painting" />
  <StudentCard name="Bob" language="Python" hobby="Cycling" />
  <StudentCard name="Charlie" language="Java" hobby="Gaming" />
  <StudentCard name="Diana" language="C#" hobby="Reading" />
  <StudentCard name="Ethan" language="Go" hobby="Photography" />
</template>

<script setup>
import StudentCard from './components/raven_robles.vue'
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