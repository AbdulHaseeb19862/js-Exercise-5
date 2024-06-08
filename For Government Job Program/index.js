var age = +prompt("Enter your age!")

if(age >=18 && age <= 25){
    var gender = prompt("Enter Gender")
    if(gender === "Female"){
        console.log("You are eligible");
    }else{
        console.log("This is only for female")
    }
}else{
    console.log("You are not Eligible")
}