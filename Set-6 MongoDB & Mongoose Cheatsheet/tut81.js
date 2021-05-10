//Open two shell & type
// mongod -- in first
// mongo -- in second
     //note for any string except special ones & no. use -- "value" not value

//All db in your pc
show dbs

//create or use db -- default test db
use (nameofdbsuwanttocreate)

//delete db
db.dropDatabase()

//create collection
db.createCollection("name of collection")

//delete collection
db.nameofcollection.drop()

//see collections
show collections

//insert documents--one
db.nameofcollection.insert({"name": "Hi", "age": 32, "stock":23435, "gender": "male"})

//multiple
db.nameofcollection.insert([{"name": "Yo", "age": 28, "stock":14435, "gender": "female"},{name: "Wass", age: 47, stock:70035, gender: "female"}, {name: "Re", age: 17, stock:17435, gender: "male"},{name: "Lol", age: 38, stock:49635, gender: "female"}])

//search
db.nameofcollection.find({})

//data look good
db.nameofcollection.find({}).pretty()

// filter searches
db.nameofcollection.find({},{name:1})   //only names  -- with ids
db.nameofcollection.find({},{name:1, _id:0})      //only name  -- no ids
db.nameofcollection.find({}).count()   //count no of entries in a collection
db.nameofcollection.find({name: "Re"})     //particular name search
db.nameofcollection.find({gender: "male"})     //particular gender search
db.nameofcollection.find({age:47})    //age is 47
db.nameofcollection.find({"_id" : ObjectId("5f8d58d252b04cf2264977e2")}) //id search
db.nameofcollection.find({name: /o/})         //conatining alphabet o
db.nameofcollection.find({name: /^W/})         //start with alphabet W (case- senstitive)
db.nameofcollection.find({age: {$lte:26}})         //lt , gt, lte , gte
db.nameofcollection.find({age: {$gte:36}})         //lt , gt, lte , gte
db.nameofcollection.find({age: {$lte:36}, gender: "female"})    //mixed filters
db.nameofcollection.find({gender: "female"}).sort({age:-1})    //sort 1 & -1 acend & descend
//Using OR
db.One.find({$or:[{"age": {$lte:36}, "gender": "female"}]})