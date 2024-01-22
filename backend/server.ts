const express = require('express');
const app = express();
const port = 3000;
import db from './models/index'

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }); 
});