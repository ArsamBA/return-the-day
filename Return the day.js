function whatDay(num) { 
   if(num == 1){
     return 'Monday'
   }else if (num == 2){
     return 'Tuesday'
   }else if (num == 3){
     return 'Wednesday'
   }else if (num == 4){
     return 'Thursday'
   }else if (num == 5){
     return 'Friday'
   }else if(num == 6){
     return 'Saturday'
   }else if(num == 7){
     return 'Sunday'
   } else {
     return 'Wrong, please enter a number between 1 and 7'
   }
 }
 
 console.log(whatDay(1),'-Should log: Monday')
 console.log(whatDay(2), '-Should log: Tuesday')
 console.log(whatDay(3),'-Should log: Wednesday')
 console.log(whatDay(8),  '-Should log: Wrong, please enter a number between 1 and 7')
 console.log(whatDay(20),  '-Should log: Wrong, please enter a number between 1 and 7')