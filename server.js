import http from 'http';
import fs from 'fs/promises';
import url from 'url'; //url module
import path from 'path';
//kõik need on core node.js moodulid = st. ei pea installima
const PORT = 8000;

//Get current path
// __filename //käesolev faili nimi teekonnaga
const __filename = url.fileURLToPath(import.meta.url); //annab faili url'i failile, mille sees ta on
// __dirname // annab käesoleva faili teekonna, milles sees viibin parasjagu
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async(req, res) => {
    //console.log(req.url);
    try{
        //check if GET req
    if(req.method === 'GET') {
        let filePath;
        if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not found');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Server Error');
    }
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});