import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useMediaQuery from './useMediaQuery';

type UseDarkMode = () => [isDarkMode: boolean, toggleDarkMode: () => void];

const useDarkMode: UseDarkMode = () => {
  const defaultDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    'ab-dark-mode',
    defaultDarkMode,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
