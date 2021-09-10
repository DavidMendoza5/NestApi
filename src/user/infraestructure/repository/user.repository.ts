import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/share/repository/abstract.repository";
import { TransactionalRepository } from "src/share/unit-of-work/transactional.repository";
import { User } from "src/user/domain/model/user.model";
import { IUserRepository } from "src/user/domain/ports/user.repository.interface";
import { UserEntity } from "src/user/user.constants";

@Injectable()
export class UserRepository extends BaseRepository<User> implements IUserRepository {
  constructor(protected repository: TransactionalRepository) {
    super(repository, UserEntity);
  }
}