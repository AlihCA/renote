# ReNote Development Guide

---

# Development Workflow

## Step 1 — Setup

### Client
```bash
cd client
npm install
npm run dev
```

### Server
```bash
cd server
npm install
npm run dev
```

---

# Step 2 — Frontend First

Each member builds:
- Pages
- Components
- UI layouts

using dummy data first.

Example:

```txt
dummyRepositories.js
dummyFiles.js
dummyNotes.js
```

---

# Step 3 — Backend APIs

After UI is complete:
- Create APIs
- Connect MySQL
- Connect frontend services

---

# Step 4 — Integration

Replace dummy data with real API calls.

Example:

```js
repositoryService.js
fileService.js
noteService.js
```

---

# Step 5 — Testing

All members:
- Test frontend
- Test backend
- Validate database
- Fix merge conflicts

---

# Step 6 — Deployment

## Frontend
- Vercel

## Backend
- Railway / Render

## Database
- MySQL

---

# Recommended Build Order

1. Authentication
2. Dashboard
3. Repository CRUD
4. Folder CRUD
5. File Upload
6. Notes CRUD
7. Search System
8. AI File Summary
9. AI Notes Summary
10. Folder AI Summary

---

# MVP Goal

The goal of ReNote MVP is to provide:

```txt
An AI-powered repository and knowledge management system
for organizing, searching, summarizing, and managing
files and notes.
```

---

# Future Features

- Recommendation system
- Inside-document search
- Semantic AI search
- AI knowledge retrieval
- Collaboration features

---

# Important Reminder

Focus on:
- Clean architecture
- Reusable components
- Stable APIs
- Good UI/UX

before building advanced AI systems.