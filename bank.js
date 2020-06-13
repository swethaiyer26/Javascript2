
var transaction = function (priceofsale){
    if(priceofsale <= bankBalance){
        bankBalance -=priceofsale;
        console.log("Purchase made");
    } else {
        console.log("Insufficient funds");
    }
}

var printCustomerName=function(first,last) {
    console.log("firstname : " +  first + " lastname : "  + last) ;
}

var  applyforcreditcard=function(creditScore,soul) {
 
}

var bankOperations=[];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyforcreditcard);