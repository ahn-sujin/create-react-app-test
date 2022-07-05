## 02. 리액트 컴포넌트
- 리액트로 만들어진 페이지는 컴포넌트로 구성되어 있다.

<img src="/images/react04.png" width="600">

### 함수형 컴포넌트

<img src="/images/react05.png" width="600">

- 함수로 만들어졌다.
- 함수명은 대문자로 시작한다.
- 함수가 return 하는 것은 JSX(JavaScript XML)로 작성한다.
- ```class```는 자바스크립트 예약어이기 때문에 리액트에서는 ```className```을 사용한다.
- ```style```은 객체로 전달해야한다. 
  - camleCase로 작성한다.
  - ```-```는 사용하지 않는다. (background-color -> backgroundColor)

<img src="/images/react06.png" width="400">


- ```{변수,숫자,문자}```는 사용이 가능하지만 ```{boolean, 객체}```는 사용할 수 없다.


### 컴포넌트 만들기
- 컴포넌트 파일은 src폴더에 component폴더를 만들어 관리하도록 한다.

<img src="/images/react07.png" width="300">
