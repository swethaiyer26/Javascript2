new Promise((res,rej) => {
    setTimeout(() => res(1),2000);
}).then((r) => {
    alert(r);
    return r + 1;
}).then((r) => {
    throw new Error('Failed');
    alert(r);
    return r + 1;
}).then((r) => {
    alert(r);
    return r + 1;
}).catch((e) => {
    console.log(e);
});