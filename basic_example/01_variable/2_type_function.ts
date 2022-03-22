// 파라미터에 타입 정의
function sum (a: number, b: number) {
  return a + b;
}

// 함수의 반환값에 타입을 정의 
function add(): number{
  return 10
}

// 함수의 타입을 정의 
function sum1 (a: number, b: number):number {
  return a + b;
}


// 븦필요한 파라미터를 넣으면 에러가 띄인다 - 인수 제한 
sum(1,2,3,4)


// 함수의 옵셔널 파라미터( ? ) : 특정 파리미터를 선택적으로 쓰는것
function log(a: string, b?: string, c?: string){

}

log('hello world');
log('hello ts', 'qwer');