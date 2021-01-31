import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

//Endpoint de usuários
routes.use('/users', usersRouter);

//Endpoint de auteenticação
routes.use('/sessions', sessionsRouter);

export default routes;
