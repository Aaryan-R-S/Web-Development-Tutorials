//npm in it
//npm install mongoose

//copy this code--

// establishing connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qwerty', {useNewUrlParser: true, useUnifiedTopology: true});
// here qwerty will be db where it will be saved

//NO USE--below
           const db = mongoose.connection;
           db.on('error', console.error.bind(console, 'connection error:'));
           db.once('open', function() {
             console.log("We're connected bro!")
           });
//NO USE--above


//schema
const kittySchema = new mongoose.Schema({
  name: String
});

//model
const Kitten = mongoose.model('arskitten', kittySchema);//arskitten(s) will be the name of collection


//insert a doc type--
const cat1 = new Kitten({ name: 'ARSMow1!' });
const cat2 = new Kitten({ name: 'ARSMow2!' });
const cat3 = new Kitten({ name: 'ARSMow3!' });


//save type code --
cat1.save(function (err, b) {
  if (err) return console.error(err);
  b.speak();
});
cat2.save(function (err, c) {
  if (err) return console.error(err);
  c.speak();
});
cat3.save(function (err, d) {
  if (err) return console.error(err);
  d.speak();
 });


//find
Kitten.find({name: 'ARSMow1!'}, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})