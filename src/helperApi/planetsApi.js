const planetsScrubber = () => {
 let p1 = apiCall('http://swapi.co/api/planets/?page=1')
 let p2 = apiCall('http://swapi.co/api/planets/?page=2')
 let p3 = apiCall('http://swapi.co/api/planets/?page=3')
 let p4 = apiCall('http://swapi.co/api/planets/?page=4')
 let p5 = apiCall('http://swapi.co/api/planets/?page=5')
 let p6 = apiCall('http://swapi.co/api/planets/?page=6')
 let p7 = apiCall('http://swapi.co/api/planets/?page=7')


 Promise.all([p1, p2, p3, p4, p5, p6, p7]).then(obj => {
   return obj.reduce((acc, speciesSynopsis) => {
     speciesSynopsis.results.forEach((planets, index) => {
       acc[acc.length] = planets.name
     })
     return acc
   }, [])
 }).then((listOfPlanets) => {
   return listOfPlanets
 })
}

const apiCall = (address) => {
 return fetch(address).then((response) => response.json())
}


export default planetsScrubber
