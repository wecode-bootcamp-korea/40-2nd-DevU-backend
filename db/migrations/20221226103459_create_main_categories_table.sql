-- migrate:up
CREATE TABLE main_categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
)
-- migrate:down
DROP TABLE main_categories;