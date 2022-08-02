## useState를 통해서 바뀌는 값 관리하기

react에서는 유동적인 데이터를 저장하기 위해서 ```state```를 이용한다. ```state```는 동적인 값을 의미하는데, 직접 조작해서는 안되고 ```setState```함수를 이용해야한다.
왜냐하면 react는 ```state```의 값이 변경되면 리렌더링을 해주는데 이때 ```setState```를 이용하지 않고 직접 바꾸게 되면 react가 변경된 ```state```를 감지하지 못한다.

<br>

> useState 기본구조
> 
```javascript
import {useState} from 'react';

const [state, setState] = useState('');

```
