import express from 'express';
import morgan from 'morgan';
import  mysqlPool  from './config/db.js';  
import router from "./routes/employRoutes.js"

// Rest OBJ
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Test route
app.use("/api/v1/employe", router)
app.get('/test', (req, res) => {
  res.status(200).send('This is a test route');
});

//PORT
const PORT = 8080;

// Connecting to MySQL and starting the server
mysqlPool.query('SELECT 1')
  .then(() => {
    console.log('MySQL DB connected successfully');

    // Listen
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });