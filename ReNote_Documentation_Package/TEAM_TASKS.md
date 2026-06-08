# TEAM_TASKS.md

## Final Team Ownership

| Owner | Feature Area | Responsibilities |
| --- | --- | --- |
| Alih | Foundation, Authentication, Layout, Dashboard Shell, User Badges, AI Architecture, Code Review | Project setup; folder structure; global styles; Clerk; user sync; protected routes; layout; dashboard shell; badges; API format; AI rules; PR review. |
| Mrvn| Repository Management, Visibility, Share Links, Access Requests, Archive | Repository CRUD; My Repositories; visibility; sharing; basic access request; archive/restore; delete confirmation. |
| Dani | Repository Workspace, Folders, File Upload, File Viewer, Search | Workspace UI; nested folders; file upload/preview/download/delete; local search/filter. |
| Cia | AI Summary UI, Summary History, Citation Generator, AI Integration Support | Summary panel; modes/refinements UI; summary history; citations; AI API support with Lead. |

## Branch Names

| Owner | Branch |
|---|---|
| Alih | `feature/foundation-auth-layout` |
| Mrvn | `feature/repository-management-access` |
| Dani | `feature/workspace-files-search` |
| Cia | `feature/ai-summary-citation` |

## Team Rules

- No direct push to `main`.
- All development goes through `dev`.
- Pull latest `dev` before coding.
- Each member works inside assigned feature folders.
- Shared/protected files require Project Lead approval.
- Pull requests must be reviewed before merging.
- A feature is not done until UI, API, database, loading states, error states, and permission checks are working.
