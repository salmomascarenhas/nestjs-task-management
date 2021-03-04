import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() CreateTaskDto: CreateTaskDto): Task {

        return this.taskService.createTask(CreateTaskDto);
    }

    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            return this.taskService.getTasksWithFilter(filterDto);
        } else {
            return this.taskService.getAllTasks();
        }

    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id);
    }


    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus)
        : Task {

        return this.taskService.updateTaskStatus(id, status);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        this.taskService.deleteTask(id);
    }
}
