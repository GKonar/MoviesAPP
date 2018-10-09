import UsersServices from '../services/users.services';

export class UsersController {
    static addUser(req, res) {
        UsersServices.addUser(req.body)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    }
}