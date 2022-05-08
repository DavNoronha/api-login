import users from "../models/User.js";

class UserController {
    static getUsers = (req, res) => {
        users.find((error, users) => {
            if(error) {
                console.log('GET USERS ERROR: ', error)
    
                res.status(500).send({
                    code: 500,
                    message: 'Server error.',
                    data: []
                })
            } else {
                res.status(200).send({
                    code: 200,
                    message: 'ok',
                    data: users
                })
            }
        })
    }

    static createUser = (req, res) => {
        const user = new users(req.body);

        user.save((error) => {
            if(error) {
                console.log('CREATE USER ERROR: ', error)
    
                res.status(500).send({
                    code: 500,
                    message: 'Server error.',
                    data: []
                })
            } else {
                res.status(201).send({
                    code: 201,
                    message: 'ok',
                    data: user.toJSON()
                })
            }
        })
    }
}

export default UserController