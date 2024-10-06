import Toggle from '@components/Toggle';
import MoonIcon from '@components/MoonIcon';
import SunIcon from '@components/SunIcon';
import useDarkMode from '@hooks/useDarkMode';

export default function DarkModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const toggleSize = 50;

  return (
    <Toggle
      isChecked={isDarkMode}
      onChange={toggleDarkMode}
      label={`Enable ${isDarkMode ? 'light' : 'dark'} mode`}
      size={toggleSize}
      uncheckedIcon={<MoonIcon size={toggleSize / 3} />}
      checkedIcon={<SunIcon size={toggleSize / 3} />}
    />
  );
}
