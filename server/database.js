const mongoose = require('mongoose');



mongoose.connect(`mongodb://${process.env.databaseCredentials}@ds219308.mlab.com:19308/pair-spinner`, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


