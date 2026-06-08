# PROJECT_SCOPE.md

## Final ReNote Description

ReNote is a web-based academic repository and knowledge management system that allows users to organize, publish, share, access, summarize, archive, and cite academic resources. It supports public, restricted, and private repositories, Faculty and Institution trust labels, AI-powered file summaries, citation generation, access requests, shareable repository links, and official institutional resources to help reduce information overload and improve academic resource management.

## MVP Scope

| Feature | Description | Owner | Priority |
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

## Second Wave Scope

| Feature | Description |
| --- | --- |
| Collections | Pinterest-board style saved resource boards; collections store references only, not duplicate files. |
| Saved Items | Save repository/file/summary for quick bookmarks. |
| Recent Views | Recently viewed repositories, files, summaries; clear recent views. |
| Notifications Page | Database notifications for access requests, approvals/denials, shared access, access removed. |
| Collaborators | Invite viewer/editor; owner keeps full control. |
| Activity Log | Track file/folder/summary/collaborator actions. |
| Repository Settings | Change visibility, manage requests, allowed users, citation metadata. |
| Advanced Access Controls | Cooldown, daily limits, block requester, disable requests per repository. |
| Trending Repositories | Based on view count and recent activity. |
| Recommended For You | Based on tags, recent views, saved items. |
| Advanced Filters | Visibility, owner type, trust label, date, file type. |
| Folder Summary | Generate summary from multiple files inside a folder. |
| Settings Page | Profile display, theme preference including Light/Dark/System, notification and privacy preferences. |

## Future Features

| Feature | Description |
| --- | --- |
| Semantic AI Search | Search by meaning using embeddings. |
| Advanced AI Recommendations | Recommend resources based on behavior and AI-analyzed topics. |
| Real-Time Notifications | Live request/collaborator/repository activity alerts. |
| File Version History | Track, restore, and compare previous file versions. |
| Advanced Collaboration | Comments, ratings, review notes, team editing. |
| Flashcards / Quiz / Reviewer Generator | Additional AI study tools. |
| Cold Storage / Backup Recovery | Cheaper storage for inactive files and restore window. |
| Automatic Repository Lifecycle | Active → Archived → Scheduled for Deletion → Recovery Period → Permanently Deleted. |
| Multiple Institution Accounts | Multiple official organizations and staff accounts. |
| Admin / Moderator Portal | Reports, verification, moderation, official resource management. |

## Removed / Not MVP

The Notes Editor feature has been removed from the project. The system focuses on uploaded files, repositories, AI summaries, citations, access control, and academic resource organization.

Features such as semantic AI search, full document search, flashcards, quiz generation, real-time notifications, automatic archive lifecycle, and admin portals are future enhancements only.
