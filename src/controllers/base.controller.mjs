export class BaseController {

    static info(req, res) {
        res.status(200).json({
            "author": "Grzegorz Konarski",
            "version": "1.0.0"
        });
    }
}