//Faili Süsteemi Moodul
// https://nodejs.org/docs/latest/api/fs.html
//import fs from "fs";
import fs from "fs/promises";

//readFile() - callback - Asynchronous version
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//readFileSync() - Syncronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

//readFile() - Promises .then()
// fs.readFile('./test.txt', 'utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

//readFile() - Async/Await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

//writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello I am writing to this file');
        console.log('File written to...');
    } catch (err) {
        console.log(err);
    }
};
 //appendFile() = LISATUD fail
 const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended to...');
    } catch (err) {
        console.log(err);
    }
};

writeFile();
appendFile();
readFile();

//Terminal % node fsDemo.js

//File written to...
//File appended to...
//Hello I am writing to this file
//This is appended text