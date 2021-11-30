import { db } from '..'
import { RechargeEntity } from '../../../../domain/entities/RechargeEntity'
import { RechargeRepository } from '../../../../domain/repositories/RechargeRepository'
import { generatorId } from '../../../../services/generatorId'

export class FirestoreRechargeRepository implements RechargeRepository {
    private readonly collection = db.collection('recharges-test')

    public async allPerCard(idCard: string) {
        return { status: '', data: [] }
    }

    public async save(recharge: RechargeEntity) {
        let status = 'success'
        const id = generatorId()
        let rechargeWithId = {}

        try {
            rechargeWithId = { ...recharge, id }
            await this.collection.add(rechargeWithId)
        } catch {
            console.error('ERRO: Ao salvar recarga no banco de dados')
            status = 'error'
            rechargeWithId = {}
        }

        return { status, data: rechargeWithId }
    }
}
