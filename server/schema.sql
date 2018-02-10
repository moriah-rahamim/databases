CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id int auto_increment,
  user_name varchar(25),
  primary key (user_id)
);

CREATE TABLE rooms (
  room_id int auto_increment,
  room_name varchar(25),
  primary key (room_id)
);

CREATE TABLE messages (
  message_id int auto_increment,
  text varchar(140),
  user_id int,
  room_id int,
  primary key (message_id),
  foreign key (user_id) references users(user_id),
  foreign key (room_id) references rooms(room_id)
);

/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

