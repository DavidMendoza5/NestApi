import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './infraestructure/controller/user.controller';
import { UserSchema } from './infraestructure/schema/user.schema';
import { UserProviders } from './user.providers';

@Module({
    imports: [TypeOrmModule.forFeature([UserSchema])],
    controllers: [UserController],
    providers: [...UserProviders]
})
export class UserModule {}
