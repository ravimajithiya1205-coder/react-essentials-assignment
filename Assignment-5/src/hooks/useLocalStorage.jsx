import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorage;