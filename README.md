# random-percentage
Module that will contain a method of random selection and a percentage creation method that will be used together

## Install

    // npm
    npm install -save random-percentage


Use for get random number

``` js
random = require('random-percentage');

number = random.getRandom(1,5)
console.log(number); 
```

use for the creation of percentages

``` js
random = require('random-percentage');

// calculate the percentage
if(random.percentage(3,10))
    console.log('TRUE')
else
    console.log('FALSE')

    //OR
var perce = random.getKnowPercentageNumber(3,10);
console.log(perce);
r = random.getRandom(1,100)
console.log(r);
if(r>perce)
    console.log('FALSE')
else if(r<=perce)
    console.log('TRUE')
```



## Autores

* **Pedro del Río** - *Trabajo inicial* - [pedelriomarron](https://github.com/pedelriomarron)