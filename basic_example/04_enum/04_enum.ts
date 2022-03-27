// 숫자형
// 별도의 값을 입력하지 않으면 숫자형 enum으로
enum Shoes {
  Nike,
  Adidas,
  Sth
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0

//  초기화 하면
enum Shoes1 {
  Nike = 10,
  Adidas,
  Sth
}

let myShoes1 = Shoes.Adidas;
console.log( myShoes1); // 11


// 문자형 
enum StrShoes {
  Nike = '나이키',
  Adidas = '아디다스' 
}

let myStrShoes = StrShoes.Nike;
 console.log(myStrShoes);// '나이키'


// 이넘 활용
// 예제
function answerQuestion(answer: string){
  if(answer === 'yes') console.log('정답!')
  if(answer === 'no') console.log('오답!')
}

answerQuestion('Y')
answerQuestion('yes')

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function answerQuestion1(answer: Answer){
  if(answer === Answer.Yes) console.log('정답!')
  if(answer === Answer.No) console.log('오답!')
}

answerQuestion1(Answer.Yes)
answerQuestion1('yes')
