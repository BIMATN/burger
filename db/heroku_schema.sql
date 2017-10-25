CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)    
);