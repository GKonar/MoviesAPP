import AuthServices from "../services/auth.services";

export class AuthController {
    static auth(req, res) {
        AuthServices.auth(req.body.username, req.body.password)
            .then((token) => {
                res.status(200).send({token})
            })
            .catch(() => {
                res.status(401).send({message: "Wrong credentials. Please enter your username or password again."}).end()
            })
    }
}