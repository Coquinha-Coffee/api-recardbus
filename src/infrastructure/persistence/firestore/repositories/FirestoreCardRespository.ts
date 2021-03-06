import { db } from '..'
import { CardEntity } from '../../../../domain/entities/CardEntity'
import { CardRepository } from '../../../../domain/repositories/CardRepository'
import { generatorId } from '../../../../services/generatorId'

export class FirestoreCardRepository implements CardRepository {
    private readonly collection = db.collection('cards-test')

    public async save(card: CardEntity) {
        const id = generatorId()
        let cardWithId = {}
        let status = 'success'

        try {
            cardWithId = { ...card, id }
            await this.collection.add(cardWithId)
        } catch {
            console.error('ERRO: Ao salvar cartao no banco de dados')
            status = 'error'
            cardWithId = {}
        }

        return {
            status,
            data: cardWithId,
        }
    }

    public async allPerUser(idUser: string) {
        let cards: CardEntity[] = []
        let status = 'success'

        try {
            const cardsDoc = await this.collection
                .where('idUser', '==', idUser)
                .get()

            cards = cardsDoc.docs.map((doc) => doc.data() as CardEntity)
        } catch {
            console.error(
                `ERRO: Na busca de cartoes do usuario com id ${idUser}`
            )
            status = 'error'
            cards = []
        }

        return { status, data: cards }
    }
}
