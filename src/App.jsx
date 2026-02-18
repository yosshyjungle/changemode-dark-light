import { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>{isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</h1>
        <p className="description">
          useState を使ってテーマを切り替えています
        </p>
        <button className="toggle-btn" onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode に切り替え' : 'Dark Mode に切り替え'}
        </button>
      </div>
    </div>
  );
}

export default App;
