let number = process.argv[2];

let unit = "";
if(number == 1){
    unit = "Unit";
}else if(number == 10){
    unit = "Ten";    
}else if(number == 100){
    unit = "Hundred";
}else if(number == 1000){
    unit = "Thousand";
}else if(number == 10000){
    unit = "Ten Thousand";
}else if(number == 100000){
    unit = "Lakh";
}

console.log(unit);