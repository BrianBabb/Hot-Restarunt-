DROP DATABASE IF EXISTS reservations_DB;

CREATE DATABASE reservations_DB;

USE reservations_DB;

CREATE TABLE reservations (
  id INT NOT NULL AUTO_INCREMENT,
  maindiner VARCHAR(45) NULL,
  cell VARCHAR(10) NULL,
  email VARCHAR(100) NULL,
  diners INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO reservations (maindiner, cell, email, diners)
VALUES ("Hal", "5555559000", "nobody@otacon.com", 5);

INSERT INTO reservations (maindiner, cell, email, diners)
VALUES ("Eli", "7777777777", "liquid@random.com", 4);

INSERT INTO reservations (maindiner, cell, email, diners)
VALUES ("Boss", "8888888888", "bigboss@patriot.com", 2);