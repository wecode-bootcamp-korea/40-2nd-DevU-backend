-- migrate:up
CREATE TABLE order_statuses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(20) NOT NULL 
)
-- migrate:down
DROP TABLE order_statuses;

