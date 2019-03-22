const soap = require('soap-everywhere')

const Client = class {
  url = 'https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc'
  key = 'abcde12345abcde12345'

  constructor (url, sid) {
    if (url !== undefined) {
      this.url = url
    }

    soap.createClient(this.url, (_err, client) => {
      client.Zaloguj({ pKluczUzytkownika: this.key }, (_err, result) => {
        console.log(result)
      })
    })
  }
}

export default Client
