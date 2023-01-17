
const express=require("express")
const app=express()

//this  for importing affirmations & days function which has switch statement
const affirmations = require('./public/js/affirmations')//importing affirmations from affirmations.j
const dayFun = require('./public/js/days')//import days from days.js
const getDate = require('./public/js/getDate')//import full date from getDate.js
////////////////////////////



app.set("view engine","ejs");//this for embeed js into html page(ejs)


app.use(express.static('public'));//this for displaying images/vedios/audio on html page



//////////////////////////////////////////////////////////////////////
//get method just a refrence of how to send html file to browser
// app.get("/", function(req,res){
//     // console.log(__dirname) //o/p C:\Users\rafal\Desktop\node-express-practice\calculator-app

//     res.sendFile(__dirname + "/index.html");//sendfile for sending html page and __dirname is instead of sending path of html page we use this way so when we deploy it will not have anyissue
//     //we added + because __dirname gives all path untill the dir name and we want index , to add it by using + and now we have the full path
// })

/////////////////////////////////////////



app.get("/",function(req,res){

    let objectDate = new Date();
    let year = objectDate.getFullYear();//for displaying 2023 in copyrights (footer )
   console.log(year); // 2023


//////////////////////////////////////////////////////////////////////////////////////


date=getDate()// date is coming from getDate.js


///////////////////////////////////////////////////////


var aff=dayFun();//aff coming from importing daysFun from days.js
console.log("&&&&&&&&&&&&&&&&&&&&&&",aff)


////////////////////////////////////////////



res.render("result",{affirmations:affirmations,date:date,aff:aff,year:year})
})


app.listen(3000,function(){
    console.log("server started on port 3000")
});