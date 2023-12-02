import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = JSON.stringify(storedValue);
      window.localStorage.setItem(key, item);
    } catch (error) {
      console.log(error);
    }
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
