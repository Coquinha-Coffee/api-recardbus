import { TariffEntity } from '../entities/TariffEntity'

export interface TariffRepository {
    allPerTypeCard: (typeCard: string) => Promise<TariffEntity[]>
    save: (tariffs: TariffEntity[]) => Promise<{ sucess: boolean }>
}
