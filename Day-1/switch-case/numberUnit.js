let num = parseInt(process.argv[2]);
let unit = "";
switch(num){
    case 1:
        unit = "Unit";
        break;
    case 10:
        unit = "Ten";
        break;
    case 100:
        unit = "Hundred";
        break;
    case 1000:
        unit = "Thousand";
        break;
    case 10000:
        unit = "Ten Thousand";
        break;
    case 100000:
        unit = "Lakh";
        break;
    default:
        console.log("Invalid Number");
        break;
}
console.log(unit);