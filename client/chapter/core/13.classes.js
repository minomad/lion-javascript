/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// Anumal -> tiger => 호돌이

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name) {
    //@ tiger상수에 의해서 최초 1회 실행
    this.name = name; //@ tiger.name = '호돌이' 값을 받기위해서 this
  }
  set eat(food) {
    this.stomach.push(food);
  }
  get eat() {
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이'); //@ 호출은 생성자 함수랑 동일

class Tiger extends Animal {
  #prey = ''; //# 프라이빗

  constructor(name, pattern) {
    super(name);
    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`;
  }

  static sleep(name) {
    //@ Tiger클래스가 가지는 메서드인데 모두가 사용가능
    console.log(name + '이 잠을 잔다.');
  }
}

const beom = new Tiger('범', '호랑이무늬');

const hoho = new Tiger('hoho', '호피무늬');

class Champion {
  q = '';
  w = '';

  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});

class Button {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}




const button = new Button({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
});