import { RolDTO } from "@/app/infraestructure/dto/rol.dto";

import { Rol } from "@/app/core/models/rol.model";

export class RolMapper {
    static toDomain(rolDTO: RolDTO): Rol {
        return new Rol(
            rolDTO.id,
            rolDTO.name,
            rolDTO.description,
            new Date(rolDTO.createdAt),
            new Date(rolDTO.updatedAt)
        )
    }

    static toDTO(domainRol: Rol): RolDTO {
        return {
            id: domainRol.id,
            name: domainRol.name,
            description: domainRol.description,
            createdAt: domainRol.createdAt,
            updatedAt: domainRol.updatedAt
        }
    }
}