import mongoose from 'mongoose';

export default class Database {
    
   static init() {
       mongoose.connect('mongodb://localhost:27017/MoviesAppDB', { useNewUrlParser: true }); 
       
        //CONNECTION TEST
    //    const db = mongoose.connection; 
    //    db.on('error', console.error.bind(console, 'connection error:'));
    //    db.once('open', function() {
    //      console.log('We are connected!');
    //    });
    }
}

