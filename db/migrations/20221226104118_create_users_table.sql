-- migrate:up
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    kakao_id BIGINT NULL,
    nickname VARCHAR(50) NULL, 
    email VARCHAR(100) NULL,
    profile_image VARCHAR(100) NULL,
    password binary(60) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    point decimal(10,2) NOT NULL,
    CONSTRAINT users_kakao_id_ukey UNIQUE (kakao_id),
    CONSTRAINT users_email_ukey UNIQUE (email)
)
-- migrate:down
DROP TABLE users;