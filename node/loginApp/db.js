let mongoose = require('mongoose');
let MongoURL = "mongodb://localhost:27017"
let LiveMongo = "mongodb+srv://test:test123@cluster0.r3dnnpk.mongodb.net/?retryWrites=true&w=majority"

//let db = "sepIntern"
let db = "loginData"
mongoose.connect(`${LiveMongo}/${db}`);