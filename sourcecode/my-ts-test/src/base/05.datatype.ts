// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组
let tuple: [number, string] = [0, '1']
// 可以再push
//tuple.push(2)
//console.log(tuple)
// 但是要取值超过定义，也会报错
// tuple[2]

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 9

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2) false

// undefined, null
let un: undefined = undefined
// 在设置strictNullChecks为false之后,undefined和null是其他类型的子类型，否则就不可以。或则使用联合类型 let num: number | undefined | null = 123
// num = undefined
// num = null

// void,返回的是undefined
let noReturn = () => {}
console.log(noReturn())//返回undefined
console.log(void 0)//返回undefined·

let reSetundefined=()=>{
    let undefined = 0
    console.log(undefined)//输出0 undefined可以被覆盖
}
reSetundefined()

// any，这就和js没有区别啦
let x
x = 1
x = []
x = () => {}

// never，永远没有返回值的类型
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}
export {}
