import { connect } from 'pow-mongodb-fixtures';
import * as dotenv from 'dotenv';
dotenv.config();
import MoviesFixtures from './movies.fixtures';
import SerialsFixtures from './serials.fixtures';
import UsersFixtures from './users.fixtures';


const fixtures = connect(process.env.URL);

fixtures.clear(function(err) {
    if(err) throw err;
    console.log('Fixtures clear successful');

    fixtures.load(MoviesFixtures, (err) => {
        if (err) throw err;
        console.log('Movies fixtures loaded');
    });

    fixtures.load(SerialsFixtures, (err) => {
        if (err) throw (err);
        console.log('Serials fixtures loaded');
    });

    fixtures.load(UsersFixtures, (err) => {
       if (err) throw (err);
       console.log('Users fixtures loaded');
    });
});
