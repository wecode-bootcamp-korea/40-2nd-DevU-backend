-- migrate:up
CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bookshelf_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT order_items_bookshelf_id_fkey FOREIGN KEY (bookshelf_id) REFERENCES bookshelves(id)
)
-- migrate:down
DROP TABLE order_items;