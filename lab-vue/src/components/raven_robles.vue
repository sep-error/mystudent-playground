<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Favorite Language: {{ language }}</p>
    <p>Hobby: {{ hobby }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  language: String,
  hobby: String
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin: 10px;
  border-radius: 8px;
}
</style>