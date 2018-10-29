import UserServices from '../services/user.services';

export class UserController {
    static addUser(req, res) {
        UserServices.addUser(req.body)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    }

    static getUserByUsername(req, res) {
        UserServices.getUserByUsername(req.params.username)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    }
}