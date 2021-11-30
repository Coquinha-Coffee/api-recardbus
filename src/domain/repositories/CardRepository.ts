import { CardEntity } from '../entities/CardEntity'

export interface CardRepository {
    save: (
        card: CardEntity
    ) => Promise<{ status: string; data: CardEntity | {} }>
    allPerUser: (
        idUser: string
    ) => Promise<{ status: string; data: CardEntity[] | [] }>
}
