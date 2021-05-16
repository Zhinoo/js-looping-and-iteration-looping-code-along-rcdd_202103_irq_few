// Code your solutions in this file
let writeCards= (["Ada", "Brendan", "Ali"], "birthday");
writeCards([
  "Thank you, Ada, for the wonderful birthday gift!",
  "Thank you, Brendan, for the wonderful birthday gift!",
  "Thank you, Ali, for the wonderful birthday gift!"
]);

function printBadges(employees){
  for (i=0; i < employees.length; i++){
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees;
}


function tailsNeverFails(){
  let tails = Math.random() >= 0.5
  let counter = 0;

  while (tails) {
    counter++;
  }
  return `You got ${counter} tails in a row!`
}