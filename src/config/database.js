const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //atencion 

module.exports = mongoose.connect('mongodb://localhost/billingCycle', { useNewUrlParser: true })
//to run mongodb on linux run command: sudo service mongodb start