interface User {
  age: number;
  name: string;
}


//변수에 인터페이스 적용
let ella: User = {
  age: 30,
  name: "ella"
}

//함수에 인터페이스 적용
function getUser(user:User) {
  console.log(user);
}

const cap =  {
  name: "경찰",
  age: 200
}

getUser(cap);


// 함수 스펙(구조)에 인터페이스를 활용 : 라이브러리를 만드는 공동 작없하기전에 사용하기도 한다.
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;

sum = function (a: number,b: number): number{
  return a + b;
}

// 인덱싱

interface StringArray {
  [index: number]: string; 
}

let arr: StringArray = ['a','b','c'];
// arr[0] = 10;

// 딕셔너리 패턴 => 객체??
interface StringRegexDictionary {
  [key: string]: RegExp;
  
}

let obj: StringRegexDictionary = {
  //sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.css$/,
}

Object.keys(obj).forEach(function(value){})


// 인터페이스 확장 
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let capts: Developer ={
  language: 'ts',
  name: 'cap',
  age: 10
}
