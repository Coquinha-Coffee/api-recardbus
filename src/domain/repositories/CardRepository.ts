import { CardEntity } from '../entities/CardEntity'

export interface CardRepository {
    save: (card: CardEntity) => Promise<CardEntity>
    allPerUser: (idUser: string) => Promise<CardEntity[]>
}
