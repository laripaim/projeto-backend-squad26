create database sangue_laranja;

create table if not exists usuarios (
	  id serial primary key,
  	nome text not null,
  	email text not null unique,
    linkedin text,
    skills text not null,
    biografia text
);

alter table usuarios
add column senha text

alter table usuarios
add column foto text

alter table usuarios
add column cargo text