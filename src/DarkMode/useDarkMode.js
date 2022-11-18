import { useState, useEffect } from 'react';

const useDarkMode = () => {

    const [theme, setTheme] = useState(null);

    const changeTheme = (data) => {
        setTheme(data);
        window.localStorage.setItem('theme', data);
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme !== null)
            setTheme(localTheme);
    }, []);

    return [theme, changeTheme];
}

export default useDarkMode;