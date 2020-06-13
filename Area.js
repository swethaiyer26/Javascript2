function area(length,width){
    return length * width;
}

//var area1=area(35,50);
var rectangleAreas=[];
rectangleAreas.push(area(10,12));
rectangleAreas.push(area(15,17));
rectangleAreas.push(area(20,12));
//rectangleAreas.push(area(23,15));
console.log(rectangleAreas);
rectangleAreas.pop(area(20,12));
console.log(rectangleAreas);


var bankBalance=500;
function makeTransaction(priceofsale){
    if(priceofsale <= bankBalance){
        bankBalance -=priceofsale;
        console.log("Purchase made");
    } else {
        console.log("Insufficient funds");
    }
}
console.log(bankBalance);
makeTransaction(400);
makeTransaction(7.98);
makeTransaction(340);