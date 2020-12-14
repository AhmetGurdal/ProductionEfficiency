import { Requirements } from 'production-efficiency/models'

export interface Plant {
    name: string
    description: string
    requirements: Record<string, Array<Requirements>>
}
