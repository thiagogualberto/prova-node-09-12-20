import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class DeleteUserService {
  async execute({ id }: Request): Promise<void> {
    const usersRepository = getRepository(User);

    const usersExists = await usersRepository.findOne({
      where: {
        id
      }
    });

    if (!usersExists) {
      throw new AppError('User does not exist.');
    }

    await usersRepository.delete(id);

    return;
  }
}

export default DeleteUserService;
