// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 123 变量数据类型不可变

// 数组
let arr1: number[] = [1, 2, 3]//这里规定了数组只能是number类型
let arr2: Array<number | string> = [1, 2, 3, '4']//联合类型

// 元组 特殊的数组，限制了数组的元素类型和个数
let tuple: [number, string] = [0, '1']
// let tuple2: [number,number] = [0,0,0] 不符合元祖规定个数，会报错
// 元祖也有push方法，且元祖也会变成push后的元祖，但是不能越界访问
tuple.push(2)
console.log(tuple)//[0,'1',2]
// tuple[2]越界访问会失败

// 函数 
// let add = (x: number, y: number):number => x + y 也可以定义返回值类型，但是通常返回值类型是可以省略的
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number//定义一个函数
compute = (a, b) => a + b

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }//要定义函数属性的类型
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2) false

// undefined, null => 如果一个变量被赋值为undefined或者null，则无法被赋值为其他类型,但当在strictNullChecked = false，他们互相可以赋值
let un: undefined = undefined 
let nu: null = null
// un = null
// nu = undefined
let testNum: number = 12
let testNum2: number = 12
// 在strictNullChecked = false
// testNum = undefined
// testNum2 = null
num = undefined
num = null

// void (在js中，可以用void 0 返回undefined。因为在js中 undefined不是个保留字，可以被赋值)
let noReturn = () => {}

// any，不指定变量类型 与js无区别啦
let x
x = 1
x = []
x = () => {}

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}
