-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database urbano;

use urbano;

create table usuario (
	idUsuario int primary key auto_increment,
	nome varchar(255),
	email varchar(255) unique,
	senha varchar(255)
);

create table estilo (
	idEstilo int primary key auto_increment,
    nome varchar(255) not null,
    descricao varchar(255)
)auto_increment = 1000;

create table resultado (
	idResultado int auto_increment,
    fkUsuario int,
    fkEstilo int,
    dtRealizacao datetime default current_timestamp,
    primary key (idResultado, fkUsuario, fkEstilo),
		constraint fkResultadoUsuario foreign key (fkUsuario)
			references usuario(idUsuario),
		constraint fkResultadoEstilo foreign key (fkEstilo)
			references estilo(idEstilo)
)auto_increment = 2000;

insert into estilo (nome, descricao) values
	('ESPORTIVO', 'Estilo mais despojado para quem gosta de conforto acima de tudo, roupas mais práticas e casuais.'),
	('TRADICIONAL', 'Estilo para pessoas mais conservadoras na hora de se vestir, roupas clássicas e atemporais.'),
	('ELEGANTE', 'Estilo para pessoas antenadas nas tendências, mas sem deixar de lado a elegância usando roupas mais sofisticadas.'),
	('ROMÂNTICO', 'Estilo leve e delicado para pessoas românticas e que trazem para seu visual peças fluidas e soltas.'),
	('SEXY', 'Estilo mais "sensual", algo para pessoas que gostam da sensação de empoderamento que roupas que valorizam o corpo trazem.'),
	('CRIATIVO', 'Estilo mais "experimental", para pessoas que na hora de se vestir gostam de testar diferentes tipo sde combinação.'),
	('DRAMÁTICO', 'Estilo urbano, que apesar de mais "minimalista", é ousado e forte, muita personalidade e peças pesadas.');
