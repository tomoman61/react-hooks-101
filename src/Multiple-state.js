import React, { useState } from "react";

const MultipleState = props => {
  const [state, setState] = useState(props);
  const { name, price } = props;
  return (
    <>
      <div>{ name }の値段は{ price }です。</div>
      <button onClick={ () => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={ () => setState({ ...state, price: price - 1 }) }>-1</button>
      <button onClick={ () => setState(props) }>reset</button>
      <input value={ name } onChange={ e => setState({ ...state, name: e.target.value })}/>
    </>
  );
}

MultipleState.defaultProps = {
  name: 'サンプル',
  price: 1000,
}

export default MultipleState;