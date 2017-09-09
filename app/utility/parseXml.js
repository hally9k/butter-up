export default function parseXml(xml, arrayTags) {
    let dom = null

    if (window.DOMParser) {
        dom = new DOMParser().parseFromString(xml, 'text/xml')
    } else if (window.ActiveXObject) {
        dom = new ActiveXObject('Microsoft.XMLDOM')
        dom.async = false
        if (!dom.loadXML(xml)) {
            throw `${dom.parseError.reason} ${dom.parseError.srcText}`
        }
    } else {
        throw 'cannot parse xml string!'
    }

    function isArray(o) {
        return Object.prototype.toString.apply(o) === '[object Array]'
    }

    function parseNode(xmlNode, result) {
        if (xmlNode.nodeName == '#text') {
            let v = xmlNode.nodeValue

            if (v.trim()) {
                result['#text'] = v
            }

            return
        }

        let jsonNode = {}
        let existing = result[xmlNode.nodeName]

        if (existing) {
            if (!isArray(existing)) {
                result[xmlNode.nodeName] = [existing, jsonNode]
            } else {
                result[xmlNode.nodeName].push(jsonNode)
            }
        } else if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) {
            result[xmlNode.nodeName] = [jsonNode]
        } else {
            result[xmlNode.nodeName] = jsonNode
        }

        if (xmlNode.attributes) {
            var length = xmlNode.attributes.length

            for (var i = 0; i < length; i++) {
                let attribute = xmlNode.attributes[i]

                jsonNode[attribute.nodeName] = attribute.nodeValue
            }
        }

        var length = xmlNode.childNodes.length

        for (var i = 0; i < length; i++) {
            parseNode(xmlNode.childNodes[i], jsonNode)
        }
    }

    let result = {}

    if (dom.childNodes.length) {
        parseNode(dom.childNodes[0], result)
    }

    return result
}
