import React, { useCallback, useMemo, useState } from 'react';

export const ME = () => {
  const [numbers, setNumbers] = useState(0);
  const [text, setText] = useState('');

  // Using useCallback for calculationprogram function
  const calculationprogram = useCallback((params) => {
    for (let index = 0; index < 1000000000; index++) {}
    return params * 2;
  }, []);

  // Using useMemo to memoize the output
  const output = useMemo(() => {
    return calculationprogram(numbers);
  }, [numbers, calculationprogram]);

  return (
    <div>
      Callback
      {output}
      {text}
      <input
        type="number"
        placeholder="enter your number"
        onChange={(event) => setNumbers(Number(event.target.value))}
      />
      <input
        type="text"
        placeholder="enter your text"
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};
