/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    //seter
    this.stomach.push(food); //@ 객체에 프로퍼티를 추가하는 것 처럼 작동한다
  },
  get eat() {
    //@ getter 함수이름 똑같아도 하는 역할이 달라진다. 열거 안됨
    return this.stomach;
  },
};

const tiger = {
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
}

const fox = {
  prey:'',
  __proto__ : animal //@ 하나의 프로토타입만 상속 가능하다 
}

tiger.__proto__ = animal; //@ 타이거의 부모를 애니멀로 설정
//! 상속을 위해서 __proto__을 매번 설정해야함



//! 생성자 함수
// new Obj(), 생성자 함수, {}, 일반함수
// 함수는 두가지 일을 할 수 있다
// 함수 이름 앞에 대문자로 시작하면 암묵적을 생성자함수다.
// 생성자 함수를 통해서 객체를 만들 수 있다.


//! 공장의 역할
function Animal(){
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
  this.eat = function (food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

//@ 부모의 능력이 자신의 능력인 것처럼 객체에 담고 있다
//@ 객체를 공장처럼 계속해서 생산할 수 있다.

const tiger1 = new Animal(); // 객체

tiger1.pattern = '호랑이 무늬';

tiger1.hunt = function (target){
  this.prey = target,
  console.log( `${target}에게 슬금슬금 접근합니다.` );
}

const cat = new Animal();

cat.say = () => '냥';

const dog = new Animal();
const bird = new Animal();