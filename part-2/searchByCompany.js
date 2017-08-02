const fs = require('fs')
const clientData = fs.readFileSync('./clients.json'.toString())
const parsedData = JSON.parse(clientData)
const clientCompany = process.argv[2]

const companyFinder = (company) => {
  console.log('Finding companies with name "'  + company + '"...')

  let matchingCompanies = parsedData.filter(obj => obj.company.toLowerCase().startsWith(company.toLowerCase()) === true)

  let companyResults = matchingCompanies.map(obj => ({
    "id": obj.id,
    "company": obj.company,
    "phone": obj.phone
  }))

  console.log(companyResults)
}

companyFinder(clientCompany)