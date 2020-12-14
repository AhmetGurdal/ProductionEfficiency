import { Requirements } from 'production-efficiency/models'
import { RequirementType } from 'production-efficiency/types'

export interface Plant {
    name: string
    description: string
    requirements: Record<RequirementType, Array<Requirements>>
}
