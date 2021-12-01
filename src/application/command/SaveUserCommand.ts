import { UserEntity } from '../../domain/entities/UserEntity'
import { UserRepository } from '../../domain/repositories/UserRepository'

export class SaveUserCommand {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    public async execute(email: string, password: string): Promise<UserEntity> {
        return await this.userRepository.save(email, password)
    }
}
