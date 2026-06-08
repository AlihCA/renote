# FEATURE_SPECIFICATIONS.md

## Feature Planning Standard

Each feature should be evaluated using:

- Purpose
- User flow
- User actions
- Frontend page/components
- Backend API routes
- Database tables/fields
- Rules and restrictions
- Empty/loading/error states
- Acceptance criteria
- Assigned owner
- Dependencies

## MVP Feature Specifications

| Feature | Scope / Purpose | Owner | Priority |
| --- | --- | --- | --- |
| Authentication | Clerk sign up/login/logout, user sync to MySQL, protected routes, own dashboard. | Project Lead | High |
| User Roles & Trust Labels | Regular User, Faculty ✓, Institution ✓; trust labels: Community Resource, Faculty Published, Official Resource. | Project Lead | High |
| Dashboard | Welcome section, stats, recent repositories, recent files, recent summaries. | Project Lead | High |
| My Repositories | Owned repo management: create, edit, search, sort, grid/list, view count, share, archive, title-confirm delete. | Member 2 | High |
| Repository Workspace | Open repository, header, nested folders up to depth 6, files, upload, local search, file viewer, AI panel. | Member 3 | High |
| Folder Management | Create/open/rename/delete folders; max nesting depth 6; protect deletion when containing files. | Member 3 | High |
| File Management | Upload/preview/download/delete/generate summary; PDF, DOCX, TXT, PPTX; max file size 20 MB. | Member 3 | High |
| File Viewer | Preview file, details tab, AI summary tab, activity tab, citation button in details. | Member 3 + Member 4 | High |
| AI File Summarizer | Quick, Detailed, Key Points, Study Mode; save summary_mode; refinements: Make Shorter/More Detailed. | Member 4 + Lead | High |
| Summary History | View/open/delete/regenerate generated summaries. | Member 4 | High |
| Basic Search & Filter | Search title, description, tags, file names; full document text search is Second Wave. | Member 3 | High |
| Repository Visibility | ENUM visibility: public, restricted, private. | Member 2 | High |
| Shareable Repository Links | Copy link; link respects permissions and never grants edit access. | Member 2 | High |
| Basic Access Requests | Restricted repository request access; approve/reject; one pending request per user/repo. | Member 2 | High |
| Verified Institution Account | Manually assigned official Institution account for MVP; no admin portal required. | Project Lead | High |
| Open Publishing With Trust Labels | Registered users can publish; regular uploads labeled Community Resource; official uploads labeled Institution. | Member 2 | High |
| Repository View Counts | Count view when user opens repository page; one view per user per repo per day. | Member 2 | Medium |
| Citation Generator | File metadata-based APA, MLA, IEEE citation; copy button. | Member 4 | High |
| Manual Archive / Restore | Archive repository, restore, permanently delete with title confirmation; no separate archive table. | Member 2 | Medium |

## Key Feature Rules

### Repository Visibility

- `public` = anyone can view repository contents.
- `restricted` = users can discover limited metadata and request access.
- `private` = hidden and protected; only owner or approved users can access.

### Share Links

Shareable links never bypass permissions.

- Public link opens content.
- Restricted link shows preview and request access.
- Private link denies unauthorized users.

### AI Summary

Summary modes:

- Quick Summary
- Detailed Summary
- Key Points
- Study Mode: Important Concepts, Definitions, Review Notes

Refinement actions:

- Make Shorter
- Make More Detailed
- Focus on Key Concepts
- Focus on Definitions

### Folders

Folders may be nested up to 6 levels.

### File Upload

Allowed MVP file types:

- PDF
- DOCX
- TXT
- PPTX

Maximum file size: 20 MB.

### Citation

Citations are generated from file metadata, not repository metadata.
