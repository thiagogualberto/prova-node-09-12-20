import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, username, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    //Email format validation
    const regexEmail = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);

    let formatEmail = regexEmail.test(email);

    if (!formatEmail){
      throw new AppError('Invalid email format.');
    }

    //Checks if the user's email exists
    const usersExists = await usersRepository.findOne({
      where: { email },
    });

    if (usersExists) {
      throw new AppError('Email address already used.');
    }

    //Create the password hash
    const hashPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      username,
      email,
      password: hashPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
