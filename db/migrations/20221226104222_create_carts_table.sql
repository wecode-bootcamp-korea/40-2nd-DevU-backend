-- migrate:up
CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL, 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT carts_book_id_fkey FOREIGN KEY (book_id) REFERENCES books(id)
)
-- migrate:down
DROP TABLE carts;