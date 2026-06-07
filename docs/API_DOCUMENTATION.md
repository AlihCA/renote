# ReNote API Documentation

Base URL:

```txt
http://localhost:5000/api
```

---

# Users

## Get Current User

```http
GET /users/me
```

---

## Sync Clerk User

```http
POST /users/sync
```

---

# Repositories

## Get All Repositories

```http
GET /repositories
```

---

## Get Single Repository

```http
GET /repositories/:id
```

---

## Create Repository

```http
POST /repositories
```

Body:

```json
{
  "title": "Research Repository",
  "description": "Machine learning files"
}
```

---

## Update Repository

```http
PUT /repositories/:id
```

---

## Delete Repository

```http
DELETE /repositories/:id
```

---

# Folders

## Get Repository Folders

```http
GET /repositories/:repoId/folders
```

---

## Create Folder

```http
POST /repositories/:repoId/folders
```

Body:

```json
{
  "name": "Chapter 1"
}
```

---

## Update Folder

```http
PUT /folders/:id
```

---

## Delete Folder

```http
DELETE /folders/:id
```

---

# Files

## Upload File

```http
POST /repositories/:repoId/files/upload
```

---

## Get Repository Files

```http
GET /repositories/:repoId/files
```

---

## Get Folder Files

```http
GET /folders/:folderId/files
```

---

## Delete File

```http
DELETE /files/:id
```

---

## Get Notes

```http
GET /repositories/:repoId/notes
```

---

# Search

## Repository Search

```http
GET /search?query=keyword
```

---

# AI Summaries

## File Summary

```http
POST /summaries/file/:fileId
```

---

## Note Summary

```http
POST /summaries/note/:noteId
```

---

## Folder Summary

```http
POST /summaries/folder/:folderId
```

---

# Dashboard

## Dashboard Statistics

```http
GET /dashboard/stats
```

---

# Response Format

## Success Response

```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Something went wrong"
}
```
