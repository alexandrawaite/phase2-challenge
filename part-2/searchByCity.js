const fs = require('fs')
const clientData = fs.readFileSync('./clients.json'.toString())
const parsedData = JSON.parse(clientData)
const clientCity = process.argv[2]

const cityFinder = city => {
  console.log('Finding clients in City "' + city + '"...')

  let matchingCities = parsedData.filter(obj => obj.city.toLowerCase() === city.toLowerCase())

  let cityResults = matchingCities.map(obj => ({
    'id': obj.id,
    'rep_name': obj.rep_name,
    'company': obj.company,
    'city': obj.city,
    'state': obj.state
  }))

  console.log(cityResults)
}

cityFinder(clientCity)