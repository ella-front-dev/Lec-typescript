interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}


function introduce(): Developer | Person{
  return {name: 'tony', age: 22, skill: 'Iron Making'}
}

var tony = introduce();
console.log(tony.skill); // Developer과 Person의 공동된 요소만 가능

// 타입 단언을 사용 : 가독성이 안 좋고 복잡하다
if((tony as Developer).skill){
  let skill = (tony as Developer).skill;
  console.log(skill);
}else if((tony as Person).age){
  let age = (tony as Person).age;
  console.log(age);
}


// 타입 가드 정의: 특정 타입인지 아닌지 알아봄
function isDeveloper(target: Developer | Person): target is Developer{
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
  console.log(tony.skill) 
}else{
  console.log(tony.age;)
}
