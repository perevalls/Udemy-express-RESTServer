const {request, response} = require('express');


class UsersController {

    constructor () {
        
    }

    usersGet(req = request, res = response)  {

        const {q, name, apikey} = req.query

        res.json({
            msg: "get API - controller",
            q,
            name,
            apikey
        });
    };

    usersPost(req, res = response) {

        const {name, age} = req.body;

        res.json({
            msg: "post API - controller",
            name,
            age
        });
    };

    usersPut(req, res = response) {

        const id = req.params.id;

        res.json({
            msg: "put API - controller",
            id
        });
    };

    usersPatch(req, res = response) {
        res.json({
            msg: "patch API - controller"
        })
    };

    usersDelete(req, res = response) {
        res.json({
            msg: "delete API - controller"
        })
    };
}


module.exports = UsersController;