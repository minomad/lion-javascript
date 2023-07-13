function earth() {
  let water = true;
  let apple = {
    founder: 'jobs',
    cee: 'cook',
    product: ['ios', 'mac'],
  };

  let gravity = 9.8;

  return function (value) {
    // console.log(water);
    gravity = value;
    // console.log(gravity); 5 출력 내부에서 반환할  없음므로 undefined가 출력되지만 실제로 value은 5가 됨
  }; //@ 내부 함수의 이름은 알 필요가 없어서 이렇게 사용하거나 화살표 함수로 한번에 내보낸다.
  // return tiger;
}

const ufo = earth();

ufo(5);

const button = document.querySelector('button');

// let isClicked = true; // 전역 오염 ...

function handleClick() {
  let isClicked = true;

  return () => {
    if (isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick());

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(overValue) {
    value = overValue;
  }

  return [read, write];
}

// setClick()
// const [click,setClick] = useState(true);
