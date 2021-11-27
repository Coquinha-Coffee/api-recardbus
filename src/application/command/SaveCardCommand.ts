import { CardEntity } from "../../domain/entities/CardEntity"
import { CardRepository } from "../../domain/repositories/CardRepository"

export class SaveCardCommand {
    private cardRepository: CardRepository

    constructor(cardRepository: CardRepository) {
        this.cardRepository = cardRepository
    }

    public async execute(card: CardEntity): Promise<{ id: string}> {
        return this.cardRepository.save(card)
    }
}
