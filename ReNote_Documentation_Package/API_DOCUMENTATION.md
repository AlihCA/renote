# API_DOCUMENTATION.md

## Base URL

```txt
http://localhost:5000/api
```

## Response Format

### Success

```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

### Error

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

## API Routes

| Module | Method | Endpoint | Purpose | Access |
| --- | --- | --- | --- | --- |
| Users/Auth | POST | /api/users/sync | Sync Clerk user to MySQL. | Logged in |
| Users/Auth | GET | /api/users/me | Get current user profile, role, trust label. | Logged in |
| Dashboard | GET | /api/dashboard/stats | Get total repositories, files, summaries. | Logged in |
| Dashboard | GET | /api/dashboard/recent | Get recent repositories, files, summaries. | Logged in |
| Repositories | GET | /api/repositories | Get owned active repositories. | Logged in |
| Repositories | POST | /api/repositories | Create repository with title, description, visibility, tags. | Logged in |
| Repositories | GET | /api/repositories/:id | Get repository details if permitted. | Conditional |
| Repositories | PUT | /api/repositories/:id | Edit repository details. | Owner |
| Repositories | DELETE | /api/repositories/:id | Permanent delete with title confirmation. | Owner |
| Archive | GET | /api/repositories/archived | Get owned archived repositories. | Logged in |
| Archive | PATCH | /api/repositories/:id/archive | Archive repository. | Owner |
| Archive | PATCH | /api/repositories/:id/restore | Restore archived repository. | Owner |
| Folders | GET | /api/repositories/:repoId/folders | Get repository folders. | Can view |
| Folders | POST | /api/repositories/:repoId/folders | Create folder up to max depth 6. | Owner/Editor |
| Folders | PUT | /api/folders/:id | Rename/move folder. | Owner/Editor |
| Folders | DELETE | /api/folders/:id | Delete folder with rule/confirmation. | Owner/Editor |
| Files | GET | /api/repositories/:repoId/files | Get repository files. | Can view |
| Files | POST | /api/repositories/:repoId/files/upload | Upload file; PDF/DOCX/TXT/PPTX, max 20MB. | Owner/Editor |
| Files | GET | /api/files/:id | Get file details/preview data. | Can view |
| Files | DELETE | /api/files/:id | Delete file. | Owner/Editor |
| Search | GET | /api/search?query= | Search repositories/files/tags; restricted shows metadata. | Guest/Logged in |
| Summaries | POST | /api/summaries/file/:fileId | Generate summary for file and mode. | Logged in + can view |
| Summaries | POST | /api/summaries/:id/refine | Refine summary: shorter/more detailed/key concepts/definitions. | Owner of summary |
| Summaries | GET | /api/summaries | Get user's summary history. | Logged in |
| Summaries | GET | /api/summaries/:id | Get single summary. | Owner/can view |
| Summaries | DELETE | /api/summaries/:id | Delete summary. | Owner |
| Access | POST | /api/repositories/:id/access-requests | Request access to restricted repository. | Logged in |
| Access | GET | /api/repositories/:id/access-requests | Owner views access requests. | Owner |
| Access | PATCH | /api/access-requests/:id/approve | Approve request. | Owner |
| Access | PATCH | /api/access-requests/:id/reject | Reject request. | Owner |
| Citation | GET | /api/files/:id/citation | Generate/return APA/MLA/IEEE citation from file metadata. | Can view |
| Citation | PUT | /api/files/:id/citation | Update citation metadata. | Owner/Editor |
| Collections | GET | /api/collections | Second Wave: get collections. | Logged in |
| Notifications | GET | /api/notifications | Second Wave: get notifications. | Logged in |
