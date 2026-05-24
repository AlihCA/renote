CREATE TABLE summaries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  repository_id INT NULL,
  folder_id INT NULL,
  file_id INT NULL,
  note_id INT NULL,
  summary_type ENUM('file', 'note', 'folder') NOT NULL,
  summary_mode ENUM('short', 'detailed', 'key_points') DEFAULT 'short',
  summary_content LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (repository_id) REFERENCES repositories(id) ON DELETE CASCADE,
  FOREIGN KEY (folder_id) REFERENCES folders(id) ON DELETE SET NULL,
  FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE CASCADE,
  FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE
);