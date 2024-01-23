const express = require('express');

import bodyParser from 'body-parser';

const app = express();
const port = 5000;
import db from './models/index'

import noteRoute from './routes/noteRoutes'
import tagRoute from './routes/tagRoutes'

app.use(express.json());

// using body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/note', noteRoute);
app.use('/tag', tagRoute);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }); 
});