import { User } from "../../domain/model/user.model";
import { UserEntity } from "src/user/user.constants";
import { EntitySchema } from "typeorm";

export const UserSchema = new EntitySchema<User>({
  name: UserEntity,
  target: User,
  columns: {
    id: {
      type: String,
      primary: true,
      generated: 'uuid'
    },
    username: {
      type: String
    },
    password: {
      type: String
    },
    email: {
      type: String
    }
  }
})