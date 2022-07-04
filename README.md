# React JS

초보자를 위한 리액트 기초개념 정리

<br>

## 01. 리액트 설치
### npx
- npm에 있는 패키지를 바로 실행해서 설치시켜주는 도구이다.

### ``` npx create-react-app 프로젝트명 ```
- 프로젝트를 실행할 폴더 생성후 터미널을 실행시켜  ``` npx create-react-app 프로젝트명 ``` 를 입력한다.
- ```webpack``` ```babel``` 을 이용하여 수동으로 설치하고 세팅시에 번거로움이 있다.
- 하지만, ``` npx create-react-app 프로젝트명 ``` 를 사용하면 쉽고 빠르게 개발환경 세팅이 가능하다.

<img src="/images/react01.png" width="300"/>

### node_modules 폴더
- 프로젝트를 실행할때 사용되는 dependencies 모듈들이 모여있는 폴더이다.
- 해당 내용은 ```package.json``` 에 dependencies에 적혀있다.
 <img src="/images/react03.png" width="300"/>
 
- git에는 올리지 않는다.(용량이 많고 무거움)


### public 폴더
- ```<div id="root"></div>``` 밑으로 react코드가 실행돼서 만들어진 DOM이 구현된다.
<img src="/images/react02.png" width="550"/>


### src폴더
- 대부분의 작업이 이뤄지는 폴더이다. (css,js 파일이 존재)

### App.js
- 화면에 보여지는 코드를 구현한다.
- 이 파일을 수정, 추가, 저장시 브라우저에 바로 반영이 된다.
- 이를 **Hot Modules Replacement(HMR)** 이라고 한다.

### npm명령어
- package.js에 설정되어 있다. 
- ```start``` : 개발모드로 프로그램 실행 
- ```build``` :  실제 배포모드로 만들어줌
- ```test``` : 테스트
- ```eject``` : 내부 설정파일을 꺼내는 역할(webpack, babel 설절을 변경하고 싶을때 사용)

### JSX
- 자바스크립트 내부에 HTML 처럼 작성하는 것을 말한다.
<img src="/images/JSX.png" width="550"/>



