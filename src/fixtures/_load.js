import { connect } from 'pow-mongodb-fixtures';
import  {}  from 'dotenv/config';
// import * as config from 'config';
import MoviesFixtures from "./movies.fixtures";


const fixtures = connect(process.env.URL);

fixtures.clear(function(err) {
    if(err) throw err;
    console.log('Fixtures clear successful');

    fixtures.load(MoviesFixtures, (err) => {
        if (err) throw err;
        console.log('Movies fixtures loaded')
    });
});
