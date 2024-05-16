# 💡 React의 주요 개념 익히기

## ✅ 01. React란? 리액트의 등장배경

- 리액트는 UI 제작을 도와주는 라이브러리
- 리액트는 매우 가벼운 라이브러리이기 때문에, 반드시 CRA나 Vite 등을 사용하지 않아도 cdn을 활용해 몇 줄의 코드로도 사용할 수 있다.
> ❗ 그럼 왜 우리가 생각하는 React는 이렇게 가볍지 않을까?
> => 리액트로 대형 어플을 제작하기 위해서, 만드는 환경은 node 환경을 사용하기 때문. 로컬에서 Javascript를 실행하는 환경을 구축하고 실행함

<br />

### ※ React의 등장 배경

> 전통적인 웹 개발에서 HTML, CSS, Javascript는 각각 구조, 스타일, 동작을 담당해왔지만 한계가 명확하였고, <br />
> 그 어려움을 해결하고자 React가 등장하게 됨.

1. **유지보수의 어려움**: 웹 애플리케이션이 커질수록 HTML-CSS-Javascript 코드 간 상호작용이 복잡해지고, 유지보수하기 어려워짐
2. **DOM 조작의 비효율성**: DOM은 웹 페이지의 구조를 나타내므로, 수시로 접근하거나 자주 변경될 경우 브라우저 렌더링 성능이 낮아질 수 있다. Javascript를 사용하면서 직접적인 DOM 조작이 발생하기에 성능 저하가 나타날 수 있음
3. **재사용성 부족**: 전통적 웹 개발 방식에서는 코드의 재사용성이 낮고, 동일한 기능이어도 다른 부분에서 사용하기 위해서는 코드를 반복 작성해야 하는 경우가 많았음

<br />

## ✅ 02. React를 사용한 웹 개발과 기존 웹 개발의 차이점

### ※ MPA → SPA

- 전통적 웹 개발 방식은 MPA(Multi Page Application)을 제작
- 리액트의 경우 SPA(Single Page Application)을 제작
  > ※ SPA: 한 번의 페이지 로드만으로 웹 서비스에 필요한 모든 콘텐츠를 동적으로 렌더링 하는 방식으로,
  > 사용자와 필요한 부분만 상호작용하여 전체 페이지가 리렌더링 되는 것이 아닌 필요한 데이터 부분만 주고받을 수 있음.

### ※ SSR → CSR

- 전통적 웹 개발 방식은 SSR(Server Side Rendering) 방식
- 리액트는 CSR(Client Side Rendering) 방식

<br />

## ✅ 03. React 주요 개념

## ❤️ 1. 가상 DOM

- 실제 DOM을 흉내 낸 가상의 DOM. 만들고자 하는 DOM을 가상의 형태로 메모리에 저장하고, 실제 DOM과 동기화하는 프로그래밍 개념(이 과정을 재조정이라 부름)
- 실제 DOM보다 **빠르게 UI의 변경사항을 관리**함
- 실제 DOM은 변경점을 비교하는데 많은 자원이 들어감. 하지만 가상돔은 변경이 **필요한 부분만 실제 DOM에 반영**하여 페이지 전체를 새로 불러오는 것보다 훨씬 효율적임

<img src="./img/virtual dom.png" alt="virtual dom" width="500px">

<br />

## 🧡 2. JSX

- Javascipt를 확장한 문법으로 HTML과 유사하지만 완전히 다른 것

```
 HTML의 <h1>과 JSX의 <h1>은 완전히 다름
```

- JSX는 React의 createElement 함수 호출을 직관적으로 표현해주는 문법적 편의를 제공함(아래 사진의 위/아래는 같은 결과)
  <img src="./img/HTML vs JSX.png" alt="virtual dom" width="500px">

<br />

### ※ JSX의 특징

1. **HTML과 유사한 문법**: HTML과 비슷하게 생겨서 익숙하고 읽기 쉬움
2. **Javascript와의 결합**: JSX 내에서 JS 표현식은 중괄호`{}`로 묶어 사용할 수 있으며, 이를 통해 데이터 바인딩이나 반복문 처리가 가능함

```jsx
function App() {
  const name = "Young";

  return <div>Hello~! My name is {name}.</div>;
}
```

3. **컴포넌트 기반**: React 컴포넌트를 JSX를 사용하여 리액트 element로 만들 수 있으며, 이를 통해 UI를 구조화하고 재사용 가능

<br />

### ※ JSX의 장점과 주의사항

✨ **읽기 쉽고 작성하기 편리** <br />
✨ **컴포넌트 구조 명확화**: 구조를 한눈에 파악하기 쉬워, 유지보수성 향상 <br />
🔥 브라우저는 JSX는 읽지 못하고 Javascript만 읽을 수 있음 <br />
🔥 따라서 트랜스파일러(Babel 등)를 사용하여 **JSX를 Javascript로 변환하여** 웹 브라우저에 보내야 함

<br />

## 💛 3. React Component vs React Element

### ※ 리액트 컴포넌트

- UI의 한 부분을 캡슐화한 코드 블록
- 이전에는 class를 사용하였으나, 현재는 함수형이 일반적임

### ※ 리액트 엘리먼트

- 컴포넌트의 인스턴스로, 화면에 표시할 내용을 기술한 객체

```jsx
// 컴포넌트와 엘리먼트가 어떤 건지 잘 파악하기
// 컴포넌트 선언
function SomeComponent() {
  return <h1>{3 + 5}</h1>;
}

// 엘리먼트 생성
const someElement = <SomeComponent />; // <SomeComponent />도 엘리먼트

// 컴포넌트의 재사용
function AnotherComponent() {
  return (
    <div>
      <SomeComponent />
      <SomeComponent />
    </div>
  );
}
```

<br />

## 💚 04. State

- State는 React 컴포넌트 내부의 동적인 데이터를 관리하는 데 사용되는 데이터 구조
- 일반적으로 시간에 따라 변하는 값이나, 사용자의 상호작용 or 네트워크 응답 등에 변경되는 값을 State로 관리함
- State가 변경되면 컴포넌트는 리렌더링이 발생함

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 초기값 0

  const increment = () => {
    setCount(count + 1); // count를 1 증가시키는 함수
  };

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}
```

<br />

## 💙 05. Props

- 부모 컴포넌트로부터 자식 컴포넌트에 전달하는 데이터로 컴포넌트의 재사용성과 유연성을 높이기 위해 사용
- 자식 컴포넌트의 Props는 **읽기 전용**으로 **수정 불가**
- 부모가 전달해 주는 Props 값이 변경되면 자식 컴포넌트는 리렌더링 함

```jsx
function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}

function App() {
  const someName = "철수";
  return (
    <div>
      <Greeting name="지수" />
      <Greeting name={someName} />
    </div>
  );
}
```

<br />

## 💜 06. 리렌더링의 조건(★★★)

다음과 같은 상황에서 리렌더링이 발생한다.

1. `state`가 변경될 때
2. 부모 컴포넌트로부터 전달받는 `props`의 값이 변경될 때
3. 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링됨

<br />

## 🖤 07. 리액트의 생애주기

<img src="./img/React Life Cycle.png" alt="virtual dom" width="700px">
