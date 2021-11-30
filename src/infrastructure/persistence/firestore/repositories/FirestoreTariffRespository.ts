import { db } from '..'
import { TariffEntity } from '../../../../domain/entities/TariffEntity'
import { TariffRepository } from '../../../../domain/repositories/TariffRepository'
import { generatorId } from '../../../../services/generatorId'

export class FirestoreTariffRepository implements TariffRepository {
    private readonly collection = db.collection('tariffs-test')

    public async allPerTypeCard(typeCard: string) {
        let tariffs: TariffEntity[] = []

        try {
            let tariffsDoc = await this.collection
                .where('type', '==', typeCard)
                .get()

            tariffs = tariffsDoc.docs.map((doc) => doc.data() as TariffEntity)
            tariffs = tariffs.sort((tariffA, tariffB) =>
                tariffA.amount > tariffB.amount ? 1 : -1
            )
        } catch {
            console.log('error')
            tariffs = []
        }

        return tariffs
    }

    public async save(tariffs: TariffEntity[]) {
        let sucess = true

        try {
            for (let i = 0; i < tariffs.length; i++) {
                const id = generatorId()
                await this.collection.add({ ...tariffs[i], id })
            }
        } catch {
            sucess = false
        }

        return { sucess }
    }
}
