import { ProjectDTO } from "@/app/infraestructure/dto/projects.dto";

import { Project } from "@/app/core/models/projects.model";

export class ProjectMapper {
    static toDomain(projectDTO: ProjectDTO): Project {
        return new Project(
            projectDTO.id,
            projectDTO.name,
            projectDTO.description,
            projectDTO.status,
            projectDTO.startDate,
            projectDTO.endDate,
            projectDTO.createdBy,
            new Date(projectDTO.createdAt),
            new Date(projectDTO.updatedAt)
        ) 
    }

    static toDTO(domainProject: Project): ProjectDTO {
        return {
            id: domainProject.id,
            name: domainProject.name,
            description: domainProject.description,
            status: domainProject.status,
            startDate: domainProject.startDate,
            endDate: domainProject.endDate,
            createdBy: domainProject.createdBy,
            createdAt: domainProject.createdAt,
            updatedAt: domainProject.updatedAt
        }
    }
}