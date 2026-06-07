# ReNote

ReNote is an AI-powered repository and knowledge management system that helps users organize, search, summarize, and manage files and notes in one platform.

The system combines:
- Repository management
- Folder organization
- File uploads
- Notes management
- AI-powered summarization
- Search functionality

---

# Tech Stack

## Frontend
- React + Vite
- React Router DOM
- Lucide React

## Backend
- Node.js
- Express.js

## Database
- MySQL

## Cloud Storage
- AWS S3

## Authentication
- Clerk

## AI Integration
- OpenAI API

---

# Main Features

## MVP Features
- Authentication System
- Repository CRUD
- Folder CRUD
- File Upload System
- Repository Search
- AI File Summarizer

## Second Wave Features
- Dashboard UI
- File Organization System
- AI Notes Summarizer
- Folder AI Summary

## Future Features
- Inside-document Search
- Recommendation System
- Semantic AI Search

---

# Project Structure

```txt
client/     → Frontend React App
server/     → Backend Express API
docs/       → Documentation Files
```

---

# Installation Guide

## Client Setup

```bash
cd client
npm install
npm run dev
```

## Server Setup

```bash
cd server
npm install
npm run dev
```

---

# Environment Variables

## Client

```env
VITE_CLERK_PUBLISHABLE_KEY=
```

## Server

```env
PORT=5000

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=

CLERK_SECRET_KEY=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET_NAME=
AWS_REGION=

OPENAI_API_KEY=
```

---

# Team Workflow

- No direct push to `main`
- All development goes through `dev`
- Feature branches per member
- Frontend first using dummy data
- Backend integration after UI completion

---

# Branch Structure

```txt
main
dev

feature/auth-dashboard
feature/repository-folder
feature/file-search
feature/notes-ai
```

---

# Development Status

Current Version:
```txt
MVP Development Phase
```

---

# Developers

ReNote Development Team
