import mongoose from 'mongoose';

export default class Database {
    
   static init() {
       mongoose.connect(process.env.URL, { useNewUrlParser: true });
    }
}

