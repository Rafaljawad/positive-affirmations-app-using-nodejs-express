

var getFullDateVar=function getFullDate(){
   //this for getting all day/month/year and then var date will be the final format from combining all day &year&month 
    let objectDate = new Date();

    let day = objectDate.getDate();
   console.log(day); // 23

    let month = objectDate.getMonth();
   console.log("***************",month+1); // 8

    let year = objectDate.getFullYear();
   console.log(year); // 2023


    switch (month+1) {
    case 1:
    var monthWord="Januery"
    break;

    case 2:
    var monthWord="Feburery"
    break;

    case 3:
    var monthWord="March"
    break;

    case 4:
    var monthWord="April"
    break;

    case 5:
    var monthWord="May"
    break;

    case 6:
    var monthWord="Jun"
    break;

    case 7:
    var monthWord="July"
    break;

    case 8:
    var monthWord="August"
    break;

    case 9:
    var monthWord="September"
    break;

    case 10:
    var monthWord="October"
    break;

    case 11:
    var monthWord="November"
    break;

    case 12:
    var monthWord="December"
    

    }





    let date =(monthWord) +" "+ day + " " + year;
   console.log(date); // 07/23/2022

    return date;
}
module.exports=getFullDateVar;