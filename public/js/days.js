
const affirmations = require('./affirmations')//importing affirmations from affirmations.j
var daysFun=function(){
    let objectDate = new Date();
    let day = objectDate.getDate();//return from 0-31

    for(let i=0;i<=31;i++){
        if(i===day){
          var dailyAff=affirmations[i].content;
          console.log("********************",dailyAff)
          break;
        }
    }
    return dailyAff;
}
daysFun()
module.exports=daysFun;