import { CardEntity } from "../../domain/entities/CardEntity";
import { CardRepository } from "../../domain/repositories/CardRepository";

export class GetCardsPerUserQuery {
    private cardRepository: CardRepository

    constructor(cardRespository: CardRepository) {
        this.cardRepository = cardRespository
    }

    public async execute(idUser: string): Promise<CardEntity[]> {
        return await this.cardRepository.allPerUser(idUser)
    }
}
