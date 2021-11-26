import { TariffEntity } from '../entities/TariffEntity'

export interface TariffRepository {
    get: (typeCard: string) => Promise<TariffEntity[]>
    save: (tariff: TariffEntity) => Promise<{ id: string }>
}
