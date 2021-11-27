import { TariffEntity } from '../entities/TariffEntity'

export interface TariffRepository {
    allPerTypeCard: (typeCard: string) => Promise<TariffEntity[]>
    save: (tariff: TariffEntity) => Promise<{ id: string }>
}
