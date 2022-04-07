// 타입 추론 기본 1 : vscode가 특정 변수의 타입이나  변수를 추측해서 보여준다. 
var a;

function getB(b = 10){
  var c = 'hi';

  return b+c;
}


//타입 추론 기본 2 : 제네릭 
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

//타입 추론 기본 2 ㅣ 복잡한 제네릭
interface Dropdown1<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown1<K>{
  description: string;
  tag: K
}

var detailedItem1: DetailedDropdown<string> = {
  title: 'abx',
  description: 'asd',
  value:'1234' ,
  tag: '122'
}

// Best Common Type : 

// 유니온 타입으로 지정됨
let b = ['a','b',1324, true]

