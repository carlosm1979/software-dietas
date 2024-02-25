import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";
export const Layout = () => {


    return (<div>
        <h1>Software dietas</h1>
        <Link to={'/search'}>Search</Link>
        <Outlet />
    </div>)
}