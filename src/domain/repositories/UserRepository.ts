import { UserEntity } from "../entities/UserEntity";

export interface UserRespository {
    get: (id: string) => Promise<UserEntity>
    save: (user: UserEntity) => Promise<{ id: string }>
}
