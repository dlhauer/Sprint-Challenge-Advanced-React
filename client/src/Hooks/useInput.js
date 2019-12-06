import React, {useState} from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChanges = newValue => {
    setValue(newValue);
    console.log(newValue);
  };
  return [value, setValue, handleChanges];

}
 export default useInput;