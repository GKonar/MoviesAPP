import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String
});

// hash password before saving in DB
UserSchema.pre('save', function(next){
    const saltRounds = 10;
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

export const User = mongoose.model('User', UserSchema);