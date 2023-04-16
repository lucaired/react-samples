import { Fragment, useContext } from "react"; 
/**
 * Renders nothing, but can have children. This allows us to render the NavBar
 * without having to use a surrounding div. Divs are fine normally, but they
 * can cause problems when using flexbox. See the following link for more info:
 * https://stackoverflow.com/questions/41421596/why-doesnt-flexbox-work-on-direct-child-of-body
 */

import { Link, Outlet } from "react-router-dom"; // shows the child routes
import { UserContext } from "./UserContext";

const UserSymbol = () => {
    const { user, setUser } = useContext(UserContext);
    const handleLogin = () => {
        setUser({
            name: "John Doe",
            email: "john@doe.com",
            loggedIn: true,
        });
    }
    return (
        <Fragment>{
            user?.loggedIn 
            ? <span>{user.name}</span> 
            : <button onClick={handleLogin}>Login</button>
        }</Fragment>
    );
}

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
                    alignItems: "center",
                }}              
            >
                <Link to="/">Home</Link>
                <Link to="state">State</Link>
                <Link to="effect">Effect</Link>
                <UserSymbol/>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavBar;