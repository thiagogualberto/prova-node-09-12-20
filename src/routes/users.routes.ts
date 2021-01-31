import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, username, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    username,
    email,
    password
  });

  delete user.password;

  return response.json({ user });
});

usersRouter.get('/', ensureAuthenticated, async (request, response) => {

  const showUser = new ShowUserService();

  const users = await showUser.execute();

  return response.json({ users });
});

usersRouter.put('/:id', ensureAuthenticated, async (request, response) => {
  const { name, username, email } = request.body;
  const { id } = request.params;

  const updateUser = new UpdateUserService();

  const user = await updateUser.execute({
    id,
    name,
    username,
    email
  });

  return response.json({ user });
});

usersRouter.delete('/:id', ensureAuthenticated, async (request, response) => {
  const { id } = request.params;

  const deleteUser = new DeleteUserService();

  const users = await deleteUser.execute({ id });

  return response.json({users});
});

export default usersRouter;
