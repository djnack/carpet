import { Link } from "react-router-dom";

import useDarkMode from "../../DarkMode/useDarkMode";

const ChangeDarkMode = () => {

    const [theme, setTheme] = useDarkMode();

    document.body.dataset.theme = theme === null ? 'dark' : theme;

    return (<>
        {theme === 'light' &&<Link to={'#'} onClick={() => { setTheme('dark') }} className="mx-3 my-2 color-black">
            <i className="fa fa-moon"></i>
        </Link>}
        {(theme === 'dark' || theme === null) && <Link to={'#'} onClick={() => { setTheme('light') }} className="mx-3 my-2 color-black">
            <i className="fa fas fa-sun color-yellow-dark"></i>
        </Link>}
    </>);
}

export default ChangeDarkMode;