import { createServer } from 'http';
const PORT = process.env.PORT || 8000;

const users = [
    {
        id: 1,
        name: 'Janne Saag'
    },
    {
        id: 2,
        name: 'Sam Smith'
        },
        {
        id: 3,
        name: 'John Smith'
    }]

    //logger middleware
    const logger = (req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    };
    //JSON middleware
    const json = (req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        next();
    }
    //Route handler for  GET /api/users
    const getUsersHandler = (req, res) => {
        res.write(JSON.stringify(users));
        res.end();
    };
    //Route handler for GET /api/users/:id
    const getUserByIdHandler = (req, res) => {
        const id = req.url.split('/')[3];
        const user = users.find((u) => u.id === parseInt(id));

        if (user) {
            res.write(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'User not found'}));
        }
            res.end();
        }
        //Not found handler
        const notFoundHandler = (req, res) => {
            res.statusCode = 404;
            res.write(JSON.stringify({ message: 'Route not found' }));
            res.end();
        };
    const server = createServer((req, res) => {
        if (req.url === '/api/users' && req.method === 'GET') {
            res.setHeader ( 'Content-Type', 'application/json' );
            res.write(JSON.stringify(users));
            res.end();
        } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            const id = req.url.split('/')[3];
            const user = users.find((u) => u.id === parseInt(id));
            res.setHeader('Content-Type', 'application/json');
            if (user) {
                res.write(JSON.stringify(user));
            } else {
                res.statusCode = 404;
                res.write(JSON.stringify({ message: 'User not found' }));
            }
            res.end();
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 404;
                res.write(JSON.stringify({ message: 'Route not found' }));
                res.end();
        }
    });

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });