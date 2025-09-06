<template>
  <div class="card">
    <h2>{{ Angela }}</h2>
    <p>Favorite Language: JAVA{{ language }}</p>
    <p>Hobby: Spacing Out {{ language }}</p>

  </div>
</template>

<script setup>
defineProps({
  name: String,
  language: String
})
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin: 10px;
  border-radius: 8px;
}
</style>