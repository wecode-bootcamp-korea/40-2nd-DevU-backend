-- migrate:up
CREATE TABLE book_contents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    content_url VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT book_contents_book_id_fkey FOREIGN KEY (book_id) REFERENCES books(id)
)
-- migrate:down
DROP TABLE book_contents;