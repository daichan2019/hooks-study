import React, { useCallback, useState } from "react";

// Title Component
const Title = React.memo(() => {
  console.log("Title Component");
  return <h2>useCallback Test vol.1</h2>;
});

// Button Component
const Button = React.memo(({ handleClick, value }) => {
  console.log("Button child Component", value);
  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
});

// Counter Component
const Count = React.memo(({ text, countState }) => {
  console.log("Count child Component", text);
  return (
    <p>
      {text}:{countState}
    </p>
  );
});

export const Counter = () => {
  const [firstCountState, setFirstCountState] = useState(0);
  const [secondCountState, setSecondCountState] = useState(10);

  const incrementFirstCountState = useCallback(() => {
    setFirstCountState(firstCountState + 1);
  }, [firstCountState]);

  const incrementSecondCountState = useCallback(() => {
    setSecondCountState(secondCountState + 10);
  }, [secondCountState]);

  return (
    <>
      <Title />
      <Count text="+1" countState={firstCountState} />
      <Count text="+10" countState={secondCountState} />
      <Button handleClick={incrementFirstCountState} value={"+1"} />
      <Button handleClick={incrementSecondCountState} value={"+10"} />
    </>
  );
};
