import { IsIn, IsNotEmpty, IsOptional, IsPassportNumber } from "class-validator";
import { TaskStatus } from "../tasks.model";

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}