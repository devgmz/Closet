import { useState, useCallback } from 'react';

function useInput( initialValue = null) {
  const [value, setValue] = useState( initialValue );
  
  const onChangeHandle = useCallback( (e) => {
    setValue( e.target.value );
  }, [] )
  
  return [value, onChangeHandle, setValue];
}

export default useInput;
