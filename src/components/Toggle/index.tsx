import styles from './index.module.css';

interface ToggleProps {
  isChecked?: boolean;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = ({
  isChecked = false,
  onChange: handleChange,
  label,
}: ToggleProps) => {
  return (
    <>
      <label className={styles.visuallyHidden}>{label}</label>
      <input
        className={styles.toggle}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    </>
  );
};

export default Toggle;
