## useState를 통해서 바뀌는 값 관리하기

react에서는 유동적인 데이터를 저장하기 위해서 ```state```를 이용한다. **```state```는 동적인 값** 을 의미하는데, 직접 조작해서는 안되고 **```setState```를 이용** 해야한다.
왜냐하면 **react는 ```state```의 값이 변경되면 리렌더링**을 해주는데 이때 ```setState```를 이용하지 않고 **직접 바꾸게 되면 react가 변경된 ```state```를 감지하지 못하기 때문** 이다.

<br>

> useState 기본구조

```javascript
import {useState} from 'react';

const [state, setState] = useState('');

```

<br>

리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었다. 하지만 **리액트 16.8부터 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.** 
앞에서 말 한 ```useState```가 바로 리액트의 Hooks 중 하나이다.

<br>

## 이벤트 설정

클릭 이벤트가 발생하면 counter되는 이벤트를 만들어보자.

> App.js
```javascript

import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <Counter />
  );
}

export default App;


```

> Counter.js
```javascript

import React from 'react';

const Counter = () => {
 
 function OnIncrease() {
  console.log('+1');
 }
 function OnDecrease() {
  console.log('-1');
 }
 
  return (
    <div>
      <h1>0</h1>
      <button onClick={OnIncrease}>+1</button>
      <button onClick={OnDecrease}>-1</button>
    </div>
  );
}

export default Counter;

```
- 증가 이벤트는 함수 ```OnIncrease```에 설정을 해주었고, 감소 이벤트는 함수 ```OnDecrease```에 설정해주었다.
- 만들어진 함수는 각각 ```button``` 의 onClick 으로 각 함수를 연결해주었다. 리액트에서 엘리먼트에 이벤트를 설정해줄때에는 ```on이벤트이름={실행하고싶은함수}``` 형태로 설정해주어야 한다.
- 주의할 점 이벤트 함수를 ```onClick={onIncrease()}``` 이렇게 실행시키면안된다는 점이다.
  - 이렇게 호출을 해주면 이벤트가 랜더링 되는 시점에 함수가 실행되기 때문에, 이벤트를 실행시킬때는 함수타입의 값을 넣어주어야한다.


<br>


## useState 사용
이제 위에서 설정한 이벤트의 동적인 값을 ```state```를 이용하여 상태관리가 될 수 있도록 작성해 보려고 한다.

> Counter.js
```javascript

import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

```

- ``` import React, { useState } from 'react'; ``` 
  - 리액트 패키지에서 ```useState``` 를 불러온다.
- ``` const [number, setNumber] = useState(0); ```
  - useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다.
  - useState는 배열을 반환하는데, 여기서 첫번째 원소는 현재 상태(number), 두번째 원소는 state를 변경해주는 함수(setNumber)이다.

- 원래는 다음과 같이 해야하지만 **배열구조분해** 를 사용하여 각 원소를 추출해준 것이다.

```javascript
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];

```

- ```<h1>{number}</h1>```
  - ```<h1>```안에 는 0이 아니라 {number}를 넣어주면 되는데 이는 state를 변경해주는 함수(setNumber)에서 전달받은 최신 값을 반영해 준다.


      
