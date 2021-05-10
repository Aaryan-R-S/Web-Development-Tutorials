//update doc -- single
db.nameofcollection.update({"_id" : ObjectId("5f8d5b0f9c90c5a0d9b3a336")}, {$set:{name: "Loly"}})

//update doc -- multi + insert
db.nameofcollection.update({age: {$gt:35}}, {$set:{quota: "Senior-Citizen"}}, {multi:true})
//or
db.nameofcollection.updateMany( {age: {$gt:35}}, {$set:{quota: "Senior-Citizen"}} )
//in absence of multi:true only first doc will be updated

//del doc
db.nameofcollection.remove({age: {$gt:49}, gender:"male"})

//clear a collection -- del all doc
db.nameofcollection.remove({}) 

//CRUD -- Create(insert), Read(search), Update & Delete(remove)