# TESTING_CHECKLIST.md

## MVP Testing Checklist

| Feature | Test Case | Priority |
| --- | --- | --- |
| Authentication | Guest cannot open dashboard; logged-in user can. | High |
| User Sync | New Clerk user creates MySQL user record. | High |
| Badge/Trust | Faculty/Institution trust labels display in cards, search, headers. | Medium |
| Create Repository | Can create repo with title, visibility, tags. | High |
| Delete Repository | Delete button enabled only after exact title input. | High |
| Archive | Archived repo hidden from My Repositories and appears in Archives. | High |
| Restore | Restored repo returns to My Repositories. | High |
| Visibility Public | Public repo content can be opened by others. | High |
| Visibility Restricted | Restricted repo shows metadata and request access button. | High |
| Visibility Private | Private repo not searchable and direct link denies unauthorized access. | High |
| Access Request | Duplicate pending request is blocked. | High |
| Nested Folder | Can create folders up to depth 6; depth 7 is blocked. | High |
| File Upload | Supported files <=20MB upload; unsupported/oversized files blocked. | High |
| AI Summary | Logged-in user with file access can generate selected summary mode. | High |
| AI Guest Block | Guest cannot use summarizer. | High |
| Summary Refinement | Make Shorter/More Detailed produces new/refined output. | Medium |
| Citation | APA/MLA/IEEE copy buttons produce citation from file metadata. | Medium |
| Search | Search returns allowed results only; respects visibility. | High |
