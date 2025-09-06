<script setup>
defineProps({
    name:String,
    age:number,
    hobby: String
})
</script>
<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <p>Age: {{ age }}</p>
        <p>Hobby: {{ hobby }}</p>
    </div>
</template>
<style scoped>
.card{
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color: #f9f9f9;

}</style>