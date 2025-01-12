import express from 'express';

//video näide:
// const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, Tere Maailm');
});
let posts = [
    {id: 1, title: 'Post 1', body: 'This is post 1'},
    {id: 2, title: 'Post 2', body: 'This is post 2'},
];
app.get('/api/posts', (req, res) => {
    res.json(posts);
});
app.listen(8000, ()=> console.log('Server running on port 8000'));