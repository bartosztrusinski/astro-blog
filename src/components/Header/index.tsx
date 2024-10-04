import useDarkMode from '../../hooks/useDarkMode';
import Toggle from '../Toggle';
import MoonIcon from '../MoonIcon';
import SunIcon from '../SunIcon';
import styles from './index.module.css';

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const toggleSize = 50;

  return (
    <header className={styles.header}>
      <h1>
        Astro<span className="text-gradient">Blog🚀</span>
      </h1>
      <Toggle
        isChecked={isDarkMode}
        onChange={toggleDarkMode}
        label={`Enable ${isDarkMode ? 'light' : 'dark'} mode`}
        size={toggleSize}
        uncheckedIcon={<MoonIcon size={toggleSize / 3} />}
        checkedIcon={<SunIcon size={toggleSize / 3} />}
      />
    </header>
  );
};

export default Header;
