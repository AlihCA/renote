# DATABASE_SCHEMA.md

## Database Name

`renote_db`

## Final Database Tables

| Table | Purpose | Key Columns |
| --- | --- | --- |
| users | Stores registered user profiles and role/trust data. | id, clerk_id, full_name, email, profile_image, role ENUM('user','faculty','institution'), verification_status, trust_label, institution_name, created_at, updated_at |
| repositories | Stores repository metadata and archive/visibility state. | id, user_id, title, description, slug, visibility ENUM('public','restricted','private'), repository_type, trust_label, view_count, is_archived, archived_at, archived_by, created_at, updated_at |
| repository_tags | Stores searchable tags for repositories. | id, repository_id, tag_name, created_at |
| folders | Stores nested folders inside repositories up to 6 levels. | id, repository_id, parent_folder_id nullable, name, depth, created_at, updated_at |
| files | Stores uploaded file metadata and citation metadata. | id, repository_id, folder_id nullable, user_id, original_name, stored_name, file_url, file_type, file_size, extracted_text, citation_title, citation_author, publication_year, publisher, source_url, doi, isbn, created_at, updated_at |
| summaries | Stores generated summaries and refinements. | id, user_id, repository_id, file_id, summary_mode ENUM('quick','detailed','key_points','study_mode'), summary_content, refinement_type nullable, created_at |
| collections | Second Wave: user-created boards for saved resources. | id, user_id, title, description, created_at, updated_at |
| collection_items | Second Wave: resource references inside collections. | id, collection_id, item_type ENUM('repository','file','summary'), item_id, created_at |
| notifications | Second Wave: database-backed notifications. | id, user_id, type, title, message, related_repository_id, related_user_id, is_read, created_at |
| access_requests | Stores restricted repository access requests. | id, repository_id, requester_id, owner_id, message, status ENUM('pending','approved','rejected','cancelled'), created_at, responded_at |
| repository_collaborators | Second Wave: stores repository viewer/editor access. | id, repository_id, user_id, role ENUM('viewer','editor'), invited_by, created_at |
| repository_views | Stores view tracking for repository statistics. | id, repository_id, user_id nullable, viewed_at |

## Important Enum Values

### repositories.visibility

```txt
public
restricted
private
```

### users.role

```txt
user
faculty
institution
```

### summaries.summary_mode

```txt
quick
detailed
key_points
study_mode
```

### access_requests.status

```txt
pending
approved
rejected
cancelled
```

### repository_collaborators.role

```txt
viewer
editor
```

## Archive Design

No separate archive table is needed.

Archive uses fields inside the `repositories` table:

```txt
is_archived
archived_at
archived_by
```

Archive hides repositories from active workspace but does not delete folders, files, or summaries.
