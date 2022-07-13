## useEffect
- 변화된 상태 값 랜더링 후 실행되는 함수
- ```import { useEffect } from "react"; ```
-  ```useEffet( 함수 ) ```
   - 매개변수로 함수가 들어간다. 
   - 함수 호출 타이밍은 랜더링 결과가 dom에 반영된 직후이다.
- ```useEffect( 함수, [값] )```
   - 두번째 매개변수는 배열이 들어가며, **의존성 배열** 이라고 부른다.
   - **의존성 배열** 은 불필요한 함수의 호출을 막으며, 의존성 배열의 값이 변경되는 경우에만 함수가 실행되도록 한다.
   - ```[]``` 빈배열 입력시, 랜더링 직후 한번만 실행한다는 의미이다.

<br>

> 예시1
```javascript
import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount ] = useState(0);
  
  function clickAction(){
    setCount(count + 1);
  }
  
  useEffect(() => {
    console.log('count change!');
  }) 

  return(
    <button onClick = {clickAction}>{count}</button>
  )
}
export default Count

```
- 버튼을 누를때마다 count가 올라가고 console창에 ```count change!``` 가 찍히게 된다.

> 예시2
```javascript
import { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount ] = useState(0);
  const [day, setDay] = useState([]);
  
  function clickAction(){
    setCount(count + 1);
  }
  
  function addAction(){
    setDay([
      ...day,
      {
        id: Math.random(),
        day: 'DAY'
      }
    ])
  }
  
  useEffect(() => {
    console.log('count change!');
  }, [count]) 

  return(
    <button onClick = {clickAction}>{count}</button>
    <button onClick = {addAction}>ADD DAY</button>
  )
}
export default Count

```
- ADD DAY 버튼을 클릭할때 마다 DAY버튼이 생성된다.
- 의존성 배열에 ```[count]```를 지정해줬기 때문에 count가 변경되는 함수가 실행될 때에만 useEffect함수가 실행된다.

<br>

## fetch함수
- ```fetch()```
   - 백앤드로부터 데이터를 받아오기 위해, api를 호출하고 데이터를 응답받기 위해 사용하는 함수이다.
```javascript
let promise = fetch(url, [options])

```
   - url-접근하고자 하는 URL
   - options - 선택 매개변수, mehtod나 header 등을 지정할 수 있다. [더 자세한 내용](https://velog.io/@daybreak/React-Fetch%ED%95%A8%EC%88%98)

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    // data를 응답 받은 후의 로직
 });

```

> useEffect와 fetch함수를 이용한 api호출
```javascript
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const DayList = () => {
    const [days, setDays] = useState([]);    
    
    useEffect(() => {
        fetch('http://localhost:3001/days')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setDays(data)
        })
    },[])

    return(
        <>
            <ul className ="list_day">
                {days.map(day => (
                    <li key = {day.id}>
                        <Link to = {`/day/${day.day}`}>{day.day}Day</Link>
                    </li>
                ))}
            </ul>
        </>
        
    )
}

export default DayList;


```




