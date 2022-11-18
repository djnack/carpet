import { Link } from 'react-router-dom';

const HeaderShare = () => {
    return (<>
        <Link to={'#'} className="mx-3 my-2 color-black">
            <i className="fa fa-share-alt"></i>
        </Link>
    </>);
}

export default HeaderShare;