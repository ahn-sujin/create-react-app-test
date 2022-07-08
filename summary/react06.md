## map 반복문

### map()
- map함수는 배열을 받아서 또다른 배열을 반환해준다.
- 반환되는 배열 요소는 JSX로 작성한다.
- ```arr.map(callback, [thisArg])```
  - callback: 새로운 배열의 요소를 생성하는 함수
  - currentValue: 현재 처리하고있는 요소
  - index: 현재 처리하고 있는 요소의 index값
  - array: 현재 처리하고 있는 원본 배열
  - thisArg(선택항목): callback 함수 내부에서 사용할 this래퍼런스
 
 > map() 함수 기본 예제
 ```javascript
 const number = [1,2,3,4,5]
 const result = number.map((num) => (num * 2));

 console.log (result);
 //결과
 // [2,4,6,8,10]
 
 ```
 
 > component 배열로 map하기
 ```javascript
 
const MapTest = () => {
    const number = ['menu1','menu2','menu3','menu4']  

    return(
       <ul>
         {number.map((menu) => (
           <li key = {index} >{menu}</li>
         ))}
       </ul>

    )
}

export default MapTest;
 
 // 화면에 출력되는 결과
 // menu1
 // menu2
 // menu3
 // mene4
 
 ```
 - 하지만 이 상태에서 앱을 실행하면 "key" prop가 없다는 오류 메세지가 뜨게 된다.
 
 <img src="/images/react08.png" width="600"/>

 ### key 설정하기
 - key값은 반복되는 요소에 고유의 값을 넣어줘야한다.
 - 리액트에서 key값은 컴포넌트를 렌더링 하였을 때 어떤 원소가 변경되었는지 빠르게 감지하기 위해 사용된다.
 - 만약 key가 설정되지 않았다면 가상 DOM을 순차적으로 비교하면서 감지하기 때문에 key가 없을때보다 속도가 느리다.
 - 이러한 key 값은 map() 함수를 호출할 때 인자로 넘기는 Callback 함수의 인자로 넘어오는 index 값을 사용하면 된다.

```javascript
const MapTest = () => {
    const number = ['menu1','menu2','menu3','menu4']  

    return(
       <ul>
         {number.map((menu, index) => (
           <li key = {index} >{menu}</li>
         ))}
       </ul>

    )
  }

export default MapTest;


```
 
