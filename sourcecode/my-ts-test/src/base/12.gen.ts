// 支持多种类型的方式
// 函数重载
function addFn1(x: number, y: number): number;
function addFn1(x: string, y: string): string;
function addFn1(x: any, y: any) {
  console.log(x + y);
  return x + y;
}

addFn1(1, 2);
addFn1("1", "231");
//联合类型
function addFn2(x: number | string): number | string {
  return x;
}
console.log(addFn2(3), addFn2("3"));
//any 类型
//泛型
// 泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value;
}
log<string[]>(["1", "2", "3"]);
log(1);

// 泛型类
class Log<T> {
  run(value: T): T {
    return value;
  }
  a: string = "2";
}
interface LogInter<T> {
  (value: T): T;
  id: T;
}
interface haha {
    id:string;
    name:string;
    (value:string):string
}
let hahaFn=((value:string):string => {
    return value
}) as haha
