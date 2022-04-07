// 타입 단언(type-assertion)
/*
  개발자가 정의한 타입으로 타입이 변경됨
*/
var a;
a =20
a= 'w'

var b = a as string;

// DOM API 조작
// <div id="app">hi</div>

var div =document.querySelector('div');
if(div){
  div.innerText
}