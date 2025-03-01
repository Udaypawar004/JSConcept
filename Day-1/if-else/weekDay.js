let day = process.argv[2];
let weekDay = "";
if(day == 1){
    weekDay = "Sunday";
}else if(day == 2){
    weekDay = "Monday";
}else if(day == 3){  
    weekDay = "Tuesday";
}else if(day == 4){   
    weekDay = "Wednesday";
}else if(day == 5){    
    weekDay = "Thursday";
}else if(day == 6){    
    weekDay = "Friday";
}else if(day == 7){    
    weekDay = "Saturday";
}
console.log(weekDay);