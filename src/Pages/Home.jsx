import { useTranslation } from 'react-i18next';

import SliderHome from './SliderHome';

function Home() {
    const [t, i18n] = useTranslation();
    let dir = i18n.dir() === 'rtl' ? 'ltr' : 'rtl';
    return (<>
        <div className="container text-center">
            <div className="row pt-0 p-5">
                <div className="col-12 col-md-6 mt-5">
                    <h1>{t('Hello, we are Metacarpet.')}</h1>
                    <p className='mt-3'>{t('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel')}</p>
                    <a href="#" className="btn btn-xl mb-3 rounded-xl bg-black color-white btn-more">{t('more')}</a>
                </div>
                <div className="col-12 col-md-6">
                    <img src="images/4.jpg" width={'400px'} alt="a" />
                </div>
            </div>
        </div>
        <div className="divider divider-margins"></div>
        <div className="container">
            <div className="row p-5">
                <div className="col-12 col-md-6 mt-5 ps-5">
                    <p>{t('Product Name')} : </p>
                    <p>{t('Production Year')} : </p>
                    <p>{t('Manufacturer')} : </p>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <SliderHome />
                </div>
            </div>
        </div>
        <div className='container section-one text-white' style={{ background: `linear-gradient(${i18n.dir() === 'ltr' ? '-' : ''}90deg,  transparent 0%, transparent 30%, #000c 60%,#000d 100%),url('images/4.jpg')` }}>
            <div className='row'>
                <div className="col-md-4 col-sm-6 col-xs-6 m-5">
                    <h2 className='color-white-only'>The Cryptopunks</h2>
                    <p className="small color-white-only">10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>
                    <a href="#" className="btn btn-outline-secondary color-white-only">READ MORE</a>
                </div>
            </div>
        </div>
        <div className='container section-one text-white' style={{ background: `linear-gradient(${i18n.dir() === 'rtl' ? '-' : ''}90deg,  transparent 0%, transparent 30%, #000c 60%,#000d 100%),url('images/4.jpg')`, direction: dir }}>
            <div className='row'>
                <div className="col-md-4 col-sm-6 col-xs-6 m-5">
                    <h2 className='color-white-only'>The Cryptopunks</h2>
                    <p className="small color-white-only">10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>
                    <a href="#" className="btn btn-outline-secondary color-white-only">READ MORE</a>
                </div>
            </div>
        </div>
        <div className='container section-one text-white' style={{ background: `linear-gradient(${i18n.dir() === 'ltr' ? '-' : ''}90deg,  transparent 0%, transparent 30%, #000c 60%,#000d 100%),url('images/4.jpg')` }}>
            <div className='row'>
                <div className="col-md-4 col-sm-6 col-xs-6 m-5">
                    <h2 className='color-white-only'>The Cryptopunks</h2>
                    <p className="small color-white-only">10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>
                    <a href="#" className="btn btn-outline-secondary color-white-only">READ MORE</a>
                </div>
            </div>
        </div>
    </>);
}

export default Home;