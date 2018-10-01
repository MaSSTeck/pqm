
export default {
  
    car: (root, { plateNumber }, { dataSources }) =>{
       return  dataSources.mvrpAPI.getACar(plateNumber)
    },
    
    cars: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllCars(),
  }