# BUILD_ORDER.md

## Recommended Development Roadmap

| Milestone | Task | Owner | Done When |
| --- | --- | --- | --- |
| Milestone 0 | Foundation setup | Project Lead | Project runs, routes/pages placeholders, layout, Clerk, DB connection. |
| Milestone 1 | Authentication + User Sync | Project Lead | Login/logout, protected routes, user profile in DB. |
| Milestone 2 | Dashboard Shell | Project Lead | Dashboard with placeholder then API data. |
| Milestone 3 | Repository CRUD | Member 2 | Create/edit/list/delete repositories; tags; visibility. |
| Milestone 4 | Archive + Share + Access Requests | Member 2 | Archive/restore, copy link, request/approve/reject. |
| Milestone 5 | Repository Workspace + Folders | Member 3 | Workspace page, nested folder CRUD up to depth 6. |
| Milestone 6 | File Upload + Viewer | Member 3 | Upload and preview files; supported types/size limits. |
| Milestone 7 | Search | Member 3 | Search title/description/tags/file names with visibility behavior. |
| Milestone 8 | AI Summary + History | Member 4 + Lead | Modes, refinements, save history. |
| Milestone 9 | Citation Generator | Member 4 | APA/MLA/IEEE from file metadata. |
| Milestone 10 | Integration Testing | All + Lead | End-to-end workflows and permission tests. |
| Milestone 11 | Deployment/Defense Prep | Lead | Demo readiness, docs, defense notes. |

## Important Build Rule

Do not build AI summary before file upload and file viewer work. Do not build access requests before repository visibility works.
