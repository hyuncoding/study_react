# React

### React app 생성

-   `npx create-react-app [프로젝트명]`으로 생성한다.
-   이후 터미널에 `cd [프로젝트명]`을 입력하고 `code .`으로 vs code를 연다.

-   자동으로 react 환경이 구축되며, 각 폴더는 아래와 같은 역할을 담당한다.
-   `node_modules/`: `Create React App tool`과 함께 설치된 모든 node package가 들어있다. dependencies와 devdependencies가 들어있으며,  
    추후 설치할 다른 패키지들도 이 폴더에 보관된다.
-   `public/`: `public/index.html`이나 `public/manifest.json` 등의 중요한 public 파일이 보관된다.
-   `index`파일은 app이 개발 환경일 때 혹은 hosted domain일 때 `localhost:3000`에 표시된다.
-   이 파일은 React component들의 실행 결과를 index 파일의 루트 div container에 넣는다.
-   `manifest.json` 파일은 어플리케이션의 메타데이터나 반응형 화면을 위한 세부 내용을 담고 있다.

-   `src/`: 80% 이상의 코딩은 여기에서 이루어진다. component들과 `App.js`, `App.css`, `index.css`, `App.test.js`, `index.js`  
    등이 포함된다.
-   App.js는 component를 구현하기 위해 사용된다. 어플리케이션의 규모가 작을 경우 App.js 하나에 모든 component 코드가 들어갈 수 있지만, 규모가 커질 경우 split하는 게 더 좋을 수 있다.
-   App.css는 component를 스타일링하는 데 사용된다. index.css도 마찬가지이며, 이때는 전체적인 어플리케이션 스타일링에 사용된다.
-   App.test.js 는 단위테스트에 사용된다.
-   index.js는 어플리케이션으로의 entry point이다.

-   package.json은 node package dependencies와 프로젝트에 사용되는 다른 메타데이터를 담는다. npm을 사용하는 다른 컴퓨터에서의 세팅을 더 손쉽게 해준다.
-   package-lock.json은 npm으로 설치된 패키지의 버전을 담는다.

-   **터미널에 `npm start`를 입력하여 기본 어플리케이션을 run할 수 있다.**

### 화살표 함수 (Arrow Function, ES6 기능)

-   간단한 내용이지만 주의할 점은 아래와 같다.
-   object method(객체 메소드)에서 화살표 함수는 own context를 가지지 않으므로 객체 안의 다른 프로퍼티에 정상적으로 접근하지 못한다.

          const speaker = {
              name: 'Alice Andrew',
              sayHi: function () {
                  console.log(`Hi, I'm ${this.name}!`);
              }
          }
          speaker.sayHi(); // output: Hi, I'm Alice Andrew!

          // 화살표 함수 사용 시
          const speaker = {
              name: 'Alice Andrew',
              sayHi: () => {
                  console.log(`Hi, I'm ${this.name}!`);
              }
          }
          speaker.sayHi(); // output: Hi, I'm undefined!

### 비구조화 (Destructuring, ES6 기능)

-   비구조화를 사용하면 코드를 간결하게 작성할 수 있다.

          const speakers = ["John", "Walke", "Dan", "Sophie"];
          const firstspeakerName = speakers[0];
          const secondspeakerName = speakers[1];
          const thirdspeakerName = speakers[2];
          const fourthspeakerName = speakers[3];
          console.log(firstspeakerName); // "John"
          console.log(secondspeakerName); // "Walke"
          console.log(thirdspeakerName); // "Dan"
          console.log(fourthspeakerName); // "Sophie"

          // 비구조화 사용 시
          const speakers = ["John", "Walke", "Dan", "Sophie"];
          const [firstspeakerName, secondspeakerName, thirdspeakerName, fourthspeakerName] = speakers;
          console.log(firstspeakerName); // "John"
          console.log(secondspeakerName); // "Walke"
          console.log(thirdspeakerName); // "Dan"
          console.log(fourthspeakerName); // "Sophie"

-   또한 `...rest`를 사용하여 특정 원소만 제외하고 가져올 수도 있다.

        const speakers = ["John", "Walke", "Dan", "Sophie"];
        const [, ...rest] = speakers; // ...는 spread operator(스프레드 연산자)라고 불린다.
        console.log(rest); // output: "Walke", "Dan", "Sophie" (John은 생략된다)

-   배열이 아닌 객체에서도 비구조화가 가능하다.

          const speakers = {
              id: 1,
              name: "Juliet Runolf",
              company: "Abernatny Group",
              address: {
                  street: "Okaland Dtuse",
                  city: "Greenland",
                  state: "Houston",
                  country: "USA",
              }
          };

          function App() {
              const {name, jobTitle, company, address} = speakers; // 비구조화
              const {street, city, state, country} = address; // nested된 address 프로퍼티를 다시 비구조화
              return (
                  <div>
                      <h2>Name: {name}</h2>
                      <h4>Position: {jobTitle}</h4>
                      <h4>Company: {company}</h4>
                      <h4>Street: {street}</h4>
                      <h4>City: {city}</h4>
                      <h4>State: {state}</h4>
                      <h4>Country: {country}</h4>
                  </div>
              );
          }

-   비구조화는 프로퍼티에 default value를 설정하는 것도 허용한다.

          const {name = 'Anonymous', age = 0} = speaker;

-   비구조화는 component에서 `props`과 `state`에 접근할 때 사용한다.

### Default and named exports

-   각 파일 당 하나의 default export만 가능하다.

          import Speaker from './Speaker';

-   그리고 export할 파일에 아래와 같은 코드를 작성한다.

          function App() {
              return (
                  <div> ... </div>
              );
          }

          export defalt App; // 이 line이 바로 파일을 다른 컴포넌트 파일로 export할 수 있게 해주는 line이다.

-   named export는 한 파일 당 여러 개가 가능하다.

          import { FirstComponent, SecondComponent } from "./ThirdComponent";

### Components

-   component는 React 어플리케이션의 **'core building block'**이다.
-   vanilla javascript로 `DOM`을 다룰 때에는 시간도, 노력도 많이 들 수 있다.
-   React에서는 `virtual DOM`을 사용하여 이 문제를 해결한다. DOM은 전체 DOM tree를 update하는 대신 바뀐 부분만 update한다.
-   React 컴포넌트는 **재사용이 가능하고, 유지가 가능하며, self-contained 되어 있고 UI를 return**한다.
-   즉, 컴포넌트는 javascript와 함께 HTML 요소를 return한다.

-   `class component`보다 `function component`가 더 많이 사용되는 추세이다.

-   App 컴포넌트는 HTML 코드를 return하는데, 이때 HTML 코드는 HTML과 Javascript가 섞여 있는 형태이다.
-   이를 `JavaScript XML (JSX)`라고 부른다.

### Function component

-   전형적인 JS 함수 형태이지만, props로 데이터를 전달받고 JSX 형태의 HTML 요소를 리턴하는 컴포넌트 종류이다.
-   function component 안에 선언한 변수 뿐만 아니라 밖에 선언한 변수 또한 return하는 HTML 요소 안에서 사용할 수 있다.
-   변수는 {변수이름}의 형태로 사용한다.

### Class component

-   React는 함수나 클래스를 통해 UI 컴포넌트를 만들 수 있는 유연함을 제공한다.
-   class component는 `React.Component` 를 상속받는 JS 클래스로서, `render()`메소드를 호출하여 HTML 요소를 리턴한다.
-   Hooks가 나오기 전까지 state를 관리할 수 있는 유일한 방법이었다.

### 두 컴포넌트의 차이

-   Class component에서는 반드시 `React.Component` 를 상속받은 후 `render()`메소드를 호출해야 한다.
-   반면 function component에서는 `props`를 매개변수로 전달 받고 HTML요소를 리턴한다.
-   class component는 stateful, function component는 stateless가 특징이다. 다만, Hooks의 등장 이후 function component도  
    stateful하는 것이 가능해졌다.
-   stateful과 stateless의 차이는 'state'를 가지고 있느냐의 여부이다.

-   class component에서는 `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()`등의 lifecycle 메소드를  
    사용할 수 있지만, function component에서는 불가능하다.

### Component life cycle
