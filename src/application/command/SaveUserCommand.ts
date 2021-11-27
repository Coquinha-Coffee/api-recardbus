import { UserEntity } from "../../domain/entities/UserEntity"
import { UserRepository } from "../../domain/repositories/UserRepository"

export class SaveUserCommand {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    public async execute(user: UserEntity): Promise<{ id: string}> {
        return this.userRepository.save(user)
    }
}
