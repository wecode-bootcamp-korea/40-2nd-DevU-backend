-- migrate:up
CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    book_id INT NOT NULL,
    bookshelf_id INT NOT NULL,
    order_status_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT order_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT order_items_book_id_fkey FOREIGN KEY (book_id) REFERENCES books(id),
    CONSTRAINT order_items_bookshelf_id_fkey FOREIGN KEY (bookshelf_id) REFERENCES bookshelves(id),
    CONSTRAINT order_items_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_statuses(id)
)
-- migrate:down
DROP TABLE order_items;

