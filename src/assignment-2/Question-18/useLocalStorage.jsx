import { useState } from "react";

const useLocalStorage = () => {
  const getValue = (key) => localStorage.getItem(key);
  const setValue = (key, value) => localStorage.setItem(key, value);
  const removeValue = (key) => localStorage.removeItem(key);

  return [getValue, setValue, removeValue];
};

export default useLocalStorage;
