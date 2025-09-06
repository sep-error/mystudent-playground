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

<style>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}
.card:hover {
  transform: scale(1.02);
}
</style>