-- migrate:up
CREATE TABLE bookshelves (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    CONSTRAINT bookshelves_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
)
-- migrate:down
DROP TABLE bookshelves;

