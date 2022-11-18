import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderSearch.css';

const HeaderSearch = () => {

    const [searchShow, setSearchShow] = useState(false);
    const [search, setSearch] = useState('');

    return (<>

        <Link to={'#'} onClick={() => { setSearchShow(true) }} className="mx-3 my-2 color-black">
            <i className="fa fa-search"></i>
        </Link>

        {searchShow && <div className="page-content fix-background">
            <div onClick={() => { setSearchShow(false);setSearch('') }} className='fix-background opacity-0'></div>
            <div className="content search-position mt-0 mb-0">
                <div className="search-box search-dark shadow-xl border-0 bg-theme rounded-sm bottom-0">
                    <i className="fa fa-search"></i>
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" className="border-0" placeholder="Search here.. - try the word demo " />
                </div>
                {/* <div className="search-results disabled-search-list">
                    <div className="list-group list-custom-large">
                        <a href="#" data-filter-item="" data-filter-name="all demo smartphone apple iphone ios">
                            <i className="fab fa-apple color-gray-dark"></i>
                            <span>Apple</span>
                            <strong>Works on iOS 10 and Higher</strong>
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="search-no-results disabled mt-4">
                    <div className="card card-style mx-0">
                        <div className="content">
                            <p className="mb-n1 font-600 color-highlight">Sorry, there are</p>
                            <h1>No Results</h1>
                            <p>
                                Your search brought up no results. Try using a different keyword. Or try typying all
                                to see all items in the demo. These can be linked to anything you want.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>}
    </>);
}

export default HeaderSearch;