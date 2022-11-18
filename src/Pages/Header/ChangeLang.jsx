import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const ChangeLang = () => {

    const { i18n } = useTranslation();

    document.body.dir = i18n.dir();

    const [lang, setLang] = useState(i18n.language);

    return (<>
        {lang !== 'en-US' && <Link to={'#'} onClick={() => { setLang('en-US'); i18n.changeLanguage('en-US'); }} className="mx-3 my-2 color-black">
            <b>EN</b>
        </Link>}
        {lang !== 'fa' && <Link to={'#'} onClick={() => { setLang('fa'); i18n.changeLanguage('fa'); }} className="mx-3 my-2 color-black">
            <b>FA</b>
        </Link>}
    </>)
}

export default ChangeLang;