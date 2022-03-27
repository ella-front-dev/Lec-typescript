// ES2015 (ES6)

class Person {
  // 클래스 로직
  constructor(name, age){
    console.log('생성되었습니다.')
    this.name =name;
    this.age = age;
  }
}

let ella = new Person('세호', 30); // 생성되었습니다.
console.log(ella)

/*
  = 클래스를 쓰는 이유
  - JS의 Prototype 이란? 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

  - 
*/