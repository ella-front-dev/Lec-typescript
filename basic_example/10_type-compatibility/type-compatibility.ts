//   타입 호환 1 :  인터페이스, 클래스, 함수, 제내릭 - 내부적 속성고 타입만 생각한다.
// 인터페이스 
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;
// developer = person; // 왼쪽이 더 많은 속성이나 구조적으로 더 컷을때 호환이 안된다. 
person = developer;


// 클레스
class Person1 {
  name: string;
}
var developer1: Developer;
var person1: Person1;
// developer1 = new Person1();
person1= developer;


// 함수
var add = function (a: number){
  // ...
}

var sum = function (a: number, b: number){
  //...
}
//=> 파라미터 개수가 다르고  sum이 add보다 구조적으로 크다

//add = sum;
sum =add;


//제내릭 
interface Empty<T>{

}

var empty1: Empty<string>;
var empty2: Empty<string>;

empty1 = empty2;
empty2 = empty1;


interface NotEmpty<T>{
  data: T
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

notempty1= notempty2;
notempty2 = notempty1;