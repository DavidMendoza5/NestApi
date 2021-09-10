import { IRead } from "src/share/repository/interfaces/read.interface.repository";
import { IWrite } from "src/share/repository/interfaces/write.interface.repository";
import { User } from "../model/user.model";

export interface IUserRepository extends IWrite<User>, IRead<User> {}