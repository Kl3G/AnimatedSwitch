

// App.jsx
import { useEffect, useRef, useState } from 'react';

import './App.css'

function App() {

  // 객체를 참조할 변수들 생성.
  const canvasRef = useRef(null);
  const onBtnRef = useRef(null);
  const offBtnRef = useRef(null);

  // 애니메이션 재생 제어 상태값
  const [trig, doTrig] = useState(false);

  useEffect(() => {

    // 컴포지션 가져오기.
    const onBtnComp = window.AdobeAn.getComposition('DEB6C5E970280F44A64283FA1AB84A55');
    const offBtnComp = window.AdobeAn.getComposition('DEB6C5E970280F44A64283FA1AB84A55A');

    // 컴포지션의 라이브러리 가져오기.
    const onBtnLib = onBtnComp.getLibrary();
    const offBtnLib = offBtnComp.getLibrary();

    // 라이브러리로 객체 애니메이션 객체 생성.
    const onBtn = new onBtnLib.buttonOn();
    const offBtn = new offBtnLib.button();
    onBtn.scaleX = 1;
    onBtn.scaleY = 1;
    offBtn.scaleX = 1;
    offBtn.scaleY = 1;

    // 생성된 애니메이션 객체 참조 변수에 전달.
    onBtnRef.current = onBtn;
    offBtnRef.current = offBtn;

    // 스테이지 생성 후, onBtn 애니메이션 출력.
    const stage = new window.createjs.Stage(canvasRef.current);
    stage.addChild(offBtn);

    // Ticker 설정 후, stage 객체에서 handleEvent() 실행.
    window.createjs.Ticker.framerate = onBtnLib.properties.fps;
    window.createjs.Ticker.addEventListener('tick', stage);

    // 애니메이션은 최초 정지 상태.
    offBtn.stop();
    // 진입점은 stage content 주석 아래부터.

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

      onBtn.gotoAndStop(0);
      doTrig(trig => !trig);
      console.log("애니메이션1 끝!");
      stage.removeChild(onBtn);
      stage.addChild(offBtn);
      canvasRef.current.style.backgroundColor = '#0E2148';
      offBtn.stop();
    });

    // onBtn 마지막 프레임에서 발생하는 'animationEnd2' 등록.
    offBtn.addEventListener('animationEnd2', function () {

      offBtn.gotoAndStop(0);
      doTrig(trig => !trig);
      console.log("애니메이션2 끝!");
      stage.removeChild(offBtn);
      stage.addChild(onBtn);
      canvasRef.current.style.backgroundColor = '#FED16A';
      onBtn.stop();
    });

    // resize 이벤트 리스너 등록.
    window.addEventListener('resize', resizeHandler);

    return () => { // 언마운트 시, 의존성 배열 안의 값이 바뀔 때 실행.

      window.createjs.Ticker.removeEventListener('tick', stage);
      // 비동기 함수의 예측 불가능한 동작과 메모리 누수 방지를 주의.
      onBtn.removeEventListener('click', onOff);
      offBtn.removeEventListener('click', onOff);
      window.addEventListener('resize', resizeHandler);
      // 초기 마운트 과정에서 리스너가 두 번 등록되는 것 주의.
    };
  }, []);
  
  // 버튼 스위치 기능 함수.
  function onOff() {

    doTrig((trig) => { // 상태 변경 함수 정의.

      console.log('previous state is ' + trig);
      const check = !trig;
      console.log('new state is ' + check);
      if (check) {

        onBtnRef.current.play();
        offBtnRef.current.play();
      }else if (!check) {

        onBtnRef.current.stop();
        offBtnRef.current.stop();
      }else {

        console.log('trigError');
      }

      return check; // 깜빡하면 큰일.
    });

  }

  // resize될 때 컨버스 배경 동적 변화.
  function resizeHandler () {

    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    console.log("resize 됩니다.")
  }

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