import { db } from '..'
import { CardEntity } from '../../../../domain/entities/CardEntity'
import { RechargeEntity } from '../../../../domain/entities/RechargeEntity'
import { RechargeRepository } from '../../../../domain/repositories/RechargeRepository'
import { generatorId } from '../../../../services/generatorId'

export class FirestoreRechargeRepository implements RechargeRepository {
    private readonly collectionRecharges = db.collection('recharges-test')
    private readonly collectionCards = db.collection('cards-test')

    public async allPerCard(idCard: string) {
        let recharges: RechargeEntity[] = []
        let status = 'success'

        try {
            const rechargesDoc = await this.collectionRecharges
                .where('idCard', '==', idCard)
                .get()

            recharges = rechargesDoc.docs.map(
                (doc) => doc.data() as RechargeEntity
            )

            // console.log(recharges)
        } catch {
            console.error(`ERRO: Ao buscar recargas do cartao com id ${idCard}`)
            status = 'error'
            recharges = []
        }

        return { status, data: recharges }
    }

    public async save(recharge: RechargeEntity) {
        let status = 'success'
        const uuid = generatorId()
        let rechargeWithId = {}

        try {
            rechargeWithId = { ...recharge, id: uuid }
            await this.collectionRecharges.add(rechargeWithId)

            const cardsDoc = await this.collectionCards
                .where('id', '==', recharge.idCard)
                .get()

            let idCardFirestore = ''
            let [updatedCard] = cardsDoc.docs.map((doc) => {
                idCardFirestore = doc.id
                return doc.data() as CardEntity
            })

            const updatedAmountTicket =
                recharge.amountTicket + updatedCard.amountTicket

            await this.collectionCards
                .doc(idCardFirestore)
                .update({ ...updatedCard, amountTicket: updatedAmountTicket })
        } catch {
            console.error('ERRO: Ao salvar recarga no banco de dados')
            status = 'error'
            rechargeWithId = {}
        }

        return { status, data: rechargeWithId }
    }
}
