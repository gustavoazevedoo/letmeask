import { useState } from "react";

type ButtonProps = {
  text?: string;
  color?: string;
  counter?: number;
}

export function Button(props: ButtonProps) {

  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(prevState => prevState + 1)
  }

  return(
    <button onClick={increment} style={{ backgroundColor: props.color}}>
      {counter}
    </button>
  )
}