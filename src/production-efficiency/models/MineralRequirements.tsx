import { Requirements } from 'production-efficiency/models'

export interface MineralRequirements extends Requirements {
    unit: string
    min: number
    max: number
    average: number
}
