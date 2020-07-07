
// function speak(){
    // console.log(words);
    //             }
    // speak();
    // console.log(words);

    // function speak(){
    //     var words='hi';
    //     return function logit(){
    //     console.log(words);
    //     }
    // }

    // var sayHello= speak();

    function first(){
        setTimeout (function(){
            console.log(1);
        },500);
    }

    function second() {
        console.log(2);
    }
    first();
    second();