import express from "express";
import users from "./usersRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({
            code: 200,
            message: 'Servidor online!',
            data: 'Api para fazer login de usuários.'
        })
    })

    app.use(
        express.json(),
        users
    )
}

export default routes