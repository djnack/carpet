import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import ChangeDarkMode from './ChangeDarkMode';
import ChangeLang from './ChangeLang';
import HeaderShare from './HeaderShare';
import HeaderSearch from './HeaderSearch';

import './HeaderMenu.css';

const Header = () => {

    const routeHome = process.env.REACT_APP_ROUTER_HOME;
    const routeAbout = process.env.REACT_APP_ROUTER_ABOUT;
    const routeMarket = process.env.REACT_APP_ROUTER_MARKET;
    const routeBlog = process.env.REACT_APP_ROUTER_BLOG;

    const [t] = useTranslation();
    const location = useLocation().pathname;

    return (<>


        <nav className="d-flex justify-content-between header">
            <h1>LOGO</h1>
            <div className="header-nav">
                <HeaderSearch />

                <Link to={routeHome} className={`${(location === routeHome) ? 'header-active' : ''}`}>
                    <p className='menu-header-p mx-3 my-2 header-nav-font'>{t('Home')}</p>
                </Link>
                <Link to={routeBlog} className={`${(location === routeBlog) ? 'header-active' : ''}`}>
                    <p className='menu-header-p mx-3 my-2 header-nav-font'>{t('Blog')}</p>
                </Link>
                <Link to={routeMarket} className={`${(location === routeMarket) ? 'header-active' : ''}`}>
                    <p className='menu-header-p mx-3 my-2 header-nav-font'>{t('Market')}</p>
                </Link>
                <Link to={routeAbout} className={`${(location === routeAbout) ? 'header-active' : ''}`}>
                    <p className='menu-header-p mx-3 my-2 header-nav-font'>{t('About')}</p>
                </Link>

                <ChangeDarkMode />
                <ChangeLang />
                <HeaderShare />
            </div>
        </nav>

        {/* <a href="#" className="mt-2 i38">
            <i className="fa fa-bars"></i>
        </a> */}
    </>);
}

export default Header;