import { connect } from 'pow-mongodb-fixtures';
// import * as config from 'config';
import MoviesFixtures from "./movies.fixtures";

// const fixtures = connect(MoviesAppDB);

const fixtures = connect('MoviesAppDB', {
    host: 'http://localhost:3001/movies/',
    port: 27017
});

fixtures.clear(function(err) {
    if(err) throw err;
    console.log('Fixtures clear successful');
});

fixtures.load(MoviesFixtures, (err) => {
    if (err) throw err;
    console.log('Movies fixtures loaded')
});



// //Files
// fixtures.load(__dirname + '/fixtures/users.js', cb);
//
// //Directories (loads all files in the directory)
// fixtures.load(__dirname + '/fixtures', callback);

// fixtures.clear('foo', function(err) {
// //     //Clears the 'foo' collection
// // });
// //
// // fixtures.clear(['foo', 'bar'], function(err) {
// //     //Clears the 'foo' and 'bar' collections
// // });