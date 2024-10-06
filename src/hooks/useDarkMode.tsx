import { useEffect } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import useMediaQuery from '@hooks/useMediaQuery';

export default function useDarkMode(): [
  isDarkMode: boolean,
  toggleDarkMode: () => void,
] {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    'ab-dark-mode',
    prefersDarkMode,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
}
