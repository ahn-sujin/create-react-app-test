## 05.State 와 Props

### state
- 컴포넌트가 갖고 있는 **상태값** 이다.
- 속성값이 변하면 리액트는 자동으로 ui를 변화시킨다.
- state는 컴포넌트 내부의 동적 데이터를 의미한다.

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

[useState에 대한 더 자세한 설명 보러가기](react10.md)

<br>

<hr>

### Props
- properties의 약자로 **컴포넌트의 속성값** 을 나타낸다.
- props는 컴포넌트에서 컴포넌트로 전달하는 데이터다. 
- props는 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서만 설정 가능함으로, **prop의 값은 컴포넌트 내부에서 변경할 수 없다.**


### Props 지정하기
- props는 ```<ComponentName prop1={propValue1} prop2={propValue2} ... /> ``` 형태로 컴포넌트를 부를 때 함께 지정한다. 

``` javascript
<Dog name="Ari" age={10} />
<Dog name="Bori" age={7} />

```

- 같은 타입의 컴포넌트에 다른 props 값을 주어, 패턴이 반복되는 형태로 컴포넌트의 효율적인 재사용이 가능하다.
- props에는 불리언 값(true, false), 숫자, 배열과 같은 다양한 형태의 데이터를 담을 수 있다. 공백 구분으로 여러 개를 담는 것도 가능하다.
- props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호({})로 값을 감싸야 한다.


### Props 사용하기
- props는 읽기 전용이므로 컴포넌트의 내부에서 props를 수정해서는 안 된다.
  - 만약 변경하고 싶다면, 컴포넌트 내부에서 state를 다시 만들어야한다.
  - 컴포넌트에서 설정한 state값을 변경할 수 있다. (props로 넘겨 받은 값은 변경X, 억지로 변경시 error발생)

> 객체 인자를 통해 props 받아오기
```javascript
function Dog(props) {
  consol.log(props)
  //결과
  //{name:'Ari', age:10}
  //{name:'Bori', age:7}
  
	return {
		<div>{props.name}</div>
		<div>{props.age}</div>
	}
}

```
- props를 받는 함수형 컴포넌트에 인자를 정의하면, props를 속성으로 가지는 객체 Object가 해당 인자로 전달된다. 
- 컴포넌트 내부에서 사용 시, 객체에 존재하는 값을 가져오듯 점 연산자(.)를 사용하여 원하는 props를 꺼내 쓸 수 있고, 이를 중괄호로 감싸 ```{ [인자 이름].[props 이름] }``` 형태로 사용한다.


<hr>

### 💡state와 props의 차이
- State
  - 한 컴포넌트 안에서 유동적인 데이터를 다룬다.
  - 컴포넌트 안에서 데이터 변경이 가능하다.
- props
  - 부모 컴포넌트에서 자식 컴포넌트로 전달되는 속성값이다.
  - 자식 컴포넌트에서 전달 받은 값을 변경 할 수 없다. 





