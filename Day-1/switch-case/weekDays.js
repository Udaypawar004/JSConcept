let day = process.argv[2];
let weekDay = "";
switch(day){
    case "1":
        weekDay = "Sunday";
        break;
    case "2":
        weekDay = "Monday";
        break;
    case "3":
        weekDay = "Tuesday";
        break;
    case "4":
        weekDay = "Wednesday";
        break;
    case "5":
        weekDay = "Thursday";
        break;
    case "6":
        weekDay = "Friday";
        break;
    case "7":
        weekDay = "Saturday";
        break;
    default:
        weekDay = "Invalid Input";
}
console.log(weekDay);