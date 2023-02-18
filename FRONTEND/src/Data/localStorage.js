export const setItemToStorage = (key, value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(`${key}`, JSON.stringify(value));
    }
  };
  
  export const getItemFromStorage = (key) => {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem(key));
    }
  };
  
  export const removeItemFromStorage = (key) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  };