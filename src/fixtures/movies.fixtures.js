import { createObjectId } from 'pow-mongodb-fixtures';

export default {
    movies: [
        {
            _id: createObjectId(),
            title: 'title',
            author: 'author',
            released: 'date',
            poster: 'posterUrl'
        },
    ]
};

// fixtures - load data from a JSON structure into the database