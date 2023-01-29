
const express=require("express")
const app=express()

//this  for importing affirmations & days function which has switch statement
const affirmations = require('./public/js/affirmations')//importing affirmations from affirmations.j
const dayFun = require('./public/js/days')//import days from days.js
const getDate = require('./public/js/getDate')//import full date from getDate.js
////////////////////////////



app.set("view engine","ejs");//this for embeed js into html page(ejs)


app.use(express.static('public'));//this for displaying images/vedios/audio on html page




//this for displaying the year for the footer and for the header(I made it puplic to avoid repeatiotn and comment them out in app as a refrence)
let objectDate = new Date();
let year = objectDate.getFullYear();//for displaying 2023 in copyrights (footer )
console.log(year); // 2023
date=getDate()// date is coming from getDate.js
var aff=dayFun();//aff coming from importing daysFun from days.js
console.log("&&&&&&&&&&&&&&&&&&&&&&",aff)
//////////////////////////////////////////////////////////////////////
//get method just a refrence of how to send html file to browser
app.get("/affirmations", function(req,res){
    // console.log(__dirname) //o/p C:\Users\rafal\Desktop\node-express-practice\calculator-app

    res.sendFile(__dirname + "/index.html");//sendfile for sending html page and __dirname is instead of sending path of html page we use this way so when we deploy it will not have anyissue
    //we added + because __dirname gives all path untill the dir name and we want index , to add it by using + and now we have the full path
})

/////////////////////////////////////////



app.get("/",function(req,res){
//i made the puplic to use them in all app
//     let objectDate = new Date();
//     let year = objectDate.getFullYear();//for displaying 2023 in copyrights (footer )
//    console.log(year); // 2023
// date=getDate()// date is coming from getDate.js
// var aff=dayFun();//aff coming from importing daysFun from days.js
// console.log("&&&&&&&&&&&&&&&&&&&&&&",aff)

var newAff=[]
for(let i=0;i<12;i++){
    newAff.push(affirmations[i])
}

res.render("result",{newAff:newAff,date:date,aff:aff,year:year})
})



//////////////////////////////////////////////////////////////////////////////////////

app.get("/2",function(req,res){
var newAff=[]
for(let i=12;i<24;i++){
    newAff.push(affirmations[i])
}


res.render("more2",{newAff:newAff,date:date,aff:aff,year:year})
})

//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////

app.get("/3",function(req,res){



var newAff=[]
for(let i=24;i<36;i++){
    newAff.push(affirmations[i])
}


res.render("more3",{newAff:newAff,date:date,aff:aff,year:year})
})

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

app.get("/4",function(req,res){


var newAff=[]
for(let i=36;i<48;i++){
    newAff.push(affirmations[i])
}


res.render("more4",{newAff:newAff,date:date,aff:aff,year:year})
})

//////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////

app.get("/5",function(req,res){


var newAff=[]
for(let i=48;i<60;i++){
    newAff.push(affirmations[i])
}


res.render("more5",{newAff:newAff,date:date,aff:aff,year:year})
})

//////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////

app.get("/6",function(req,res){


    var newAff=[]
    for(let i=60;i<72;i++){
        newAff.push(affirmations[i])
    }
    
    
    res.render("more6",{newAff:newAff,date:date,aff:aff,year:year})
    })
    
    //////////////////////////////////////////////////////////////////////////////////////
app.listen(3000,function(){
    console.log("server started on port 3000")
});