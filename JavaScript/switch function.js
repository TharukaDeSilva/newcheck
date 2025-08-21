



let day = "tUesday".toLowerCase();
let dayms;

switch (day) {
    case "monday":
        dayms =  "It's Monday, time to start the week!";
        break;
    case "tuesday":
        dayms =  "It's Tuesday, keep up the good work!";
        break;
    case "Wednesday":
        dayms =  "It's Wednesday, hump day!";
        break;
    case "Thursday":
        dayms =  "It's Thursday, almost there!";
        break;
    case "Friday":
        dayms =  "It's Friday, happy weekend!";
        break;

    default:
        dayms =  "It's a holiday!";
        break;
    case 7:
        dayms  = "It's Sunday, rest and recharge!";
        break;
}

console.log(dayms);


//creating switching function to make weekdays are in colorful

function weekDaySelect(dayN){
    switch (dayN) {
        case 1:
            return "color: red; ";
        case 2:
            return "color: orange; ";
        case 3:
            return "color: yellow; ";
        case 4:
            return "color: green; ";
        case 5:
            return "color: blue; ";
        case 6:
            return "color: indigo; ";
        case 7:
            return "color: violet; ";
        default:
            return "color: black; ";
        case 8:
            return "color: pink; ";
            
    }
}

let ranNo  = Math.random();
console.log(weekDaySelect(ranNo));

var no =56
let des = (no>75)? "Less than 100 number" : (no>50)? "less than 75" : (no>30)? "less than 50" : "Out of range";
console.log(des);
