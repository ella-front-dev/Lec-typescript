function logText(text){
  console.log(text);
  return text;
}

logText(10);
logText('hi');

// generics : 호출하는 순간에 인자의 타입을 정한다.
function logText1<T>(text: T): T{
  console.log(text);
  return text;
}

logText1<string>('하이');

/* 기존 타입에서 적용하려면?  */
// 각 타입을 지정해주기 위해서 각각의 함수를 만듬 => 비합리적
function logString(text: string){
  console.log(text);
  return text;
}

function logNum(text: number){
  console.log(text);
  return text;
}

logString('하이');
logNum(10);

// 유니온 타입 사용
// 문제점 : 인풋에 대한 해결은 되었지만 반환값에 대한 해결이 안됨
function logUnion(text: string | number){
  console.log(text);
  return text;
}

logUnion('hi')
let a = logUnion(100)
a.split()


function logGen <T>(text: T): T {
  console.log(text)
  return text
}

let abc = logGen<string>('hi')
abc.split('');
 