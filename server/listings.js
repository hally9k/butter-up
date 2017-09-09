import axios from 'axios'
import xml2js from 'xml2js'

// 821089 820692 820624 820271 820204 819475 819126 818926
export default (ctx, next) => {
    return axios.get('http://harcourts.co.nz/Listing/XML/821089').then(res => {
        xml2js.parseString(res.data, (err, result) => {
            if (err) {
                throw new Error(err)
            } else {
                ctx.body = result
            }

            return next()
        })
    })
}
