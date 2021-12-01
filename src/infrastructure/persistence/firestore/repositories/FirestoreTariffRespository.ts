import { db } from '..'
import { TariffEntity } from '../../../../domain/entities/TariffEntity'
import { TariffRepository } from '../../../../domain/repositories/TariffRepository'
import { generatorId } from '../../../../services/generatorId'

export class FirestoreTariffRepository implements TariffRepository {
    private readonly collection = db.collection('tariffs-test')

    public async allPerTypeCard(typeCard: string) {
        let tariffs: TariffEntity[] = []
        let status = 'success'

        try {
            let tariffsDoc = await this.collection
                .where('type', '==', typeCard)
                .get()

            const data = tariffsDoc.docs.map((doc) => doc.data() as TariffEntity)

            tariffs = data.sort((tariffA, tariffB) =>
                tariffA.amount > tariffB.amount ? 1 : -1
            )
        } catch {
            console.error('ERRO: Na busca por tarifas de acordo com o tipo do cartão')
            status = 'error'
            tariffs = []
        }

        return { status, data: tariffs }
    }

    public async save(tariffs: TariffEntity[]) {
        let status = 'success'
        let tariffsWithId = []

        try {
            for (let i = 0; i < tariffs.length; i++) {
                const id = generatorId()
                await this.collection.add({ ...tariffs[i], id })
                tariffsWithId.push({ ...tariffs[i], id })
            }
        } catch {
            console.error('ERRO: Ao cadastrar tarifas')
            status = 'error'
            tariffsWithId = []
        }

        return { status, data: tariffsWithId }
    }
}
