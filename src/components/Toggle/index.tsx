import './index.css';

interface ToggleProps {
  isChecked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = ({ isChecked = false, onChange: handleChange }: ToggleProps) => {
  return (
    <>
      {/* TODO: add label */}
      <input
        className="toggle"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    </>
  );
};

export default Toggle;
