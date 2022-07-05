## 05.State / useState

### state
- 컴포넌트가 갖고 있는 **속성값** 이다.
- 속성값이 변하면 리액트는 자동으로 ui를 변화시킨다.

### Hook
- react16.8 부터 사용이 가능하다.
- 모든 컴포넌트를 함수형으로 만들 수 있다.
- 함수형 컴포넌트에서도 state와 lifecycle 관리가 가능하다.

### useState
- ```import {useState} from 'react'``` 로 import해야 사용이 가능하다.
- 배열로 반환한다.
  - ```const [name, setName] = useState();```
  - 배열구조분해를 사용한다.
  - ```name``` : state(변수명)
  - ```setName``` : state를 변경해주는 함수
  - ```useState(초기값)```

- 동일한 컴포넌트 안에 있더라고 state는 각각 관리된다.(다른 state에 영향을 미치지 않는다.)

```javascript
import { useState } from 'react'; 

const Hello = () => {
    const [name, nameChange] = useState('asj');

    function chageName() {
        const newName = name === 'asj' ? 'hdh' : 'asj';
        nameChange(newName);
     }

    return (
        <div>
            <span>State</span>
            <p>{name}</p>
            <button onClick = {chageName}>Chane Name</button>
        </div>
    )
}

export default Hello;

```
