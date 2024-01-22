const express = require('express');
const app = express();
const port = 5000;
import db from './models/index'

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }); 
});