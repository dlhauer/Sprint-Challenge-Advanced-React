import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode');

  useEffect( () => {
    if (darkMode) { 
      // console.log('darkMode changed');
      document.querySelector('body').classList.add('dark-mode');
    }
    else {
      // console.log('darkMode is off');
      document.querySelector('body').classList.remove('dark-mode');
    }
  }, [darkMode])
  
  return [darkMode, setDarkMode];
}

export default useDarkMode;