import { UnitofworkModule } from './share/unit-of-work/unitofwork.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UnitofworkModule, UserModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
