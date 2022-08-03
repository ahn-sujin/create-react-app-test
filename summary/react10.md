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




conster() {
  return (
    <div>
      <h1>0</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default Counter;

```




<br>



## useState 사용



<br>


## 
    
    
    
    
