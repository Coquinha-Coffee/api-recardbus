import { UserEntity } from '../entities/UserEntity'

export interface UserRepository {
    get: (email: string, password: string) => Promise<UserEntity>
    save: (email: string, password: string) => Promise<UserEntity>
}
