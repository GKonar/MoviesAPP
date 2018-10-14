import * as jwt from 'jsonwebtoken';
import UserServices from "./user.services";

export default class AuthServices {
    static auth(username, password) {
        return new Promise((resolve, reject) => {
            UserServices.getUserByUsername(username)
                .then((user) => {

                    user.comparePassword(password, (err, isMatch) => {
                        if (err) reject(err);
                        if (!isMatch) reject(false);

                        const token = jwt.sign({user} , 'shhhhh');
                        resolve(token);
                    })

                }).catch((err) => {
                reject(err);
            });

        })
    }
}


// authenticate: function(req, res, next) {
//     userModel.findOne({email:req.body.email}, function(err, userInfo){
//         if (err) {
//             next(err);
//         } else {
//             if(bcrypt.compareSync(req.body.password, userInfo.password)) {
//                 const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
//                 res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
//             }else{
//                 res.json({status:"error", message: "Invalid email/password!!!", data:null});
//             }