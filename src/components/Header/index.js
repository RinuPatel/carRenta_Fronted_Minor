import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AppConfig from "../../constants/AppConfig";
import './index.mudel.css'
import FetchApi from "../../constants/FetchApi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [istoken, setIstoken] = useState(false)
    const [loginUserName, setLoginUserName] = useState("")
    

    const DOMAIN = AppConfig.SUB_DOMAIN

    const cookieValue = Cookies.get('LTK');

    console.log("My current login cookies", cookieValue)
    const handelUserLoginOrNot = async () => {
        if (cookieValue) {
            const myRes = await FetchApi("check-login", "", {
                method: "GET",
                headers: {
                    "token": cookieValue
                }
            })
            setLoginUserName(myRes.fname)
            console.log("my login token", myRes.fname)
            if (myRes.status == "ok") {
                setIstoken(true)

            } else {
                setIstoken(false)
            }
        } else {
            setIstoken(false)
        }
    }

    useEffect(() => {
        handelUserLoginOrNot()
    }, []);

    // useEffect(() => {
    //     const handlerScroll = () => {
    //         if (window.pageYOffset > 100) {

    //             setScrolled(true)
    //         } else {
    //             setScrolled(false)

    //         }
    //     }

    //     window.addEventListener("scroll", handlerScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handlerScroll);
    //     };
    // }, []);

    const handlerLogOutUser = async () => {
        if (cookieValue) {
            const userLogOut = await FetchApi("user-logout", "", {
                method: "GET",
                headers: {
                    "token": cookieValue
                }
            })
            if (userLogOut.status === 200) {
                setIstoken(false)
                Cookies.remove("LTK");
                window.location.href = DOMAIN + "login";
            }
            console.log("my logOut data", userLogOut.status)
        }

    }

    const location = useLocation();

    // Function to determine if a link is active
    const isLinkActive = (path) => {
      return location.pathname === path;
    };
    return (
        <>
        {/* <div className="my-title-area">
                <h1>Go car randetal</h1>
            </div> */}
            <nav className="navbar navbar-expand-lg  fixed-top bg-black">
            

                <div className="container">
                    <a href="/" className="navbar-brand title-bar" >GoCarRental</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                    // aria-label="Toggle navigation"
                    >
                  

                        <span className="navbar-toggler-icon">
                            <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                            <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }} ></div>
                            <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                        </span>
                        {/* // } */}
                    </button>


                    <div className="collapse navbar-collapse " id='navbarNav'>
                        <div className="mx-auto"></div>
                        <ul className='navbar-nav'>
                            <li className={isLinkActive('/') ? 'active' : ''}>
                                <a href="/" className={` ${isScrolled ? "nav-link bg-light" : "nav-link text-white"}`}>Home</a>
                            </li>
                            <li className={isLinkActive('/cars-list') ? 'active' : ''}>
                                <a href="/cars-list" className="nav-link text-white">Fleet</a>
                            </li>
                            <li className={isLinkActive('/about-us') ? 'active' : ''}>
                                <a href="/about-us" className="nav-link text-white">About</a>
                            </li>
                            <li className={isLinkActive('/cantact-us') ? 'active' : ''}>
                                <a href="/cantact-us" className="nav-link text-white">Conract Us</a>
                            </li>
                            {!istoken ?
                                <li className='nav-item'>
                                    
                                        <a href="/login" className="nav-link text-dark">
                                            <img src="p2.png" alt="" style={{ width: "30px" }} /></a>
                                        

                                </li>
                                :
                                <li className='' id="item-menu">

                                    {!isScrolled ?

                                        <li className="nav-link dropdown-toggle text-white mx-2" >
                                            <img src="p2.png" alt="" style={{ width: "32px" }} className=" mx-2" />{loginUserName}</li>
                                        :
                                        <li className="nav-link dropdown-toggle text-dark" >
                                            <img src="p3.png" alt="" style={{ width: "32px" }} className=" mx-2" />{loginUserName}</li>
                                    }


                                    <ul id="submenu" className="my-dropdown">
                                        <li><a href="/my-account" className="profile-item" > <i className="fas fa-user mx-2" />Account</a></li>
                                        {/* <li><a className="profile-item" > <i className="fas fa-users mx-2" style={{ margin: "0px" }} />Teams</a></li> */}
                                        <li><a href="/car-booking-status" className="profile-item" > <i className="fas fa-bus mx-2" style={{ margin: "0px" }} />Your Trip</a></li>
                                        <li><a className="profile-item" onClick={handlerLogOutUser}> <i className="fas fa-sign-out-alt mx-2" style={{ margin: "0px" }} /> SingOut</a></li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header;