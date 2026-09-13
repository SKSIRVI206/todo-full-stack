
import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

import todoRouter from './routes/todoRoutes.js'
import connectToDb from './dataBaseConnection.js'
const app = express();
const port = process.env.PORT || 4000;


app.use(express.json())

connectToDb()
app.use('/api',todoRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});