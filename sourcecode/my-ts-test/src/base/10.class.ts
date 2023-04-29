//抽象类
abstract class Animal{
    eat(){
        console.log('eat')
    }
    // 抽象方法 子类必须实现
    abstract sleep():void
}
class Dog extends Animal{
     constructor(name:string){
        super()
        this.name = name
    }
    name:string 
    run(){}
    private pri(){}
    protected pro(){}     
    static food:string='bones'
    sleep(){
        console.log('dog spleep')
    }
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog,Dog.food)
// dog.pri()
// dog.pro()
// 继承
class Husky extends Dog {
    constructor(name:string,color:string,private arms:number,){
        super(name)
        this.color = color
        // this.pro()
        this.pro()
    }
    color:string
}
console.log(Husky.food)

class Cat extends Animal {
    constructor(){
        super()
    }
    sleep(): void {
        console.log('cat sleep')
    }
}

let arr:[Dog,Cat] = [dog,new Cat()]
arr.forEach(i=>{
    i.sleep()//多态
})

//this的链式调用
class Flow{
    step1(){
        return this
    }
    step2(){
        return this
    }
}
new Flow().step1().step2()
class MyFlow extends Flow{
    next(){
        return this
    }
}
new MyFlow().step1().next().step2()
