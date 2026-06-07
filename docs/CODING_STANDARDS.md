# ReNote Coding Standards

---

# Naming Conventions

## React Components
Use PascalCase.

Example:

```jsx
RepositoryCard.jsx
DashboardPage.jsx
```

---

## Variables and Functions
Use camelCase.

Example:

```js
getRepositories()
createFolder()
```

---

## Database Tables
Use snake_case.

Example:

```sql
repositories
folder_files
summary_history
```

---

# Folder Structure Rules

- Organize by feature/module
- Keep reusable components separated
- Keep styles modular

---

# Frontend Rules

## Rules
- Use reusable components
- Keep components small
- Avoid very large files
- Use dummy data first
- Separate pages and components

---

# Backend Rules

## Rules
- Separate routes/controllers/models
- Use async/await
- Use middleware properly
- Validate requests

---

# Git Rules

## Branches

```txt
main
dev
feature/*
```

---

## Commit Format

```txt
feat: added repository CRUD
fix: corrected search bug
style: updated dashboard layout
```

---

# Styling Rules

## Design Direction
- Modern UI
- Clean dashboard
- Soft shadows
- Rounded cards
- Minimal design

## Typography
- Inter

## Color Palette
Defined in:

```txt
variables.css
```

---

# Protected Files

Only project manager or approved members can edit:

```txt
App.jsx
routes.jsx
global.css
variables.css
utilities.css
server.js
app.js
db.js
```
