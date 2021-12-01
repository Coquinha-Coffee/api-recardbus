import { TariffEntity } from '../entities/TariffEntity'

export interface TariffRepository {
    allPerTypeCard: (
        typeCard: string
    ) => Promise<{ status: string; data: TariffEntity[] }>

    save: (
        tariffs: TariffEntity[]
    ) => Promise<{ status: string; data: TariffEntity[] }>
}
