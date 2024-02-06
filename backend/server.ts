const express = require('express');
import dotenv from 'dotenv';

const port = 5000;


import db from './models/index'
import { MainRoutes } from './routes/MainRoutes' 


dotenv.config();
const mainRoutes = new MainRoutes();


db.sequelize.sync().then(() => {
    mainRoutes.app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }); 
});