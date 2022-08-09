CREATE DATABASE db_links;

USE database_links;

    
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR (16) NOT NULL,
    password VARCHAR (50) NOT NULL,
    fullname VARCHAR (100) NOT NULL
 );

--  Alterar la tabla, poner el id como llave primaria  

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 1;

DESCRIBE users;

-- Links table 

CREATE TABLE links(
    id INT (11) NOT NULL,
    title VARCHAR (150) NOT NULL,
    url VARCHAR(250) NOT NULL,
    description TEXT,
    user_id INT (11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,-- cuando fue creado el campo y que se creara por defecto
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)-- Agregar la llave foranea 
);

ALTER TABLE links
    ADD PRIMARY KEY (id);

ALTER TABLE Links
    MODIFY id INT(11) AUTO_INCREMENT, AUTO_INCREMENT=1;