import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    //setter function
    const setValue = value => {
        setStoredValue(value);
        //save to local storage:
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

export default useLocalStorage;