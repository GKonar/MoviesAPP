import mongoose from 'mongoose';
import  {}  from 'dotenv/config';

export default class Database {
    
   static init() {
       mongoose.connect(process.env.URL, { useNewUrlParser: true });
       
        // CONNECTION TEST
       // const db = mongoose.connection;
       // db.on('error', console.error.bind(console, 'connection error:'));
       // db.once('open', function() {
       //   console.log('We are connected!');
       // });
    }
}

