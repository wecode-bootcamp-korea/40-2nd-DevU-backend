-- migrate:up
CREATE TABLE payments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    method VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    order_id VARCHAR(100) NOT NULL,
    order_name VARCHAR(200) NOT NULL,
    status VARCHAR(200) NULL,
    requested_at DATETIME NULL,
    approved_at DATETIME NULL
)
-- migrate:down
DROP TABLE payments;