// 数字枚举,后面的枚举成员会递增,JS反向映射
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter,Role[1])//1 'Reporter'
console.dir(Role)
/* 
"use strict";
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
*/
// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}
//console.log(Message.Success,Message['恭喜你，成功了'])//无法通过值映射到键
/*
"use strict";
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
 */
// 异构枚举
enum Answer {
    N,//数字枚举
    Y = 'Yes'
}
console.log(Answer)//{0: 'N', N: 0, Y: 'Yes'}
/*
    "use strict";
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
 */
// 枚举成员
// Role.Reporter = 0//枚举成员是只读类型 不能修改
enum Char {
    // const member 编译阶段就会被计算
    a,
    b = Char.a,
    c = 1 + 3,
    // computed member 编译阶段不会被计算
    d = Math.random(),
    e = '123'.length,
    //在计算枚举成员之后的常量枚举成员必须有初始值
    f = 4
}

// 常量枚举，常量枚举在编译阶段会被删除，删除是为了节约运行时的代码量
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    // 常量枚举不能包含计算枚举成员
    // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]
// console.log(Month)不能直接访问Month

// 枚举类型，一下三种情况，枚举可以成为一种类型存在
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// console.log(e === f) 不同类型不可以相互比较
console.log(e,f)//3 3

/*
"use strict";
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
let e = 3;
 */

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2) 
console.log(e1 === e3)
console.log(e1,e2,e3)//3 3 3

/*
let e1 = 3;
let e2 = 3;
let e3 = 3;
*/
//字符串枚举类型只能是赋值自身
let g1: G = G.a
let g2: G.a = G.a
