import localStorageKullan from "./localStorageKullan";

const useBooleanToogle = (key,initialMod) => {
    const [val, setValueHandler] = localStorageKullan(key,initialMod);
    
    const toggleMode = (e) => {
        e.preventDefault();
        setValueHandler(!val);
      };

    return [val, toggleMode];
};

export default useBooleanToogle;