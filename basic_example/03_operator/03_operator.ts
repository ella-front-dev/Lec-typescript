function logMessage(value: any){
   console.log(value)
}

logMessage('hello');
logMessage(100);


//  |(유니온 타입) : 하나의 타입 이상을 쓸 때 사용
// 타입 가드 
let seho: string | number | boolean;
function logMessage1(value: string | number){
  if(typeof value === 'number') value.toLocaleString();
  if(typeof value === 'string') value.toString();
  throw new TypeError('Value must be string or number')
}

logMessage1('hello')
logMessage(100);


// 유니온 타입의 특징 : 여러개의 구조체에 쓰일때는 헤당 공통 속성의 타입만 적용된다.
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  language: string;
}

function askSomeone (someone: Developer | Person){
  someone.name;
}

 askSomeone({name: '개발자', language: 'ts'});
 askSomeone({name: '개발자2', age: 10});

// & (인터세션 타입) : 여러개의 구조체에 쓰일때는 그 구조체들의 속성이 모두 포함된 새로운 타입을 만든다.
var caps: string & number &  boolean;
function askSomeone1 (someone: Developer & Person){
  someone.name;
  someone.language;
  someone.age;
}

askSomeone1({name: '개발자', language: 'ts', age: 20});
askSomeone1({name: '개발자2', age: 10, language: 'js'});
