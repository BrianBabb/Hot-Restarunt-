DROP DATABASE IF EXISTS reservations_DB;

CREATE DATABASE reservations_DB;

USE reservations_DB;

CREATE TABLE reservations (
  id INT NOT NULL AUTO_INCREMENT,
  maindiner VARCHAR(45) NULL,
  cell VARCHAR(10) NULL,
  diners INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO reservations (maindiner, cell, diners)
VALUES ("Hal", 5555559000, 5);

INSERT INTO reservations (maindiner, cell, diners)
VALUES ("Eli", 7777777777, 4);

INSERT INTO reservations (maindiner, cell, diners)
VALUES ("Boss", 8888888888, 2);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);