const vehicleScrubber = () => {
 let p1 = apiCall('http://swapi.co/api/vehicles/')
 let p2 = apiCall('http://swapi.co/api/vehicles/?page=2')
 let p3 = apiCall('http://swapi.co/api/vehicles/?page=3')
 let p4 = apiCall('http://swapi.co/api/vehicles/?page=4')

 Promise.all([p1, p2, p3, p4]).then(obj => {
   return obj.reduce((acc, speciesSynopsis) => {
     speciesSynopsis.results.forEach((vehicle, index) => {
       acc[acc.length] = vehicle.name
     })
     return acc
   }, [])
 }).then((listOfVehicle) => {
   return listOfVehicle
 }).catch((e) => console.log(e))
}

const apiCall = (address) => {
 return fetch(address).then((response) => response.json())
}


export default vehicleScrubber
