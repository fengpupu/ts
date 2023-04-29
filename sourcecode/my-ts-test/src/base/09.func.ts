//函数定义
function add1(x:number,y:number){
    return x+y
}

let add2: (x:number,y:number)=>number
type add3 = (x:number,y:number)=> number

interface add4{
    (x:number,y:number):number
}
// 函数参数少也不行，多也不行

function add5(x:number,y?:number){
    if(y){
        return x+y
    }
    return x
}
function add6(x:number,y=10,z:number,q=0){
    return x+y+z+q
}
console.log(add6(1,undefined,3))

function add7(x:number,y:number,...res:number []){}
type add8=(x:number,y:number,...res:number[])=>number
let fn:add8 = (x,y,...res) => x+y+res.reduce((pre,cur)=>pre+cur,0)
console.log('fn---',fn(1,2,3,4,5))

function add9(...res:number[]):number;
function add9(...res:string[]):string;
function add9(...res:any[]):any{
    if(typeof res[0] === 'number'){
        return res.reduce((pre,cur)=>pre+cur)
    }else if(typeof res[0] === 'string'){
        return res.join('')
    }
}
console.log(add9(1,2,3,4))
console.log(add9('lala','hahha'))