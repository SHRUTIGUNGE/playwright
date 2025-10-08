// // function add(a,b){
// //     return a+b
// // }
// // console.log(add(10,20));

// addE(20,30)
let evennumbers=[]
for(let i=0;i<=60;i++){
    if(i%2===0){
        evennumbers.push(i)
    }

    let first10=evennumbers.slice(0,10)
    let next10=evennumbers.slice(10,20)
    const result=[...first10,...next10]
}
console.log(result);
