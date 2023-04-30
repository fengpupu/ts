interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  age: number = 0;
}
interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}
interface Boy extends Man, Child {}

let bog: Boy = {
  name: "",
  eat() {},
  run() {},
  cry() {},
};

// class Auto {
//     state=1
//     say(){
//         console.log('say')
//     }
//     private a = 1
// }
// interface AutoInterface extends Auto {
//     a:number
// }
// class C implements AutoInterface {
//     state=2
//     say(): void {

//     }
//    private a=2
// }
class Auto {
  state = 1;
  private c = 2;
}

interface AutoInterface extends Auto {
    // c:number;
}

// class C implements AutoInterface {
//   state = 2;
//   public c = 4;
// }

class Bus extends Auto implements AutoInterface {


}