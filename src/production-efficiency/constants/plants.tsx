import { Plant } from 'production-efficiency/models'

const tomato: Plant = {
    id: 0,
    name: 'Tomato',
    description: 'I am an aweful red tomato ;)',
    requirements: {
        minerals: [
            {
                name: 'Nitrogen',
                unit: '%',
                min: 2.28,
                max: 4.89,
                avg: 3.9
            },
            {
                name: 'Phosphorus',
                unit: '%',
                min: 0.26,
                max: 0.71,
                avg: 0.6
            },
            {
                name: 'Potassum',
                unit: '%',
                min: 3.06,
                max: 5.43,
                avg: 4.3
            },
            {
                name: 'Sulfur',
                unit: '%',
                min: 0.94,
                max: 4.15,
                avg: 2.3
            },
            {
                name: 'Calcium',
                unit: '%',
                min: 0.94,
                max: 4.15,
                avg: 2.3
            },
            {
                name: 'Magnesium',
                unit: '%',
                min: 0.21,
                max: 0.64,
                avg: 0.4
            },
            {
                name: 'Iron',
                unit: 'ppm',
                min: 79.8,
                max: 193.2,
                avg: 121.5
            },
            {
                name: 'Manganese',
                unit: 'ppm',
                min: 32.8,
                max: 225.7,
                avg: 95.5
            },
            {
                name: 'Copper',
                unit: 'ppm',
                min: 6.9,
                max: 69.2,
                avg: 18.0
            },
            {
                name: 'Zinc',
                unit: 'ppm',
                min: 27.3,
                max: 86.1,
                avg: 46.6
            }
        ]
    }
}

const fasulye: Plant = {
    id: 1,
    name: 'Fasulya',
    description: 'I am an aweful red tomato ;)',
    requirements: {
        minerals: [
            {
                name: 'Nitrogen',
                unit: '%',
                min: 2.28,
                max: 4.89,
                avg: 3.9
            },
            {
                name: 'Phosphorus',
                unit: '%',
                min: 0.26,
                max: 0.71,
                avg: 0.6
            },
            {
                name: 'Magnesium',
                unit: '%',
                min: 0.21,
                max: 0.64,
                avg: 0.4
            },
            {
                name: 'Iron',
                unit: 'ppm',
                min: 79.8,
                max: 193.2,
                avg: 121.5
            },
            {
                name: 'Manganese',
                unit: 'ppm',
                min: 32.8,
                max: 225.7,
                avg: 95.5
            },
            {
                name: 'Copper',
                unit: 'ppm',
                min: 6.9,
                max: 69.2,
                avg: 18.0
            },
            {
                name: 'Zinc',
                unit: 'ppm',
                min: 27.3,
                max: 86.1,
                avg: 46.6
            }
        ]
    }
}
export const PLANT_LIST: Plant[] = [tomato, fasulye]
