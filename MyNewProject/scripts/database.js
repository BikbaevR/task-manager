// import * as SQLite from 'expo-sqlite';
// import {logger} from "./logger";

// const dbObject = async () => {
//     const db = await SQLite.openDatabaseAsync('users');
// }


// export const createDbIfNotExist = async () => {
//     await db.execAsync('create table if not exists user (id integer primary key not null, login varchar(20), password varchar(20))');
// }

// export const registerUser = async (login, password) => {
//     await db.execAsync(`insert into user (login, password) values(${login}, ${password})`)
// }

// export const checkLogin = async (login, password) => {
//     let result = await db.execAsync(`select * from users where username = ${login} and password = ${password}`);
//     logger.writeLog('checkLogin.result --> ' + result)
// }

// import Database from "better-sqlite3";
// import {logger} from "./logger";
//
// const db = new Database('users.db');
//
// export const createTableIfNotExists = () => {
//     db.exec(`
//     CREATE TABLE IF NOT EXISTS user (
//         id INTEGER PRIMARY KEY NOT NULL,
//         login TEXT,
//         password TEXT
//     );
// `);
// }
//
// export const registerUser = (login, password) => {
//     const stmt = db.prepare('INSERT INTO user (login, password) VALUES (?, ?)');
//     stmt.run(login, password);
//     logger.writeLog(`Пользователь ${login} зарегистрирован`)
// };
//
// export const checkLogin = (login, password) => {
//     const stmt = db.prepare('SELECT * FROM user WHERE login = ? AND password = ?');
//     const user = stmt.get(login, password);
//     logger.writeLog('Результат проверки:', user);
//     return user;
// };
// import SQLite from 'react-native-sqlite-storage';


