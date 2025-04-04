import { UserDTO } from '../../infraestructure/dto/user.dto';

import { User } from '@/app/core/models/user.model';

export class UserMapper {
    static toDomain(userDTO: UserDTO): User {
        return new User (
            userDTO.id,
            userDTO.name,
            userDTO.email,
            userDTO.password,
            userDTO.role,
            userDTO.createdAt ? new Date(userDTO.createdAt) : undefined,
            userDTO.updatedAt ? new Date(userDTO.updatedAt) : undefined
        )
    }

    static toDTO(domainUser: User): UserDTO {
        return {
            id: domainUser.id,
            name: domainUser.name ?? '',
            email: domainUser.email ?? '',
            password: domainUser.password ?? '',
            role: domainUser.role ?? '',
            createdAt: domainUser.createdAt ? new Date(domainUser.createdAt) : undefined,
            updatedAt: domainUser.updatedAt ? new Date(domainUser.updatedAt) : undefined
        }
    }
}
