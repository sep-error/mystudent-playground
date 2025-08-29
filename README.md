# 🧪 GitHub Lab Activity: Branching & Collaboration

## 🎯 Objectives
By the end of this lab, students will be able to:
1. Clone (checkout) a repository from GitHub.
2. Create and switch to a new branch.
3. Stage, commit, and push changes to GitHub.
4. Open a Pull Request (PR).
5. Merge changes into the main branch.

---

## 🔧 Pre-requisites
- Git installed on computer (`git --version`).
- GitHub account created.
- Access to classroom repository (provided by instructor).
- IDE/Editor (e.g., VS Code).
- Internet connection.

---

## 📌 Step-by-Step Activity

### 1️⃣ Checkout (Clone) Repository

**Windows (PowerShell or CMD):**
```bash
git clone https://github.com/sep-error/mystudent-playground.git
cd mystudent-playground
```

**Mac/Linux (Terminal):**
```bash
git clone https://github.com/sep-error/mystudent-playground.git
cd mystudent-playground
```

---

### 2️⃣ Create a New Branch
```bash
git branch
git checkout -b feature-yourname
```

---

### 3️⃣ Make a Change, Commit, and Push
1. Open the repo folder in VS Code.
2. Create or edit a file (e.g., `students.md`) and add your name.
3. Stage and commit changes:
```bash
git add students.md
git commit -m "Add [Your Name] to students list"
```
4. Push the branch:
```bash
git push origin feature-yourname
```

---

### 4️⃣ Open a Pull Request (PR)
1. Go to the GitHub repository in the browser.
2. GitHub should suggest: 'Compare & Pull Request' — click it.
3. Add a meaningful PR title and description.
4. Assign reviewer (your instructor or teammate).
5. Submit the Pull Request.

---

### 5️⃣ Merge the PR
1. Reviewer/instructor checks the PR.
2. If approved, click 'Merge Pull Request' → 'Confirm Merge'.
3. Switch back to `main` branch and pull changes locally:
```bash
git checkout main
git pull origin main
```

---

## 📝 Deliverables
- Screenshot of your branch pushed on GitHub.
- Screenshot of your Pull Request.
- Screenshot after your PR is successfully merged.

---

## 🔍 Reflection Questions
1. Why do teams use branches instead of working directly on `main`?
2. What is the purpose of a Pull Request in Agile teams?
3. How does this workflow help prevent errors in large projects?
