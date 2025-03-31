import { UserDTO } from '../../infraestructure/dto/user.dto';

import { User } from '@/app/core/models/user.model';

export class UserMapper {
    static toDomain(userDTO: UserDTO): User {
        return {
            id: userDTO.id,
            name: userDTO.name,
            email: userDTO.email,
            password: userDTO.password,
            role: userDTO.role,
            createdAt: new Date(userDTO.createdAt),
            updatedAt: new Date(userDTO.updatedAt)
        }
    }

    static fromDomaininToApi(domainUser: User): UserDTO {
        return {
            id: domainUser.id,
            name: domainUser.name,
            email: domainUser.email,
            password: domainUser.password,
            role: domainUser.role,
            createdAt: domainUser.createdAt,
            updatedAt: domainUser.updatedAt
        }
    }
}
