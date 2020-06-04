// DRUD (DB)
// Create
// Read
// Update
// Delete
// request.post('mi endpoint', miObjeto, () =>)
const request = require('request')
const newAuthor = (name, nat, bio, gen) => {
    var author = { name: name, nat: nat, bio: bio, gen: gen }
    const endpoint = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
    return new Promise((resolve, reject) => {
        
        request.post({ endpoint, data=author }, function optionalCallback(err, httResponse, body) {
            // console.log(httResponse.statusCode)
            if (httResponse.statusCode === 400) {
                reject(Error)
            } else {
                console.log('Uload successfill! server esponded with', body)
                resolve(author)
            }
        })
    })
}
newAuthor('samuel', 'US', 'blalbalba', 'M')
    .then((author) => console.log(author))
    .catch((Error) => console.log(Error))
