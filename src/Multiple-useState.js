import React, { useState } from "react";

const MultipleUseState = props => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const reset = () => {
    setName(props.name);
    setPrice(props.price);
  }
  return (
    <>
      <div>{ name }の値段は{ price }です。</div>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={ () => setPrice(price - 1) }>-1</button>
      <button onClick={ reset }>reset</button>
      <input value={ name } onChange={ e => setName(e.target.value) }/>
    </>
  );
}

MultipleUseState.defaultProps = {
  name: 'サンプル',
  price: 1000,
}

export default MultipleUseState;