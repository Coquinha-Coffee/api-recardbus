import { RechargeEntity } from '../entities/RechargeEntity'

export interface RechargeRepository {
    allPerCard: (
        idCard: string
    ) => Promise<{ status: string; data: RechargeEntity[] }>
    save: (
        recharge: RechargeEntity
    ) => Promise<{ status: string; data: RechargeEntity }>
}
