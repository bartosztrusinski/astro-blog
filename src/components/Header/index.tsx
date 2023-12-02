import useDarkMode from '../../hooks/useDarkMode';
import Toggle from '../Toggle';
import './index.css';

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className="header">
      <h1>
        Astro<span className="text-gradient">Blog🚀</span>
      </h1>
      <Toggle isChecked={isDarkMode} onChange={toggleDarkMode} />
    </header>
  );
};

export default Header;
