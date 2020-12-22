import { Requirements } from 'production-efficiency/models'
import { RequirementType } from 'production-efficiency/types'

export interface Plant {
    id: number
    name: string
    description: string
    requirements: Record<RequirementType, Array<Requirements>>
}
