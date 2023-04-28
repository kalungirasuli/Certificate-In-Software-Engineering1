const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const config=require('./config/database.js');
const path=require('path');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//this the database configuration
mongoose.connect(config.database,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);
let db=mongoose.connection;
db.once('open',function(){
    console.log('Connected to MongoDB');
})
db.on('error',function(err){
    console.log(err);
})
//this are the static forms
app.use(express.static(path.join(__dirname,'public')));
//this the views for the register form
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//this the imported routes
const Reg=require('./routes/register');
//this the route for the home register form
app.use('/',Reg)

//this the port for the server
const port=3000;
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
