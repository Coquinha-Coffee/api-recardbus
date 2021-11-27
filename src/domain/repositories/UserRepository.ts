import { UserEntity } from "../entities/UserEntity";

export interface UserRepository {
    get: (email: string, password: string) => Promise<UserEntity>
    save: (user: UserEntity) => Promise<{ id: string }>
}
