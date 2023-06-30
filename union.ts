// function combine(a:number,b:number){
//     return a+b;
// }


// console.log(combine(2,5));



function combine(a:number | string,b:number | string){
    if(typeof a==='number' && typeof b=== 'number'){
        return a+b;
    }
    else
    {
        return a.toString()+b.toString();
    }
}
console.log(combine("vikash","soni"));

// ya ye use karo

let data:any;


