import AuthServices from "../services/auth.services";

export class AuthController {
    static auth(req, res) {
        AuthServices.auth(req.params.username)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(400).send(error)
            })
    }
}