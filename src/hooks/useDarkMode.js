import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialModeValue) => {
    const [darkModeLS, setDarkModeLS] = useLocalStorage('dark', initialModeValue);

    return [darkModeLS, setDarkModeLS];
}

export default useDarkMode;