// let foo=1;
// let bar=2;
// let prefix = 'foo'; 
// let obj= {
//     [prefix + 'abc']: 1,
//     foo() {return 'foo!'}
// };
// console.log(obj['fooabc'])
// console.log(obj.foo())

//===========================================
// let map = new Map(); 
// map.set("toString", "value1"); 
// map.get("toString"); 
// var result = String(map); 
// console.log(map.get("toString"));
// console.log(map);
// console.log(result);

class MyMath{
    add = (a,b) => {return a+b}
    minus = (a,b) => {return a-b}
    multiply = (a,b) => {return a*b}
    devide = (a,b) => {return (b==0 ? null : a/b)}
}
var result = new MyMath();


result.add = (a,b)=>{return a+b}

console.log(result.add(2,3));
console.log(result.minus(2,3));
console.log(result.multiply(2,3));
console.log(result.devide(2,0));



// --------------
// output
// 5
// -1
// 6
// null
