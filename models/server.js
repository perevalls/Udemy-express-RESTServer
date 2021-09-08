const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // kMiddlewares
        this.middlewares();

        // Routes of my app
        this.routes();
    }

    middlewares() {
        
        // CORS
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use(express.json());

        // public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port', this.port);
        });
    }

}

module.exports = Server;