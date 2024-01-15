const redux = require("redux");

// 리듀서 함수 - 리덕스 라이브러리에 의해 호출되는 함수
// 2개의 파라미터를 받는다.
// 1. 현재 상태
// 2. 액션 객체
// 리듀서 함수는 현재 상태와 액션 객체를 받아서 새로운 상태를 반환한다.
// 리듀서 함수는 순수 함수여야 한다.
// 순수 함수: 이전 상태와 액션 객체를 받아서 새로운 상태를 반환하는 함수
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Redux Store
const store = redux.createStore(counterReducer);

// 구독
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("latestState", latestState);
};

store.subscribe(counterSubscriber);

// 액션 디스패치
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
