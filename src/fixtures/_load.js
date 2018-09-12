import { connect } from 'pow-mongodb-fixtures';
// import * as config from 'config';
import MoviesFixtures from "./movies.fixtures";

const fixtures = connect('mongodb://localhost:27017/MoviesAppDB');

fixtures.clear(function(err) {
    if(err) throw err;
    console.log('Fixtures clear successful');

    fixtures.load(MoviesFixtures, (err) => {
        if (err) throw err;
        console.log('Movies fixtures loaded')
    });
});
