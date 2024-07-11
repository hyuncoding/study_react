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

-   React에서 component는 `mounting` - `updating` - `unmounting`의 3단계 life cycle을 가진다.

#### Mounting Phase

-   component 인스턴스가 생성되고 DOM에 삽입되는 단계이며, 4가지 메소드가 존재한다.
-   `constructor()`

    -   실제로는 component가 mount되기 전에 호출된다.
    -   이 메소드를 호출할 때 `props`를 매개변수로 받을 수 있다.
    -   `super(props)`로 이어진다.
    -   이 메소드의 목적은 크게 2가지이다.
    -   첫 번째는 state 초기화이다.
    -   `this.state` 객체를 정의하고, 그 객체에 초기값을 할당하는 과정이며, `state`는 컴포넌트의 동적인  
        데이터를 저장하고 관리하는 데 사용된다.
    -   두 번째 목적은 인스턴스 메소드 바인딩이다.
    -   `constructor()` 안에서 클래스 메소드를 컴포넌트 인스턴스에 바인딩할 수 있으며, 이는 이벤트 핸들러를  
        정의할 때 중요하다.
    -   위 두 가지 목적은 컴포넌트가 올바르게 동작하고, 초기화된 상태를 가지고 있으며,  
        인스턴스 메소드가 올바르게 바인딩되어 예상한 대로 동작하도록 보장한다.

-   `static getDerivedStateFromProps()`

    -   DOM에서 요소들을 render하기 전에 즉시 호출된다.

-   `render()`

    -   가장 필수적인 메소드로, React HTML 요소를 출력하기 위해 항상 필요하다.
    -   DOM에 HTML을 주입한다.
    -   인터페이스에서 보이는 것들은 이 메소드가 JSX 형태로 무엇을 return하는지에 의존한다.

-   `componentDidMount()`
    -   컴포넌트가 DOM 트리에 render된 후에, 특히 첫 번째 `render()` 호출 후에 이 메소드가 초기화된다.
    -   컴포넌트가 mount되면 사용자의 액션과 다른 부가 효과들을 실행할 수 있도록 해준다.
    -   예를 들어, 이 메소드는 외부 소스로부터 데이터를 로드해야하는 statement를 실행할 수 있다.
    -   또한 컴포넌트가 render되고 나면 사용자 또는 시스템 이벤트를 trigger할 수 있다.

#### Updating Phase

-   컴포넌트가 초기 마운트 이후에 어떻게 변하는지를 비유적으로 "가상의 성장 단계(hypothetical  
    growing phase)"라고 할 수 있다.
-   mounting phase 이후 즉시 이루어진다.
-   `componentDidUpdate()` 메소드가 주로 사용된다.
-   data state나 props에 변화가 있을 때마다 컴포넌트가 업데이트된다.
-   state는 `render()` 메소드를 사용하여 re-render되며, 업데이트된 state가 UI에 리턴된다.
-   이전의 가상 DOM과 새로운 가상 DOM을 비교하여 실제 DOM에 필요한 최소한의 변경 사항만 적용한다.
-   이 과정은 매우 효율적으로 수행되며, 필요 없는 업데이트를 방지하여 성능을 최적화한다.

#### Unmounting Phase

-   컴포넌트가 DOM 트리에서 unmount되기 직전에 `componentWillUnmount()` 메소드가 호출된다.
-   사용자 interaction 사이클의 모든 지점에서, 컴포넌트는 DOM 트리에 삽입되거나 상태가 변경되거나  
    생명 주기(life cycle)가 완료된다.

### Props

-   함수와 클래스 컴포넌트에 전달되는 매개변수를 가리킨다.
-   즉, 하나의 컴포넌트에서 다른 컴포넌트로 데이터를 전달하기 위해 사용하며,  
    속성의 값을 저장하는 객체를 가리킨다.
-   컴포넌트를 customize하고 configure하는 데 사용되며, 컴포넌트 트리에서 부모로부터 자식으로  
    전달된다. 이는 **부모 컴포넌트만 자식 컴포넌트로 정보를 전달할 수 있음**을 의미한다.
-   즉, 단방향 데이터 flow 개념이다.
-   본질적으로 `read-only`이며, 받는 컴포넌트에서는 값을 직접적으로 수정할 수 없다.

### State

-   state는 빌트인 객체로, 컴포넌트에 대한 정보를 담기 위해 사용된다.
-   컴포넌트의 상호 작용을 담당한다.
-   컴포넌트 state에 변화가 생기면 react는 컴포넌트를 re-render한다.
-   사용자 액션에 대한 반응이나 시스템에서 발생시킨 이벤트에 따라 state가 변화할 수 있다.
-   `props`가 본질적으로 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달한다면,  
    `state`는 컴포넌트의 내부 데이터를 바꾼다.

-   예를 들어 사용자가 검색창 input태그에 무언가를 입력한다면, 입력한 정보를 보고 싶어 한다.
-   이는 어플리케이션 어딘가에 표시되는 새로운 state를 represent한다.

### Hooks

-   React v16.8 이전까지 컴포넌트에 state와 state transition을 추가하는 것은 오직  
    class component에서만 가능했으며, function component는 stateless였다.
-   function component는 오직 JSX 요소만을 display할 수 있었다.
-   하지만 `Hooks API`를 통해 function component에도 state와 state transition을  
    추가할 수 있게 되었다.

-   hook은 function component 안에서 state나 컴포넌트 life cycle 메소드를  
    사용할 수 있게 해주는 함수다.
-   stateful 로직을 컴포넌트 rendering 로직으로부터 분리할 수 있게 해줌으로써,  
    다른 컴포넌트들에서 재사용하기 쉽게 만들어준다.
-   즉 모듈화 및 재사용성에서 큰 장점이 있다.

### useState

-   state를 관리할 수 있도록 해주는 hook이다.
-   function component는 useState에 의존하여 state 변수를 추가한다.
-   이미 존재하는 데이터에 변화를 주면, 이 변화가 state로 저장된다.

-   `useState()`에 초기 state 프로퍼티를 전달하면, 현재 state값과 이 값을 업데이트할  
    함수를 return해준다.

            const [state, stateUpdater] = useState(initialState);

-   간단한 사용 예시는 아래와 같다.

          import React, {useState} from 'react';
          const App = () => {
              const [count, setCount] = useState(0);
              const handleIncrementByTen = () => {
                  setCount(count + 10);
              }
              const handleDecrementByTen = () => {
                  setCount(count - 10);
              }
              const resetCountHandler = () => {
                  setCount(0);
              }
              return (
                  <div>
                      Initial Count: {count}
                      <hr />
                      <div>
                          <button type="button"
                              onClick={handleIncrementByTen}>
                              Increment by 10
                          </button>
                          <button type="button"
                              onClick={handleDecrementByTen}>
                              Decrement by 10
                          </button>
                          <button type="button"
                              onClick={resetCountHandler}>
                              Reset to Initial State
                          </button>
                      </div>
                  </div>
              );
          };
          export default App;

-   `useState()`에서 state 프로퍼티만을 선언할 수 있지만, 자료형은 원시자료형, 배열,  
    심지어 객체까지 모두 가능하다.

### state를 props로 전달하기

-   state는 정의된 컴포넌트 내 뿐만 아니라 props로 자식 컴포넌트에게 전달할 수도 있다.
-   자식 컴포넌트(function component일 경우)의 props 자리에 전달하면 된다.

### Conditional rendering with state

-   {}를 사용하여 조건문을 감싼다.
-   &&을 통해 앞의 조건식 또는 conditional state가 true일 경우에만 뒤의 표현식을 적용한다.

### useEffect

-   `useEffect`를 통해 외부에서 데이터를 `fetch`하거나, DOM 트리를 update하거나,  
    데이터를 구독(실시간 업데이트)할 수 있다.
-   이러한 operations들을 **side effect**라고 부른다.
-   `useEffect`는 function과 optional dependency를 받는다.

-   중요한 점은, `useEffect`가 기존의 `componentDidMount`, `componentDidUpdate`,  
    `componentWillUnmount`의 기능을 한 곳에서 할 수 있다는 점이다.
-   `useEffect(<function>, <dependency>)`

          useEffect(() => {
              // 이 콜백함수 구현은 DOM 업데이트, 외부 데이터 fetch, 데이터 구독 등을
              // 위한 것이다.
          }, [dependency]);

### useContext

-   state 데이터를 컴포넌트 트리에서 모든 층마다 props로 전달할 필요 없이 전체가 공유할  
    수 있도록 해준다.
-   deeply nested components에서 `useState`보다 훨씬 효율적이다.

          const Context = useContext(initialValue);

-   `<context.Provider value={{ 변수 }}></context.Provider>` 안에서 value에 작성한  
    변수의 값, 즉 state 데이터를 자유롭게 사용할 수 있다.
-   이 때 아래와 같이 가져와 return하는 JSX 안에서 사용한다.

          const {변수} = useContext(context);

### useRef

-   DOM 요소에 직접 접근할 수 있도록 해주며, re-render 시에도 state value가 유지되도록  
    해준다.
-   re-render 시에 state value를 유지하거나 값을 업데이트할 수 있는데, 업데이트 시  
    `useState`와 달리 re-render 메커니즘을 trigger하지 않는다.

### useReducer

        const [state, dispatch] = useReducer(reducer, initialState);

-   `reducer`에는 함수가 위치한다.
-   `useReducer`는 현재 상태와 `dispatch` 함수를 return한다.

-   이해를 위해 숙지해야 할 개념은 아래와 같다.
-   State: 변할 수 있는 데이터로, 꼭 객체일 필요는 없으며 배열이나 숫자일 수도 있다.
-   Dispatch: state를 바꿀 수 있게 해주는 함수로, state를 바꾸는 action을 trigger한다.
-   Reducer: state를 어떻게 바꿀지에 대한 비즈니스 로직을 handle하는 함수이다.
-   InitialState: 어플리케이션의 초기 상태이다.
-   Action: 프로퍼티의 집합으로 구성된 객체이다. Type는 필수 프로퍼티이다.
-   Payload: 네트워크 데이터 chunk 안에서 관심 있는 데이터를 가리킨다.

-   `useReducer`의 주요 목적은 복잡한 여러 개의 state를, state 관리 로직이  
    컴포넌트 view functionality와 분리될 수 있도록 관리하는 것이다.

### useMemo

-   React 어플리케이션의 퍼포먼스를 향상시키기 위한 Hook API이다.
-   memoization 기법을 사용한다.
-   두 가지의 성능 문제를 해결할 수 있다.
-   첫째, 불필요한 컴포넌트 re-rendering을 방지할 수 있다.

### useCallback

-   `useCallback` 또한 퍼포먼스를 향상시키기 위한 Hook API이다.
-   return하는 출력에 차이가 있다.
-   `useCallback`에서는 메모이제이션된 함수가 return되는 반면,  
    `useMemo`에서는 메모이제이션된 값이 return된다.

### React에서의 데이터 통신

-   기본적으로 HTTP 프로토콜에서는 JSON과 XML 2개의 형식으로 데이터를 주고 받는다.
-   현재 기준 JSON이 훨씬 더 활발히 사용되고 있다.

-   1. `fetch API` 사용

-   2. `axios` 사용

-   3. `React Query` 사용

    -   앞선 두 가지 방식은 간단하지만, React Query 사용 시 주의할 점이 있다.
    -   `index.js`에 `QueryClient`와 `QueryClientProvider`를 추가해야 한다.
    -   대신, fetch나 axios보다 간결한 코드로 데이터를 주고 받기 편하게 되어 있다.

### JSX (JavaScript Syntax Extension)

-   XML과 비슷한 JavaScript의 syntax extension이다.
-   기본적으로 브라우저는 JSX 구문을 해석하지 못하지만, `Babel Compiler`를 통해  
    JavaScript 구문으로 변환된다.
-   이때, Babel은 단순한 변환을 넘어 최적화까지 수행하므로 속도가 빠르다.
-   DOM(Document Object Model)과 밀접히 관련되어 있다.
-   React는 Virtual DOM(VDOM)을 사용한다.
-   VDOM은 원래 브라우저 DOM의 추상화된 버전이다.
-   React 컴포넌트는 변동 사항이 있는 노드만 re-render한다.

-   HTML과 달리 `class` 대신 `className`을, label태그에서 `for`대신 `htmlFor`을 사용한다.
-   Javascript 표현식을 사용할 경우 중괄호({})로 묶어준다.
-   태그들을 하나의 부모 태그로 묶어서 return해야 한다.
-   이때 사용할 수 있는 것들 중 하나가 바로 `<></>`(fragment tag)이다.
-   self-closing 태그를 사용하려면 반드시 `/`(슬래시)를 작성해야 한다.

          <br> 대신 <br /> 작성

-   UI 컴포넌트를 생성할 때 `React.createElement(Button, {}, '')`로도 만들 수 있지만,  
    JSX 구문을 활용하여 `<Button></Button>` 형태로 만드는 것이 더 권장된다.

### Event Handling

-   React에서의 이벤트 시스템은 SyntheticEvent라고 불린다.
-   onClick, onChange, onInput, ... 등 다양한 이벤트가 존재한다.

### JSX에서 객체에 반복문 사용

-   JavaScript의 객체에서는 for문으로 반복문을 수행할 수 없다.
-   대신, `Object.Keys()`를 활용하여 반복문을 수행한다.
-   ES2017부터는 `Object.values()`와 `Object.entries()`가 추가되었다.

-   `Object.Keys()`는 프로퍼티 배열을 리턴한다.
-   `Object.values()`는 프로퍼티별 값으로 이루어진 배열을 리턴한다.
-   `Object.entries()`는 `[key, value]`로 이루어진 2차원 배열을 리턴한다.
