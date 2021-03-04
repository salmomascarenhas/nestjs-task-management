import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ];
    transform(value: any) {
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} value is an invalid status.`)
        }

        return value;
    }

    private isStatusValid(status: any) {
        //Procura a primeira ocorrência dentro do vetor e retorna o index.
        const idx = this.allowedStatuses.indexOf(status);
        //Se diferente de -1, então encontrou.
        return idx !== -1;
    }
}