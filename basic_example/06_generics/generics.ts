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
  //text.split('').reverse().join('');
  return text;
}

function logNum(text: number){
  console.log(text);
  return text;
}

logString('하이');
logNum(10);

// 유니온 타입 사용
// 문제점 : 인풋에 대한 해결은 되었지만 반환값에 대한 해결이 안됨, 타입이 공통으로 가지는 api나 속성을 쓸 수 있다. 
function logUnion(text: string | number){
  console.log(text);
  return text;
}

logUnion('hi')
let a = logUnion(100)
//a.split()


//  제네릭 
function logGen <T>(text: T): T {
  console.log(text)
  return text
}

let abc = logGen<string>('hi');
abc.split('');
let login= logGen<boolean>(true);


//  인터페이스 제네릭 선언
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = {value: 'abc', selected: true}

interface GenDropdown <T>{
  value: T;
  selected: boolean;
}

const obj2: GenDropdown<number> = {value: 100, selected: true}


// 제네릭 터입 제한 : 타입힌트를 더 준다.
function logTextLength<T>(text: T[]): T[]{
  console.log(text.length);
  text.forEach(function (text){
    console.log(text);
  })
  return text;
}

 logTextLength<string>(['hi'])

 
 //  제네릭 터입 제한2 : 정의된 타입으로 타입 제한 
interface LengthType {
  length: number;
}

function logTextLength2 <T extends LengthType>(text: T): T{
  text.length;
  return text
}

logTextLength2('hi')
logTextLength2({length: 10})


//  제네릭 터입 제한3 :  keyof 
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name')