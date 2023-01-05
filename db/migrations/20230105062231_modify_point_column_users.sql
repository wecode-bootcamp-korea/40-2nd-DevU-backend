-- migrate:up
ALTER TABLE users MODIFY point decimal(10,2) NOT NULL DEFAULT 1000000.00


-- migrate:down

