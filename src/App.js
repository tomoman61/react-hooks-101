import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // console.log({ output });
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount(prevCount => (prevCount + 2));
  const decrement2 = () => setCount(prevCount => (prevCount - 2));
  const reset = () => setCount(prevCount => (prevCount = 0));
  const double = () => setCount(prevCount => (prevCount * 2));
  // const divine3 = () => setCount(prevCount => {
  //   if (prevCount % 3 === 0) {
  //     return prevCount / 3;
  //   } else {
  //     return prevCount;
  //   }
  // });
  const divine3 = () => setCount(prevCount => prevCount % 3 === 0 ? prevCount / 3 : prevCount);
  return (
    <>
      <div>
        <div>count: { count }</div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={ increment2 }>+2</button>
        <button onClick={ decrement2 }>-2</button>
      </div>
      <div>
        <button onClick={ reset }>reset</button>
        <button onClick={ double }>double</button>
        <button onClick={ divine3 }>3の倍数の時だけ３で割る</button>
      </div>
    </>
  );
}

export default App;