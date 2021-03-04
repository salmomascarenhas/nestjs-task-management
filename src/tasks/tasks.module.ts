import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule { }
