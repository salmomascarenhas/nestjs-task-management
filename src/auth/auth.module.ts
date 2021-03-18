import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([userRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
