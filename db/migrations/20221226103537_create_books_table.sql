-- migrate:up
CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sub_category_id INT NOT NULL, 
    title VARCHAR(200) NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    published_date VARCHAR(200) NOT NULL,
    offline_price DECIMAL(10,2) NOT NULL,
    online_price DECIMAL(10,2) NOT NULL,  
    author VARCHAR(50) NOT NULL,
    publisher VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    publisher_review VARCHAR(2000) NOT NULL,
    list VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT books_sub_category_id_fkey FOREIGN KEY (sub_category_id) REFERENCES sub_categories(id)
)
-- migrate:down
DROP TABLE books;

