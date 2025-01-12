import http from 'http';
import fs from 'fs/promises';
const PORT = process.env.PORT;

//video näide:
// const express = require('express');
//const app = express();

//app.get('/', (req, res) => {
   // res.send('Hello World, Tere Maailm');
//});
//let posts = [
   // {id: 1, title: 'Post 1', body: 'This is post 1'},
   // {id: 2, title: 'Post 2', body: 'This is post 2'},
//];
//app.get('/api/posts', (req, res) => {
    //res.json(posts);
//});
//app.listen(8000, ()=> console.log('Server running on port 8000'));

const server = http.createServer((req, res) => {
    //console.log(req.url);
    try{
        //check if GET req
    if(req.method === 'GET') {
        if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Home Page</h1>');
            } else if (req.url === '/about') {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>About Page</h1>');
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>404 Not Found</h1>');
            }
    } else {
        throw new Error('Method not allowed');
        }} catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>500 Internal Server Error</h1>');
    }});