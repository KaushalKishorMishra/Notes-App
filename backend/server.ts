const express = require('express');
const port = 5000;


import db from './models/index'
import { MainRoutes } from './routes/MainRoutes' 

const mainRoutes = new MainRoutes();

db.sequelize.sync().then(() => {
    mainRoutes.app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }); 
});