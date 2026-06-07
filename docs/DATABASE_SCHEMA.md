# ReNote Database Schema

Database Name:

```txt
renote_db
```

---

# Tables

## users

Stores user information from Clerk authentication.

### Columns
- id
- clerk_id
- full_name
- email
- profile_image
- created_at
- updated_at

---

## repositories

Stores repositories created by users.

### Columns
- id
- user_id
- title
- description
- color
- icon
- created_at
- updated_at

---

## folders

Stores folders inside repositories.

### Columns
- id
- repository_id
- parent_folder_id
- name
- created_at
- updated_at

---

## files

Stores uploaded file information.

### Columns
- id
- repository_id
- folder_id
- user_id
- original_name
- stored_name
- file_url
- file_type
- file_size
- extracted_text
- created_at
- updated_at

---

## summaries

Stores AI-generated summaries.

### Columns
- id
- user_id
- repository_id
- folder_id
- file_id
- note_id
- summary_type
- summary_mode
- summary_content
- created_at

---

# Relationships

```txt
users
 └── repositories
      └── folders
           ├── files
           └── notes

files
 └── summaries

notes
 └── summaries
```

---

# Future Database Features

- Recommendation system tables
- Activity tracking
- Search indexing
- Semantic embeddings
