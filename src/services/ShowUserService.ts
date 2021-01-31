import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

class ShowUserService {
  async execute(): Promise<User[]> {
    const usersRepository = getRepository(User);

    const usersExists = await usersRepository.find({
      select: ["id", "name", "username", "email"],
    });

    if (!usersExists) {
      throw new AppError('No registered users.');
    }

    return usersExists;
  }
}

export default ShowUserService;
