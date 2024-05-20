# 02_피카츄 놀이터 만들기🎶

<br />

<img src="https://github.com/hyeonseok98/challenge-class/assets/157561573/e7c43574-22c9-46fb-aabc-e1af9c91a569" alt="피카츄" width="350px" height="350px"/>

<br />

## 📌 프로젝트 요구사항

### 💡 기능

1. 가로 10칸, 세로 10칸 규격의 공간에서 피카츄가 한 칸 씩 돌아다닐 수 있는 놀이터를 만들어 주세요.
2. 키보드의 방향키를 사용하여 피카츄를 움직일 수 있어요.
3. 좌, 우 방향 전환시에는 피카츄가 뒤집혀야 해요.
4. 스페이스바를 누르면 피카츄가 점프를 할 수 있어야 해요.
5. 피카츄가 맵 밖으로 나가면 안돼요.

### 💻 코드

- `React`를 사용하여 구현해야 합니다.
- `grass.png` 하나가 가로, 세로 1칸 크기를 나타내도록 구현해야 합니다.
- `pikachu.png` 하나가 가로, 세로 1칸 크기에 해당하도록 구현해야 합니다.

<br />

## 📂 폴더구조
<img src="https://github.com/hyeonseok98/challenge-class/assets/157561573/311db6b2-8fd8-447a-91c1-26ef30e2180e" alt="폴더 구조" width="250px" height="400px"/>

<br />

## ✅ 구현 기능

### 1. 맵 크기 10칸
<img src="https://github.com/hyeonseok98/challenge-class/assets/157561573/761af214-d3d9-4647-becc-2d48689bb1ea" alt="map size" width="350px" height="350px"/>

### 2. 방향키를 이용해 자유롭게 움직이기
<img src="https://github.com/hyeonseok98/challenge-class/assets/157561573/f9095980-d47a-47c7-b1d9-d0f4058fcc73" alt="moving" width="350px" height="350px"/>

### 3. 좌, 우 방향 전환시 피카츄 뒤집기
<img src="https://github.com/hyeonseok98/challenge-class/assets/157561573/268ef229-7554-4dfc-bc7e-6be738a19946" alt="flip" width="350px" height="350px"/>

### 4. 스페이스바 누르면 점프
<img src="https://github.com/hyeonseok98/challenge-class/assets/157561573/ce0ca0b1-3dda-46f3-9c88-d98f09b10e82" alt="jump" width="350px" height="350px"/>

### 5. 맵 밖으로 나가지 않기!
<img src="https://github.com/hyeonseok98/challenge-class/assets/157561573/d42c3764-8b92-4828-adce-44d8cb903aab" alt="맵 밖으로 나가지 않기" width="350px" height="350px"/>


## 🔎 후기
- 과제 목표였던 useState와 props 기능에 충실해서 완성하려 노력했습니다.
- 만약 실제 게임이었다면 어떻게 컴포넌트를 나눌지 고민해 보았고, 그 때문에 필요없는 로직이 추가된 경우도 생겼다. 때문에 초기 프로젝트 규모에 따른 구조를 정하는 것이 상당히 중요하고, 추후 유지보수 때 수정하게 될 경우 많은 자원을 소모하게 된다는 걸 알게 되었습니다.
- 더 기능에 따라 컴포넌트를 세분화할 수도 있을 것 같다고 프로젝트 마무리쯤에 더 생각이 났으나, 현 기능에서 큰 차이가 없다 판단하여 넘어갔습니다.
- 전역 상태 라이브러리를 사용하지 않아 props drilling이 발생했고, 확실히 상위 props를 하위 컴포넌트까지 props의 연속 전달로 전달하는 것이 까다롭다는 걸 경험해 보았습니다.
- 초기 css-module 방식으로 CSS를 작성했으나, 생각보다 상태에 따라 css를 변경할 일이 많아 'css-in-js 방식도 괜찮았겠구나'라고 생각했습니다.
- React를 사용해 이벤트 핸들러를 다뤄본 경험이 많지 않았는데, 이번 프로젝트로 react 생애 주기와 함께 이벤트 핸들러의 등록/해제 시점을 고민해 볼 수 있어 유익했습니다.
  - 이벤트 핸들러 등록시기: 컴포넌트가 마운트될 때(componentDidMount()) 이벤트 핸들러를 등록
  - 이벤트 핸들러 해제시기: 컴포넌트가 언마운트될 때(componentWillUnmount()) 해제. 컴포넌트가 DOM에서 제거되기 전에 이벤트 핸들러를 해제하여 메모리 누수를 방지함
- 현재 이벤트 핸들러가 useEffect와 함께 사용되어 불필요하게 호출되고 있는데, 조언을 얻어 해결해 볼 예정입니다.
