

'use strict'

let config = require('./config');
let app = require('./server');

app.listen(config.port);
console.log('Listening on http://localhost:' + config.port);
