import { RechargeEntity } from "../entities/RechargeEntity";

export interface RechargeRepository {
    allPerCard: (idCard: string) => Promise<RechargeEntity[]>
    save: (recharge: RechargeEntity) => Promise<{ id: string}>
}
