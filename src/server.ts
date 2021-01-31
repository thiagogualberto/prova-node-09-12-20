import 'reflect-metadata';
import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

//Middlaware para tratativa de erro.
app.use( (err: Error, request:Request, response:Response, next:NextFunction) => {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
});

app.listen(3000, () => {
  console.log("server start at port 3000"); //the server object listens on port 3000
});
