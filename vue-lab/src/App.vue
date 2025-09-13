
<template>
  <div class="student-list">
    <StudentCard name="Jenine" age="20" hobby="Sleeping" />
    <StudentCard name="Angela" age="19" hobby="Thirstrap" />
    <StudentCard name="Precious" age="20" hobby="Painting" />
     <StudentCard name="Kaycee" age="20" hobby="Driving" />
      <StudentCard name="Maryann" age="20" hobby="Roadtrip" />
  </div>
</template>

<script setup>
import StudentCard from './components/StudentCard.vue'

const title = 'Me and My Classmates'
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
