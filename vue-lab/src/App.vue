<
Precious


<template>
  <h1>{{ title }}</h1>
  <StudentCard name="Alice" language="JavaScript" hobby="Painting" />
  <StudentCard name="Bob" language="Python" hobby="Cycling" />
  <StudentCard name="Charlie" language="Java" hobby="Gaming" />
  <StudentCard name="Maryann" language="Html" hobby="Cooking" />
  <StudentCard name="Princess" language="Php" hobby="Coding" />
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