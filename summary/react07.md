## 라우터 구현 (react-router-dom)

### 라우팅이란?
- 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이라고 생각할 수 있다.

<br>

### 리액트 라우터(react-router)
- 사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종유의 라우터 컴포넌트를 제공한다.
- 설치
  - ``` npm install react-router-dom ```
- import
  - ``` import { 라우터 컴포넌트명 } from 'react-router-dom'; ```

<br>

### 라우터 컴포넌트 종류

라우터에는 많은 컴포넌트가 존재하지만 그 중 제일 많이 사용되는 몇가지만 소개한다.

- ```BrowserRouter``` 
  - 전체를 감싸준다.
- ```Routes```
  - 바뀌는 부분을 감싸준다. (url에 따라 변동되는 부분)
  - Routes외부는 모든 페이지에 공통으로 노출됨을 의미한다. (Header,Footer)
- ```Route```
  - 사용자의 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여준다.
  - ```<Route path="주소규칙" element={<보여줄 컴포넌트 명/>} />```
  -  Route 컴포넌트는 Routes 컴포넌트 내부에서 사용되어야 한다.
- ```Link```
  - 다른 페이지로 이동하는 링크를 보여준다.
  - 페이지에서는 원래 링크를 보여줄 때 ```a 태그```를 사용하지만 ```a 태그```를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오게 되기 때문에 리액트에서는 ```Link```를 사용한다.
  - ``` <Link to = "경로">경로이름</Link> ```


> App.js
```javascript
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/*" element={<EmptyPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

```

> DayList.js
```javascript
import  {Link} from 'react-router-dom';

const DayList = () => {
    return(
        <p>리스트 페이지입니다.</p>
        <Link to = '/day'>돌아가기</Link>
    )
}

export default DayList;

```

<br>

### URL 파라미터
- ```URL 파라미터```는 주소의 경로에 유동적인 값을 넣는 형태이다.
- 주로 ```URL 파라미터```는 ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용한다.

<br>

> Day.js
```javascript
import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

const Day = () => {
    const day = useParams().id;
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word = {word} key = {word.id}></Word>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day;


```
- URL 파라미터는 useParams 라는 Hook을 사용하여 객체 형태로 조회할 수 있다.
  - ```import { useParams } from 'react-router-dom';```
- URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path props와 동일하게 해준다.
  - ```const day = useParams().id; ```

<br>

> App.js
```javascript
...

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:id" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="/create_day" element={<CreateDay />}></Route>
          <Route path="/*" element={<EmptyPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

...

```
- URL 파라미터는 ```<Route path="/day/:id" element={<Day />}></Route>``` 과 같이 경로에 ```:``` 를 사용하여 설정한다. 




