DROP DATABASE IF EXISTS bookClub_db;

CREATE DATABASE bookClub_db;

USE bookClub_db;


CREATE TABLE books (
  id INT NOT NULL,
  book_name VARCHAR(30) NOT NULL,
  author_name VARCHAR(30) NOT NULL,
  rating_score INT NOT NULL
);