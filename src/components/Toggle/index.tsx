import type { CSSProperties } from 'react';
import styles from './index.module.css';

interface ToggleProps {
  isChecked?: boolean;
  label: string;
  size?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = ({
  isChecked = false,
  label,
  size = 48,
  onChange: handleChange,
}: ToggleProps) => {
  return (
    <label
      className={styles.toggleWrapper}
      style={{ '--size': `${size / 16}rem` } as CSSProperties}
    >
      <span className={styles.visuallyHidden}>{label}</span>
      <input
        className={styles.toggle}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    </label>
  );
};

export default Toggle;
