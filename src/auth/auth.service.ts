import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(userRepository)
        private userRepository: userRepository
    ) { }
}
