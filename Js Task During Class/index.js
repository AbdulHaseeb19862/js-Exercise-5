var number = +prompt("Enter Your Numbers");
if(number >= 90){
    console.log(`Your Number Score is ${number} , Greade is A+ and Grade Point Is 4.00`);
}else if(number >= 85 && number <=89){
    console.log(`Your Number Score is ${number} , Greade is A and Grade Point Is 4.00`);
}else if(number >= 80 && number <=84){
    console.log(`Your Number Score is ${number} , Greade is A- and Grade Point Is 3.8`);
}else if(number >= 75 && number <=79){
    console.log(`Your Number Score is ${number} , Greade is B+ and Grade Point Is 3.4`);
}else if(number >= 71 && number <=74){
    console.log(`Your Number Score is ${number} , Greade is B and Grade Point Is 3.0`);
}else if(number >= 68 && number <=70){
    console.log(`Your Number Score is ${number} , Greade is B- and Grade Point Is 2.8`);
}else if(number >= 64 && number <=67){
    console.log(`Your Number Score is ${number} , Greade is C+ and Grade Point Is 2.4`);
}else if(number >= 61 && number <=63){
    console.log(`Your Number Score is ${number} , Greade is C and Grade Point Is 2.0`);
}else if(number >= 57 && number <=60){
    console.log(`Your Number Score is ${number} , Greade is C- and Grade Point Is 1.8`);
}else if(number >= 53 && number <=56){
    console.log(`Your Number Score is ${number} , Greade is D+ and Grade Point Is 1.4`);
}else if(number >= 50 && number <=52){
    console.log(`Your Number Score is ${number} , Greade is D and Grade Point Is 1.0`);
}else{
    console.log("Sorry, and Please Try Again")
}