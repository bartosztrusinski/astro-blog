import useDarkMode from '../../hooks/useDarkMode';
import Toggle from '../Toggle';
import styles from './index.module.css';

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className={styles.header}>
      <h1>
        Astro<span className="text-gradient">Blog🚀</span>
      </h1>
      <Toggle isChecked={isDarkMode} onChange={toggleDarkMode} />
    </header>
  );
};

export default Header;
