import { FindOneOptions } from "typeorm";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  async all(request: Request, response: Response) {
    return this.userRepository.find();
  }

  // http://localhost:8080/user/61cb8827a45ace8fcf0ec1c1
  async one(request: Request, response: Response) {
    const id = parseInt(request.params.id, 10);
    return this.userRepository.findOneBy({ id: id});
  }

  async save(request: Request, response: Response) {
    return this.userRepository.save(request.body);
  }

  async remove(request: Request) {
    const id = parseInt(request.params.id);
    const userToRemove = await this.userRepository.findOneBy({ id: id });
    if (userToRemove) await this.userRepository.remove(userToRemove);
  }
}
