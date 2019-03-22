const xmlnsSoap = 'http://www.w3.org/2003/05/soap-envelope'
const xmlnsNs = 'http://CIS/BIR/2014/07'
const xmlnsNsPublic = 'http://CIS/BIR/PUBL/2014/07'
const xmlnsWsa = 'http://www.w3.org/2005/08/addressing'
const xmlnsActionPrefix = 'http://CIS/BIR/PUBL/2014/07/IUslugaBIRzewnPubl/'
const xmlnsActionPublicPrefix = 'http://CIS/BIR/2014/07/IUslugaBIR/'

export default (url, action, fields, isPublic) => {
  let xmls = '<soap:Envelope xmlns:soap="' + xmlnsSoap + '" xmlns:ns="' + (isPublic) ? xmlnsNsPublic : xmlnsNs + '">'
  xmls += '<soap:Header xmlns:wsa="' + xmlnsWsa + '">'
  xmls += '<wsa:To>' + url + '</wsa:To>'
  xmls += '<wsa:Action>' + (isPublic) ? xmlnsActionPublicPrefix : xmlnsActionPrefix + action + '</wsa:Action>'
  xmls += '</soap:Header>'
  xmls += '<soap:Body>'
  xmls += '<ns:' + action + '>'
  Object.keys(fields).reduce((current, previous) => {
    return previous + '<ns:' + current.fieldName + '>' + current.fieldValue + '</ns:' + current.fieldName + '>'
  }, xmls)
  xmls += '</ns:' + action + '>'
  xmls += '</soap:Body>'
  xmls += '<soap:Envelope>'

  return xmls
}
