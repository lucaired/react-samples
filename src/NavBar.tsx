import { Fragment } from "react"; 
/**
 * Renders nothing, but can have children. This allows us to render the NavBar
 * without having to use a surrounding div. Divs are fine normally, but they
 * can cause problems when using flexbox. See the following link for more info:
 * https://stackoverflow.com/questions/41421596/why-doesnt-flexbox-work-on-direct-child-of-body
 */

import { Link, Outlet } from "react-router-dom"; // shows the child routes

const NavBar = () => {
    return (
        <Fragment>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    borderBottom: "1px solid #ccc",
                    padding: "10px",
                }}              
            >
                <Link to="/">Home</Link>
                <Link to="state">State</Link>
                <Link to="effect">Effect</Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavBar;