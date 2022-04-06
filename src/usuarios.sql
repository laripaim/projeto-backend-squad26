create database sangue_laranja;

create table if not exists usuarios (
	id serial primary key,
  	nome text not null,
  	email text not null unique,
    skills text not null,
    linkedin text,
  	senha text not null,
    biografia text
);