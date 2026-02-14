<template>
  <div>
    <h2>Mood Check-in</h2>
    <input v-model="name" placeholder="Your name" />
    <p v-if="loading">Loading AI response...</p>
    <textarea v-model="mood" placeholder="How are you feeling today?"></textarea>
    <button @click="submitMood">Submit</button>

    <!-- Extra credit: loading spinner -->
    <p v-if="loading">Loading AI response...</p>

    <p v-if="aiMessage">AI Advisor: {{ aiMessage }}</p>

    <!-- Extra credit: error handling -->
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      name: '',
      mood: '',
      aiMessage: '',
      loading: false,
      error: ''
    };
  },
  methods: {
    async submitMood() {
      this.loading = true;
      this.error = '';
      this.aiMessage = '';

      try {
        const res = await api.post('/mood', {
          full_name: this.name,
          mood_text: this.mood
        });

        this.aiMessage = res.data.ai_message;
      } catch (err) {
        this.error = 'Something went wrong. Check backend server.';
      }

      this.loading = false;
    }
  }
};
</script>
