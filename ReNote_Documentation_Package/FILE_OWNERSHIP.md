# FILE_OWNERSHIP.md

## Ownership Table

| Owner | Allowed / Protected Files | Rule |
| --- | --- | --- |
| Alih | client/src/pages/auth/, client/src/pages/dashboard/, client/src/components/layout/, client/src/components/badges/, server/routes/userRoutes.js, server/controllers/userController.js | Owns protected/shared files and reviews PRs. |
| Marv | client/src/pages/repositories/, client/src/components/repositories/, client/src/components/access/, client/src/components/archive/, server/routes/repositoryRoutes.js, server/controllers/repositoryController.js, server/routes/accessRequestRoutes.js | Repository-level logic only. |
| Dani | client/src/pages/workspace/, client/src/pages/files/, client/src/components/folders/, client/src/components/files/, client/src/components/search/, server/routes/folderRoutes.js, server/routes/fileRoutes.js, server/routes/searchRoutes.js | Repository content-level logic only. |
| Cia | client/src/pages/summaries/, client/src/components/ai/, client/src/components/citations/, server/routes/summaryRoutes.js, server/controllers/summaryController.js, server/routes/citationRoutes.js | AI/citation logic and UI. |
| Protected Files | App.jsx, routes.jsx, MainLayout.jsx, Sidebar.jsx, Topbar.jsx, global.css, variables.css, utilities.css, server.js, app.js, db.js, migrations | Do not edit without project lead approval. |

## Protected Files

These files should only be edited by the Project Lead or with explicit approval:

- `App.jsx`
- `routes.jsx`
- `MainLayout.jsx`
- `Sidebar.jsx`
- `Topbar.jsx`
- `global.css`
- `variables.css`
- `utilities.css`
- `server.js`
- `app.js`
- `db.js`
- database schema/migrations

## Integration Rule

Feature integration should be done through agreed API routes, service files, and documented response formats rather than editing another member's feature files directly.
