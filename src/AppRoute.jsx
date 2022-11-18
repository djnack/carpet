import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

export default function AppRoute() {

    const routeHome = process.env.REACT_APP_ROUTER_HOME;
    const routeAbout = process.env.REACT_APP_ROUTER_ABOUT;
    const routeMarket = process.env.REACT_APP_ROUTER_MARKET;
    const routeBlog = process.env.REACT_APP_ROUTER_BLOG;

    return (<>
        <Routes>
            <Route path={routeHome} element={<Home />} />
            <Route path={routeAbout} element={'about'} />
            <Route path={routeMarket} element={'market'} />
            <Route path={routeBlog} element={'blog'} />
            {/* <Route path='/' element={<Auth><Home /></Auth>} /> */}

            ========================= AUTH ========================
            {/* <Route path={path_login} element={<Guest><Login /></Guest>} /> */}

            ========================= CONFIG ========================
            {/* <Route path={path_config} element={<Auth><Config /></Auth>} /> */}

            {/* <Route path={register} element={<GuestRoute><Auth page='register' /></GuestRoute>} /> */}
            {/* <Route path={logout} element={<AuthRoute><Auth page='logout' /></AuthRoute>} /> */}
            {/* <Route path={otp} element={<GuestRoute><Auth page='otp' /></GuestRoute>} /> */}
            {/* <Route path={reset_password} element={<AuthRoute><Auth page='reset_password' /></AuthRoute>} /> */}

            {/* <Route path={verify} element={ */}
            {/* // <AuthRoute> */}
            {/* <IsNotVerify> */}
            {/* <Verify /> */}
            {/* </IsNotVerify> */}
            {/* </AuthRoute>} /> */}

            {/* <Route path={product}> */}
            {/* <Route path=":id/:slug" element={<Product />} /> */}
            {/* <Route index element={<ProductAll />} /> */}
            {/* </Route> */}

            <Route path='*' element={'<Error404 />'} />
        </Routes>
    </>);
}