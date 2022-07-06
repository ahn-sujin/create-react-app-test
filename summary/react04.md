## 04.event 처리

### 미리 함수로 만들어 놓고 사용

> Hello.js
```javascript
import styles from './Hello.module.css';

const Hello = () => {
    function showName (){
        console.log('asj');
    }

    return (
        <div>
            <span>Hello</span>
            <button onClick = {showName} >Show Name</button>
        </div>
    )
}

export default Hello;

```

<br>

### 내부에 함수 직접 작성하기
> Hello.js
```javascript
import styles from './Hello.module.css';

const Hello = () => {
    function showName (){
        console.log('asj');
    }

    return (
        <div>
            <span>Hello</span>
            <button onClick = {showName} >Show Name</button>
            <button onClick = {
                ()=>{
                    console.log(26);
                }
            } >Show Age</button>
        </div>
    )
}

export default Hello;


```
- 장점 :  매개 변수를 전달하기 편하다.



