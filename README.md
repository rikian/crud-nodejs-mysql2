```
git clone git@github.com:rikian/nodejs-crud-mysql2.git
```
```
npm init -y
```
```
npm install mysql2@latest
```
```
touch index.js
```
In the file index.js paste this code
```javascript
const { command } = require("./nodejs-crud-mysql2/server.js");

command();
```
set config sql in the /nodejs-crud-mysql2/server.js

run `node index`

# create database
in the terminal copy this
```
create schema if not exists db_belajar
```
in the file `/nodejs-crud-mysql2/index.js`, uncomment database and run again `node index`
```javascript
const pool = mysql2.createPool({
  host: "127.0.0.1", //localhost
  port: 3306, //default port
  user: "your user sql server",
  password: "your password sql server",
  // database: "db_belajar", //uncomment this after create db_belajar
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
```
- read databases
```
show databases
```
- delete databases
```
drop schema if exists db_belajar
```
- you need create again database

# create table
```
create table db_belajar.tb_user (idx int not null auto_increment, name_user varchar(32) not null, password varchar(64) not null, create_date varchar(32) not null, last_update varchar(32) null, primary key (idx), unique index name_user_unique (name_user))
```
- for read tables
```
show tables
```
- for read schema
```
describe db_belajar.tb_user
```
- for delete table
```
drop table if exists db_belajar.tb_user
```

# create data
- insert
```
insert into db_belajar.tb_user (name_user, password, create_date) values ("rikian", sha1("s494tr4h4514..."), now())
```
- for read all data
```
select \* from db_belajar.tb_user
```
- update data
```
update db_belajar.tb_user set name_user="rikian faisal", last_update=now() where (name_user="rikian" and password=sha1("s494tr4h4514..."))
```
- delete data
```
delete from db_belajar.tb_user where (name_user="rikian faisal" and password=sha1("s494tr4h4514..."))
```

u can try your query in the terminal
By `Rikian Faisal` https://lawnsoor.com
