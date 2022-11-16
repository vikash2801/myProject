let express = require('express')
let app = express();
let dotEnv = require('dotenv');
dotEnv.config();
let port = process.env.PORT || 3400;
let mongo = require('mongodb')
let mongoClient = mongo.MongoClient;
let mongoUrl = process.env.LiveMongo;

let db;

let bodyParser = require('body-parser');
//it's middleware b/w client and server
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



/* --------------------------------------------------------endpoints------------------------------------------------------------- */

app.get('/',(req,res)=>{
    res.send('You are welcome on Mongo Server')
})


//filter wrt course_id
app.get('/courseDetail/:courseId',(req,res)=>{
    let courseId = Number(req.params.courseId);
    let query = {};

    if(courseId){
        query = {course_id: courseId}
    }
    //output the result
    db.collection('course').find(query).toArray((err, result)=>{
        if (err) throw err;
        res.send(result);
    });
})

//filter wrt courseTopic
app.get('/courseDetail/filter/courseType/:course',(req,res)=>{
    let course = req.params.course;

    let query = {};

    if(course){
        query = {course_type: course}
    }
    //output the result
    db.collection('course').find(query).toArray((err, result)=>{
        if (err) throw err;
         res.send(result);        
    });
})

//Filter options
app.get('/courseDetail/filter/:courseCategory',(req,res) => {
    let query = {};
    let sort = {"course_details.cost":1}
    let courseCategory = req.params.courseCategory;
    let courseType = req.query.courseType;
    let lang = req.query.lang;
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);

    if(req.query.sort){
        sort={"course_details.cost":req.query.sort}
    }
    console.log("course_cat:" + courseCategory);
    if(hcost && lcost && courseType){
        query={
            "course_cat":courseCategory,
            "course_type":courseType,
            $and:[{"course_details.cost":{$gt:lcost,$lt:hcost}}]
        }
    } 
    else if(hcost && lcost){
        query={
            "course_cat":courseCategory,
            $and:[{"course_details.cost":{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(courseType){
        query={
            "course_cat":courseCategory,
            "course_type":courseType
        }
    }else{
        query={
            "course_cat":courseCategory
        }
    }
    db.collection('course').find(query).sort(sort).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//list the orders
app.get('/orders',(req,res)=>{
    let email = req.query.email;
    let query = {};
    if(email){
        query={email:email};
    }
    db.collection('orders').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//place Order
app.post('/placeOrder',(req,res) => {
    db.collection('orders').insertOne(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed');
    })
})

//connnection with db
mongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log("Error while configuration");
    db = client.db('Udemy');
    
})

app.listen(port,()=>{
    console.log(`Express is using port: ${port}`)
});