import RegooonClient from './Client.js'
import xmls from './xmls.js'

const Regooon = class {
  url = 'https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc'
  key = 'abcde12345abcde12345'
  sid = null

  constructor (url, key) {
    if (url !== undefined) {
      this.url = url
    }

    if (key !== undefined) {
      this.key = key
    }

    this.client = this.createClient()

    if (this.sid === null) {
      this.sid = this.login()
    }
  }

  hello () {
    return 'hello'
  }

  createClient () {
    return new RegooonClient(this.url)
  }

  login () {
    const xml = xmls(this.url, 'Zaloguj', {
      fieldName: 'pKluczUzytkownika',
      fieldValue: this.key
    }, true)

    console.log(this.client.call(this.url, xml))
  }

  find (nip) {

  }

  fullReport (regonOrShortReport) {

  }

  fullReportByRegon (regon) {

  }
}

export default Regooon
