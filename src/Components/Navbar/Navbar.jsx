import "./navbar.css"
// {/*Importing Auth0 for login */}
import { useAuth0 } from "@auth0/auth0-react"; 


const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <div className="navbar">
            <div className="navcontainer">
                <span className="logo">BookMyPlex</span>
                <div className="navItems">

                    {/* {isAuthenticated && <p> {user.name} </p>} */}   {/*For showing user name */}

                    {/* Showing login & logout btn based on user login status */}
                    {isAuthenticated ? (
                        <button className="navButton" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                        ) : (
                            <button className="navButton" onClick={() => loginWithRedirect()}>My Account</button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar
