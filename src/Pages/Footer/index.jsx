import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Fotter = () => {

    const routeHome = process.env.REACT_APP_ROUTER_HOME;
    const routeAbout = process.env.REACT_APP_ROUTER_ABOUT;
    const routeMarket = process.env.REACT_APP_ROUTER_MARKET;
    const routeBlog = process.env.REACT_APP_ROUTER_BLOG;

    const [t] = useTranslation();
    const location = useLocation().pathname;

    return (<>
        <footer className="d-flex justify-content-between m-5">
            <div className="header-nav">

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
            </div>
            <div>
                <Link to={'#'} className="mx-3 my-2 color-black">
                    <i className="fa fa-share-alt mt-3"></i>
                </Link>
                <Link to={'#'} className="mx-3 my-2 color-black">
                    <i className="fa fa-share-alt mt-3"></i>
                </Link>
                <Link to={'#'} className="mx-3 my-2 color-black">
                    <b>G</b>
                </Link>
                <Link to={'#'} className="mx-3 my-2 color-black">
                    <b>F</b>
                </Link>
                <Link to={'#'} className="mx-3 my-2 color-black">
                    <b>FA</b>
                </Link>
            </div>
        </footer>
    </>);
}

export default Fotter;