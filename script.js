//checking all array above 30 and first element above 30

const number = [20,38,37,99,44];
let num = number.find(myFunction);
document.getElementById("para").innerHTML=num

function myFunction(value, index, array){
    return value > 30;
}