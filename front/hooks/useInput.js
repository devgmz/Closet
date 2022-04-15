import { useState, useCallback } from 'react';

function useInput() {
  const [value, setValue] = useState( '' );
  
  const onChangeHandle = useCallback( (e) => {
    setValue( e.target.value );
  }, [] )
  
  return [value, onChangeHandle, setValue];
}

export default useInput;
