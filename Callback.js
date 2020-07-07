function dohomework(subject,callback){
    alert(`Starting my ${subject} homework.`)
    callback();
}

function alertfinished(){
    alert("finished my homework");
}

dohomework('math',alertfinished);