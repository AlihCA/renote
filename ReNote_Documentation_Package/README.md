# ReNote

ReNote is a web-based academic repository and knowledge management system that allows users to organize, publish, share, access, summarize, archive, and cite academic resources. It supports public, restricted, and private repositories, Faculty and Institution trust labels, AI-powered file summaries, citation generation, access requests, shareable repository links, and official institutional resources to help reduce information overload and improve academic resource management.

## Core Capstone Focus

ReNote is designed to address academic information overload through:

- Repository-based learning resource organization
- Public, restricted, and private repository visibility
- Shareable links with permission protection
- Access request workflow
- AI-powered file summarization
- Summary history
- Citation generation
- Trust labels for Community, Faculty, and Institution resources

## Tech Stack

### Frontend
- React + Vite
- React Router DOM
- Clerk

### Backend
- Node.js
- Express.js
- MySQL

### Storage and AI
- Cloud file storage
- OpenAI API for summarization

## Project Phases

### MVP
The MVP contains the required features for the capstone prototype.

### Second Wave
The Second Wave contains planned improvements after MVP stability.

### Future Features
Future Features are not part of the current build and should be written as future enhancement scope.

## Final Team Split

| Owner | Feature Area | Responsibilities |
| --- | --- | --- |
| Project Lead / You | Foundation, Authentication, Layout, Dashboard Shell, User Badges, AI Architecture, Code Review | Project setup; folder structure; global styles; Clerk; user sync; protected routes; layout; dashboard shell; badges; API format; AI rules; PR review. |
| Member 2 | Repository Management, Visibility, Share Links, Access Requests, Archive | Repository CRUD; My Repositories; visibility; sharing; basic access request; archive/restore; delete confirmation. |
| Member 3 | Repository Workspace, Folders, File Upload, File Viewer, Search | Workspace UI; nested folders; file upload/preview/download/delete; local search/filter. |
| Member 4 | AI Summary UI, Summary History, Citation Generator, AI Integration Support | Summary panel; modes/refinements UI; summary history; citations; AI API support with Lead. |

## Development Rule

Each member must work only inside assigned feature folders. Shared files and another member's owned files should not be edited without approval from the Project Lead or file owner.
