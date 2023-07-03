let Gender = prompt("Enter your gender")
let age = prompt("Enter your age")
if (age < 13){
    if (Gender == "male"){
        console.log("You are a male child");}
    else{
        console.log("You are a female child");
    }
}
if (age > 12  && age < 20){
    if (Gender == "male"){
        console.log("You are a male teenager");}
    else{
        console.log("Your are a female teenager");
    }
    }
if (age > 19 && age < 60){
    if (Gender == "male"){
        console.log("Your are an adult male");}
    else{
        console.log("Your are an adult female");
    }
    }
if (age > 59){
    if (Gender == "male"){
        console.log("You are aged male");}
    else{
        console.log("You are aged female");
    }
    }