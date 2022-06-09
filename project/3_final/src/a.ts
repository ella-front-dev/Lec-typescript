/* 타입 단언 문밥의 주의 사항 */
interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'cpt',
//   skill: 'shield',
// };

// const capt: Hero = {};

// const capt = {} as Hero; // 타입적으로는 맞지만 초기화 값을 정해지지 않아서 문제가 될 수 있다.
// capt.name = 'capt';

const a: string | null = '';
