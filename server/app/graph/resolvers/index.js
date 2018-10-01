import CarResolver from '../resolvers/car-resolver'
export const resolvers = {

    Car: {
        vehicleStatus: ({ status }) => status,
        yearOfManufacture: ({ productionYear }) => productionYear,
    },

    Query: {
        cars: CarResolver.car,
        cars: CarResolver.cars,
    },
}
