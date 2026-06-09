# BUILD_ORDER.md

## Recommended Development Roadmap

| Order | Task | Phase | Owner | Depends On |
| --- | --- | --- | --- | --- |
| 1 | Setup project folders: client, server, docs | Setup | Alih | None |
| 2 | Install dependencies and configure scripts | Setup | Alih | Task 1 |
| 3 | Create global styles and routes | Frontend Foundation | Alih | Task 1 |
| 4 | Setup Clerk authentication UI | Auth | Alih | Task 3 |
| 5 | Create dummy data files | Frontend Foundation | All Members | Task 3 |
| 6 | Build dashboard UI with dummy data | Dashboard | Alih | Task 5 |
| 7 | Build repository CRUD UI with dummy data | Repositories | Marv | Task 5 |
| 8 | Build folder CRUD UI with dummy data | Folders | Marv | Task 7 |
| 9 | Build file upload UI and file viewer with dummy data | Files | Dani | Task 5 |
| 10 | Build AI summary UI and summary history with dummy data | AI UI | Cia | Task 5 |
| 11 | Build search UI with dummy data | Search | Dani | Task 5 |
| 12 | Setup MySQL database schema | Backend | Alih + All | Task 2 |
| 13 | Connect repository backend | Backend | Marv | Task 12 |
| 14 | Connect folder backend and access request backend | Backend | Marv | Task 13 |
| 15 | Connect repository view tracking | Backend/Dashboard | Alih + Marv | Task 13 |
| 16 | Connect file upload backend/S3 | Backend | Dani | Task 12 |
| 17 | Connect search backend | Backend | Dani | Task 13 + Task 16 |
| 18 | Connect AI file summarizer and summary citations | AI | Cia | Task 16 |
| 19 | Replace dummy data with API services | Integration | All Members | Tasks 13–18 |
| 20 | Final testing and bug fixing | Testing | All Members | Task 19 |
| 21 | Deployment preparation | Deployment | Alih + All | Task 20 |

## Important Build Rules

- Do not build AI summary before file upload and file viewer work.
- Do not build access requests before repository visibility works.
- Do not build collections, archive, notifications, or settings before the MVP is stable.
- Use dummy data first, then replace dummy data with service/API calls.
- Shared files must be reviewed before merging.
