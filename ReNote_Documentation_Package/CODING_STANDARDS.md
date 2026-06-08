# CODING_STANDARDS.md

## Naming Conventions

### React Components
Use PascalCase.

Examples:
```txt
RepositoryCard.jsx
DashboardPage.jsx
```

### Variables and Functions
Use camelCase.

Examples:
```txt
getRepositories()
createFolder()
```

### Database Tables
Use snake_case.

Examples:
```txt
repositories
repository_tags
summary_history
```

## Frontend Rules

- Use reusable components.
- Keep components small.
- Avoid very large files.
- Use dummy data first if API is not ready.
- Separate pages and components.
- Use services folder for API calls.
- Include loading, error, and empty states.

## Backend Rules

- Separate routes/controllers/models.
- Use async/await.
- Validate requests.
- Protect routes using middleware.
- Return consistent API responses.
- Never rely only on frontend hiding for permissions.

## Git Rules

Branches:
```txt
main
dev
feature/*
```

Commit format:
```txt
feat: add repository CRUD
fix: correct access request bug
style: update dashboard layout
docs: update API documentation
```

## Protected Files

Only the Project Lead or approved members can edit:

```txt
App.jsx
routes.jsx
MainLayout.jsx
Sidebar.jsx
Topbar.jsx
global.css
variables.css
utilities.css
server.js
app.js
db.js
database schema/migrations
```
