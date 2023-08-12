import { useState } from 'react';
import './sidenav.css';

const SideNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar state (open/close)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div 
            
            className={!isSidebarOpen?`account-screen`:"account-div"}  
          
            id='account-div'>

                {/* <button  onClick={toggleSidebar}>
                    &times;
                </button> */}
                <button
                    className="navbar-toggler side-nav"
                    onClick={toggleSidebar}
                >


                    <span className="navbar-toggler-icon">
                        <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                        <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }} ></div>
                        <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                    </span>

                </button>
               
                <div  id='navbarNavSide'>

                    <div className='img-account'>
                        <div>

                            <img src="icon_pro.png" alt="" style={{ width: "50px" }} />
                        </div>
                        <div className='user-name'>

                            <p>Registered</p>
                            <h3>hey Rinu</h3>

                        </div>

                    </div>
                    <div className='nav-item'>
                        <li>

                            <a href="">Profile</a>
                        </li>
                        <div className='side-menu'>

                            <p>
                                <i className="fas fa-user mx-2" />
                                <a href="my-account">My account</a>
                            </p>
                            <p>
                                <i className="fas fa-key mx-2" style={{ margin: "0px" }} />
                                <a href="update-password">Update Password</a>
                            </p>
                            <p>
                                <i className="fas fa-users mx-2" style={{ margin: "0px" }} />
                                <a href="">Teams</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SideNavbar;