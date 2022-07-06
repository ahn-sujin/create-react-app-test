## 03. CSS작성법

### inline 작성법
- HTML 태그에 바로 적어준다.
- 객체로 작성한다.
- `-` 사용하지 않고 camelCase로 작성한다.
- 문자는 ``` ' ' ```를 사용하고 숫자는 그냥 써도 된다. 

```javascript
...

function App() {
  return (
    <div className="App">
      <p
        style={
          {
            fontSize="20px",
            fontWeight=700,
            color:"#000"
          }
        }
      >
      Hello
      </p>
    </div>
  );
}

export default App;

```


<br>


### 프로젝트 생성시 생기는 css파일 사용
- ```index.css```는 전체에 적용되는 css이다.
- ```App.css```는 App컴포넌트에 적용되는 css이다.
- ❗️ 문제점
  - ```App.css```에 적용된 스타일이 App컴포넌트에만 적용되는 것이아니라, 공통된 className 사용시 전체 컴포넌트에 적용된다.
 

<br>

### 각 컴포넌트에 특화된 css만들기 (.modules.css)
- ```컴포넌트이름.modules.css``` 파일을 component폴더 안에 생성한다.

> Hello.modules.css
```css
.box{
  width: 300px;
  height: 200px;
  background: blue;
  color: #fff;
}

```

> Hello.js 
```javascript
import styles from './Hello.module.css';

const Hello = () => {
    return (
        <div className="box">Hello</div>
    )
}

export default Hello;

```

