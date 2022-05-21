npm install
npm install mysql2@latest
npm install dotenv@latest

create schema if not exists db_belajar
show databases
drop schema if exists db_belajar

#create table
create table db_belajar.tb_user (idx int not null auto_increment, name_user varchar(32) not null, password varchar(64) not null, create_date varchar(32) not null, last_update varchar(32) null, primary key (idx), unique index name_user_unique (name_user))

# show tables

show tables

# cek schema

describe db_belajar.tb_user

# drop table

drop table if exists db_belajar.tb_user

# C create data

insert into db_belajar.tb_user (name_user, password, create_date) values ("rikian", sha1("s494tr4h4514..."), now())

# R read

select \* from db_belajar.tb_user

# U update data

update db_belajar.tb_user set name_user="rikian faisal", last_update=now() where (name_user="rikian" and password=sha1("s494tr4h4514..."))

# D delete data

delete from db_belajar.tb_user where (name_user="rikian faisal" and password=sha1("s494tr4h4514..."))

`By Rikian Faisal https://lawnsoor.com`
