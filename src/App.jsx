

// App.jsx
import { useState, useEffect, useRef } from 'react';

import './App.css'

function App() {

  // 애니메이션 재생 제어 상태값.
  const [trig, doTrig] = useState(false);

  // 객체를 참조할 변수들 생성.
  const canvasRef = useRef(null);
  const onBtnRef = useRef(null);
  const offBtnRef = useRef(null);
  const objWidth = useRef(null);
  const objHeight = useRef(null);

  // HTML 요소 생성 후 실행할 작업. 
  useEffect(() => {

    // canvas.current 계속 적기 귀찮으니까 canvas로 담기.
    const canvas = canvasRef.current;

    // 컴포지션 가져오기.
    const onBtnComp = window.AdobeAn.getComposition('DEB6C5E970280F44A64283FA1AB84A55');
    const offBtnComp = window.AdobeAn.getComposition('DEB6C5E970280F44A64283FA1AB84A55A');

    // 컴포지션의 라이브러리 가져오기.
    const onBtnLib = onBtnComp.getLibrary();
    const offBtnLib = offBtnComp.getLibrary();

    // 중앙 정렬 위해 객체 너비와 높이의 절반 가져오기.
    objWidth.current = onBtnLib.properties.width / 2;
    objHeight.current = onBtnLib.properties.height / 2;

    // 라이브러리로 객체 애니메이션 객체 생성.
    const onBtn = new onBtnLib.buttonOn();
    const offBtn = new offBtnLib.button();

    // 생성된 애니메이션 객체 참조 변수에 전달.
    onBtnRef.current = onBtn;
    offBtnRef.current = offBtn;

    // 화면에 출력되는 크기"만 바꿀 뿐, js 코드 상의 객체 속성이나 
    // nominalBounds에는 전혀 영향을 주지 않음.
    offBtn.scaleX = 1;
    offBtn.scaleY = 1;

    // 애니메이션 객체의 초기 위치 설정.
    onBtnRef.current.x = (window.innerWidth / 2) - objWidth.current;
    onBtnRef.current.y = (window.innerHeight / 2) - objHeight.current;
    offBtnRef.current.x = (window.innerWidth / 2) - objWidth.current;
    offBtnRef.current.y = (window.innerHeight / 2) - objHeight.current;

    // 스테이지 생성 후, onBtn 애니메이션 출력.
    const stage = new window.createjs.Stage(canvas);
    stage.addChild(offBtn);

    // Ticker 설정 후, stage 객체에서 handleEvent() 실행.
    window.createjs.Ticker.framerate = onBtnLib.properties.fps;
    window.createjs.Ticker.addEventListener('tick', stage);

    // 애니메이션은 최초 정지 상태.
    // 진입점은 stage content 주석 아래부터.
    offBtn.stop();

    // 버튼 스위치 기능 이벤트 등록.
    onBtn.addEventListener('click', onOff);
    offBtn.addEventListener('click', onOff);

    // 마우스 over, out 감지 설정.
    stage.enableMouseOver();

    // 마우스 over 시 pointer로 커서 변경.
    onBtn.cursor = "pointer";
    offBtn.cursor = "pointer";

    // onBtn 마지막 프레임에서 발생하는 'animationEnd' 등록.
    onBtn.addEventListener("animationEnd", function () {

      canvas.style.backgroundColor = '#0E2148';
      onBtn.gotoAndStop(0);
      doTrig(trig => !trig);
      console.log("애니메이션1 끝!");
      stage.removeChild(onBtn);
      stage.addChild(offBtn);
      offBtn.stop();
    });

    // onBtn 마지막 프레임에서 발생하는 'animationEnd2' 등록.
    offBtn.addEventListener('animationEnd2', function () {

      canvas.style.transition = ''; // transition 효과 초기화.
      canvas.style.backgroundColor = '#FED16A';
      offBtn.gotoAndStop(0);
      doTrig(trig => !trig);
      console.log("애니메이션2 끝!");
      stage.removeChild(offBtn);
      stage.addChild(onBtn);
      onBtn.stop();

      // 전구 깜빡이는 효과.
      async function flash() {

        await setLight('#0E2148', 500);
        await setLight('#FED16A', 50);
        await setLight('#0E2148', 50);
        await setLight('#FED16A', 50);
        await setLight('#0E2148', 50);
        await setLight('#FED16A', 700);
        await setLight('#0E2148', 500);
        await setLight('#FED16A', 50);
        await setLight('#0E2148', 50);
        await setLight('#FED16A', 500);
        canvas.style.transition = 'all 1.5s ease';
      };

      flash()
      .then(result => console.log('async completed.'))
      .catch(reject => console.log('async error.'));
    });

    // resize 이벤트 리스너 등록.
    window.addEventListener('resize', resizeHandler);

    return () => { // 언마운트 시, 의존성 배열 안의 값이 바뀔 때 실행.

      window.createjs.Ticker.removeEventListener('tick', stage);
      // 비동기 함수의 예측 불가능한 동작과 메모리 누수 방지를 주의.
      onBtn.removeEventListener('click', onOff);
      offBtn.removeEventListener('click', onOff);
      window.removeEventListener('resize', resizeHandler);
      // 초기 마운트 과정에서 리스너가 두 번 등록되는 것 주의.
    };
  }, []);
  
  // 버튼 스위치 기능 함수.
  function onOff() {

    doTrig((trig) => { // 상태 변경 함수 정의.

      const check = !trig;
      if (check) {

        onBtnRef.current.play();
        offBtnRef.current.play();
      }else if (!check) {

        onBtnRef.current.stop();
        offBtnRef.current.stop();
      }

      return check; // 깜빡하면 큰일.
    });

  }

  // resize될 때 컨버스 배경 동적 변화 함수.
  function resizeHandler () {

    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    onBtnRef.current.x = (window.innerWidth / 2) - objWidth.current;
    offBtnRef.current.x = (window.innerWidth / 2) - objWidth.current;
    onBtnRef.current.y = (window.innerHeight / 2) - objHeight.current;
    offBtnRef.current.y = (window.innerHeight / 2) - objHeight.current;
  }

  // Canvas의 backgroundColor 변경 함수.
  // 코드의 순서를 명확하게 표현하기 위해 async/await로 개선.
  function setLight(color, ms) {

    return new Promise((resolve) => {
      
      setTimeout(() => {

        canvasRef.current.style.backgroundColor = color;
        resolve();
      }, ms);
    });
  };

  return ( // HTML 요소 정의.
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </>
  );
}

export default App;