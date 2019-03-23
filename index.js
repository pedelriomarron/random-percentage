module.exports = new class RandomPercentage{
   
    constructor() {  
    }

    getRandom(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low)
    }

    getKnowPercentageNumber(num,per) {
		if(num==0 || per==0) return 0;
		var num2=(num/per)*100;
		return  Math.floor(num2);
    }

    percentage(number,ofNumber){
        var perce = this.getKnowPercentageNumber(number,ofNumber);
        r = this.getRandom(1,100)
        if(r>perce)
            return false;
        else if(r<=perce)
           return true;
    }

   }