import CategoryOne from "./Post/CategoryOne";

function Home() {
    return (<>
        <div className="content m-0 pt-5">
            <div className="row m-0 pt-2">
                <CategoryOne />
            </div>
        </div>
        <div className="content m-0 pt-5">
            <div className="row m-0 pt-2">
                <CategoryOne />
            </div>
        </div>
        <div className="content m-0 pt-5">
            <div className="row m-0 pt-2">
                <CategoryOne />
            </div>
        </div>
    </>);
}

export default Home;