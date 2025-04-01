import { TaskDTO } from "@/app/infraestructure/dto/task.dto";

import { Task } from "@/app/core/models/task.model";

export class TaskMapper {
    static toDomain(taskDTO: TaskDTO): Task {
        return new Task( 
            taskDTO.id,
            taskDTO.columnId,
            taskDTO.title,
            taskDTO.description,
            taskDTO.priority,
            taskDTO.asignedTo,
            taskDTO.limitDate,
            taskDTO.label,
            taskDTO.position,
            taskDTO.status,
            new Date(taskDTO.createdAt),
            new Date(taskDTO.updatedAt)
        )
    }

    static toDTO(domainTask: Task): TaskDTO {
        return {
            id: domainTask.id,
            columnId: domainTask.columnId,
            title: domainTask.title,
            description: domainTask.description,
            priority: domainTask.priority,
            asignedTo: domainTask.asignedTo,
            limitDate: domainTask.limitDate,
            label: domainTask.label,
            position: domainTask.position,
            status: domainTask.status,
            createdAt: domainTask.createdAt,
            updatedAt: domainTask.updatedAt
        }
    }
}