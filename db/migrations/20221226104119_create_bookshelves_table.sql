-- migrate:up
CREATE TABLE bookshelves (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    online_price decimal(10,2) NOT NULL,
    CONSTRAINT bookshelves_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT bookshelves_book_id_fkey FOREIGN KEY (book_id) REFERENCES books(id)
)
-- migrate:down
DROP TABLE bookshelves;

