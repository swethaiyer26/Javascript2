function delay(t){
    return new Promise((resolve,reject) => {
        console.log("hello");
        //setTimeout(() => resolve('world'),t);  
        reject("error");
    });  
}
function loghi(v){
    console.log( "hi " +  v);
}

delay(2000).then((v) => {
    loghi(v);
}).catch((e) =>{
    console.log(e);
});