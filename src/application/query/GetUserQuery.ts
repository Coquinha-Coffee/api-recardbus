import { UserEntity } from '../../domain/entities/UserEntity'
import { UserRepository } from '../../domain/repositories/UserRepository'

export class GetUserQuery {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    public async execute(email: string, password: string): Promise<UserEntity> {
        return await this.userRepository.get(email, password)
    }
}
