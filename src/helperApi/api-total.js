import people from  './peopleApi.js'
import planets from './planetsApi.js'
import species from './speciesApi.js'
import vehicle from './vehicleApi.js'

const peopleData = people()
let planetsData = planets()
let speciesData = species()
let vehicleData = vehicle()


const apiTotal = {people:peopleData,planets:planetsData,species:speciesData,vehicle,vehicleData}

export default apiTotal
