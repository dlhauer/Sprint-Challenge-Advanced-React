import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';
// import '../A';


function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    }

  return (
    <div className='dark-mode-toggle'>
      <div 
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}/>
        {/* Hello */}
    </div>
  )
}

export default DarkModeToggle;