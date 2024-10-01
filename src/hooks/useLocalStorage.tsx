import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = JSON.stringify(storedValue);
      localStorage.setItem(key, item);
    } catch (error) {
      console.error(error);
    }
  }, [storedValue]);

  return [storedValue, setStoredValue];
}
