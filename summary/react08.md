## json-server, REST API

### 필요한 이유
- 사용자의 액션에 따라서 데이터를 읽고, 쓰고, 업데이트하고 삭제하기 위해서 db를 구축하고 api를 만들어야한다.
- 이때 필요한것이 ```json-server```와 ```REST API``` 이다.

### json-server
- 별도의 서버가 없는 환경에서 프론트엔드 작업을 진행하고자 할때 유용하다. (공부목적, 작은 프로젝트용)
- 쉽고 빠르게 REST API를 구축한다.
- 설치
  - ```npm install -g json-server ```
  - ```json-server --watch 경로 --port 포트번호``` &nbsp; &nbsp; 예시) ```json-server --watch ./src/db/data.json --port 3001```
- 오류

  <img src="/images/react09.png" width="800"/>
  
  - ❗️Mac에서 global 설치시 오류가 발생 할 수 있음, 앞에 ```sudo```를 입력해준다.
  - ```sudo npm install -g json-server```를 입력하고, 비밀번호는 맥의 비밀번호를 입력해주면 된다.

### REST API
- URI주소와 메서드로 CRUD요청을 하는것
- URI주소
  - URI는 특정 리소스를 식별하는 통합 자원 식별자(Uniform Resource Identifier)를 의미한다.
  - ``` http://torang.co.kr/user/107```
  - 107의 ID값을 가지고있는 자원을 식별하고 있다. 
  - 따라서 위의 주소는 ```http://torang.co.kr/user/``` 까지는 자원의 실제 위치를 나타내고 끝의 ```/107``` 부분은 식별자이므로 URL을 포함한 URI라고 볼 수 있다.
  - [참고 사이트 (URL과 URI의 차이)](https://www.charlezz.com/?p=44767)
- CRUD
  - Create : POST
  - Read : GET
  - Update : PUT
  - Delete : DELETE
