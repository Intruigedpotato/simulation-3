create table users(
id serial primary key,
first_name varchar(40),
last_name varchar(40),
email varchar(40),
img text,
eye_color varchar(40),
hair_color varchar(40),
gender varchar(40),
hobby varchar(40),
birthdate timestamp
)