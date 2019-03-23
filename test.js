var random = require('./index');

//console.log(random.getRandom(0,2));
/*
var perce = random.getKnowPercentageNumber(1);
console.log(perce);

console.log(random.getRandom(1,100));


*/

var perce = random.getKnowPercentageNumber(3,9);
console.log(perce);
r = random.getRandom(1,100)
console.log(r);
if(r>perce)
    console.log('FALSE')
else if(r<=perce)
    console.log('TRUE')

// OR
if(random.percentage(3,10))
    console.log('TRUE')
else
    console.log('FALSE')

