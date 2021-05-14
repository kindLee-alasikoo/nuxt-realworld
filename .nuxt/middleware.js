const middleware = {}

middleware['authtic'] = require('../middleware/authtic.js')
middleware['authtic'] = middleware['authtic'].default || middleware['authtic']

middleware['unauthtic'] = require('../middleware/unauthtic.js')
middleware['unauthtic'] = middleware['unauthtic'].default || middleware['unauthtic']

export default middleware
