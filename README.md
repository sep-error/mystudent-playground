# 🧪 Git + Vue.js Lab Activity (3 Hours)

This file contains the detailed steps you need to follow for the lab.

---

## ⏱️ Time Allocation
- Git Refresher: **45 minutes**
- Vue Hands-On: **1 hour 45 minutes**
- Submission & Reflection: **30 minutes**

---

## Part 1: Git Refresher (45 minutes)

### 1. Checkout Repository
```bash
git clone https://github.com/sep-error/mystudent-playground.git
cd mystudent-playground
```

### 2. Create Branch
```bash
git checkout -b feature-yourname-vue
```

### 3. Update `full-name-vue.md`
Add your name and favorite programming language:
```markdown
- Alice | JavaScript
- Bob | Python
- <Your Name> | <Your Language>
```

Commit and push:
```bash
git add full-name-vue.md.md
git commit -m "Add my name and favorite language"
git push origin feature-yourname-vue
```

---

## Part 2: Vue.js Hands-On (1 hr 45 min)

### 1. Create Vue Project (with Vite)
```bash
npm create vite@latest vue-lab
cd vue-lab
npm install
npm run dev
```

Confirm app runs on `http://localhost:5173`.

---

### 2. Create a Component
Inside `src/components/`, create `fullname.vue`:

```vue
<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Favorite Language: {{ language }}</p>
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
```

---

### 3. Use Component in `App.vue`
Replace template:

```vue
<template>
  <h1>My Classmates</h1>
  <StudentCard name="Alice" language="JavaScript" />
  <StudentCard name="Bob" language="Python" />
  <StudentCard name="Charlie" language="Java" />
</template>

<script setup>
import StudentCard from './components/StudentCard.vue'
</script>
```

---

### 4. Extend the Component
- Add one more prop: `hobby`  
- Update template to display hobby  
- Add at least two more student cards with values  

---

## Part 3: Push and Submit (30 minutes)

1. Copy `vue-lab/` into your cloned Git repo under folder **`lab-vue/`**.  
2. Commit and push:  
```bash
git add .
git commit -m "Add Vue lab with StudentCard component"
git push origin feature-yourname-vue
```
3. Open a Pull Request in GitHub.

---

## Deliverables
- Updated `fullname-vue.md`  
- `lab-vue/` folder with working Vue project  
- Pull Request submitted  

---

## Reflection Questions (in `reflection.md`)
1. What was the most challenging Git step?  
2. How did Vue components show reusability?  
3. How would you extend this app?  

---

🎉 Congratulations! You completed the Git + Vue.js lab!
