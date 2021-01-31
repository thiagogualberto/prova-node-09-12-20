import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  name: string;
  username: string;
  email: string;
}

class UpdateUserService {
  async execute({ id, name, username, email }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    //Checks if the user's exists
    const usersExists = await usersRepository.findOne(id);

    if (!usersExists) {
      throw new AppError('User does not exist.');
    }

    //Email format validation
    const regexEmail = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);

    let formatEmail = regexEmail.test(email);

    if (!formatEmail){
      throw new AppError('Invalid email format.');
    }

    const userUpdate = await usersRepository.save({
      id,
      name,
      username,
      email
    });

    return userUpdate;
  }
}

export default UpdateUserService;
