interface List {
  id: number;
  name: string;
  // [x: string]:any;//接受任意的String属性，并且属性值是any
  age?: number; //可以有可以没有
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
  });
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},//有约定之外的字段,是允许的  sex
        {id: 2, name: 'B'}
    ]
}
render(result);//这样可以

render({//这样不可以
  data: [
    { id: 1, name: "A", sex: "male" }, //有约定之外的字段
    { id: 2, name: "B" },
  ],
});

// let res:Result = {
//     data: [
//         {
//             id:1,
//             name:'haha',s
//             f:1
//         }
//     ]
// }
// 这样会报错

// let res:Result = {
//     data:[
//         {id:10,name:'haha',sex:'lalal'}
//     ]
// }
// console.log(res)
// render(result)
// render(res)

//绕过字面量检查
render({
  data: [{ id: 10, name: "A", sex: "female" }],
} as unknown as Result);

// render(<Result>{//这种情况下，必须第一行是符合的，如果第一行不符合就会报错？
//     data:[
//         {id: 10, name: 'A'},
//         {id: 10, name: 'A', sex: 'female'}
//     ]
// })
// render({
//     data:[
//         {id: 10, name: 'A'},//这种情况下，必须第一行是符合的，如果第一行不符合就会报错？
//         {id: 10, name: 'A', sex: 'female'}
//     ]
// } as Result)

// 数字索引
interface NumArray {
  [index: number]: string;
}
let chars: NumArray = ["a", "b"];
console.log(chars);
// 字符串索引
interface StringInterface {
  [x: string]: string;
  // y:number; 就不能再声明number类型了
}
//混用 数字的索引签名的返回值必须是字符串索引返回值的子类型
interface Names {
  [x: string]: any;
  // y: number;
  [z: number]: number;
}

// let add: (x: number, y: number) => number
// interface Add {
//     (x: number, y: number): number
// }
type Add = (x: number, y: number) => number;
let addFn: Add = (a: number, b: number) => a + b;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
let libFn: Lib = (() => {}) as Lib;
function getLib() {
  let lib = (() => {
    console.log("lib");
  }) as Lib;
  lib.version = "1.0.0";
  lib.doSomething = () => {
    console.log("dosomething");
  };
  return lib;
}
let lib1 = getLib();
lib1();
let lib2 = getLib();
lib2.doSomething();
