const det1={
    address:{
        street:'Second street',
        city:'Coimbatore'
    }
}
console.log(det1.address.city);
console.log(det1.name)

//optional chaining
const det2={
    city:'Coimbatore'
}
console.log(det2.nation?.city);

function task(num1,num2){
    let res=num1+num2;
    if(typeof res!='number'){
        console.log("invalid number");
    }
    else{
        console.log(res);
    }
}
task('lkj',9);
task(26,7);

//splicing
let names=['a','b','c','d','e'];
names.splice(names.length,0,'f','g','h');
console.log(names);

//task
let names2="madhu akshaya priya ishwarya saranya";
console.log(names2);
let dup=names2.split(" ");
for(key in dup){
    dup[key]=dup[key].charAt(0).toUpperCase()+dup[key].slice(1);
}
console.log(dup.join(" "));
