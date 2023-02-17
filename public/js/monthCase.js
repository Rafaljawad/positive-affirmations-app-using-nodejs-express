var monthCase=function (){
  //this for getting all day/month/year and then var date will be the final format from combining all day &year&month 
  let objectDate = new Date();
  let month = objectDate.getMonth();
 console.log("***************",month+1); // 8
 if(month+1==1){
      var start=0;
      var end=10;
      var obj={str:start,end:end}
 }

 return obj



}
module.exports=monthCase;