import './my-account.css'
import SideNavbar from "../../SideNavber";
import { useState } from 'react';

const MyAccount = () => {
    const [isInput, setIsInput] = useState(false)
    const handleraAccountupdate = () => {
        console.log("update")
        setIsInput(true)
    }
    const handlerCancel = () =>{
        setIsInput(false)
    }
    return (

        <>
            <div className='bg-color'>
                <div className='my-nav'>
                    <SideNavbar />
                </div>
                <div className="my-account-main-screen">
                    <div className='my-profile'>
                        <h1>My account</h1>
                        <div className='my-profile-screen'>
                            <div className='profile-details mx-2'>
                                <div className='edit-btn'>
                                    <h5>Profile</h5>
                                    <button onClick={handleraAccountupdate}>Edit</button>
                                </div>
                                {!isInput ? (
                                    <div>

                                        <p>
                                            <strong>Full Name: </strong>

                                            Rinu Patel
                                        </p>

                                        <p>
                                            <strong>Phone No: </strong>
                                            8542154201
                                        </p>
                                        <p>
                                            <strong>Gender: </strong>
                                            Female


                                        </p>
                                        <p>
                                            <strong>County: </strong>
                                           Indian
                                        </p>
                                    </div>
                                ) :
                                    (
                                        <div>
                                            <p>
                                                <strong>First Name: </strong>
                                                <input type="text" className='input'/>
                                            </p>

                                            <p>
                                                <strong>Phone No: </strong>
                                                <input type="text" className='input'/>
                                            </p>
                                            <p>
                                                <strong>Gender: </strong>
                                                <input type="radio" name='gander' />
                                                <label htmlFor=""> Female</label>
                                                <label htmlFor="">Male</label>
                                                <input type="radio" name='gander' />

                                            </p>
                                            <p>
                                                <strong>County: </strong>
                                                <select name="" id="" className='my-select-acc'>
                                                    <option value="">Select Country</option>
                                                    <option value="Indian">India</option>
                                                    <option value="Usa">Usa</option>
                                                    <option value="Chine">Chine</option>
                                                </select>
                                            </p>
                                            <button className='btn-cancel' onClick={handlerCancel}>Cancel</button>
                                            <button className='btn-submit-account'>Submit</button>
                                        </div>

                                    )
                                }
                            </div>





                            <div className='profile-details mx-2' id="social">
                                <h5 className='social'>Social Link</h5>
                                < p className='msg'>Connect your social accounts to log in through Facebook or Google+.</p>

                                <p className='link-mesg'>Link more social network accounts</p>
                                <div className='icon'>

                                    <a href="https://www.facebook.com/" target="_blank" style={{ fontSize: "150%" }} className='mx-2'>
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" >
                                        <img src="google1.png" alt="" style={{ width: "35px", marginTop: "-5px" }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='email-change'>
                        <div className='email-text'>
                            <h5>Email</h5>
                            <button>Change</button>
                        </div>
                        <div>
                            <p className='email-del'>
                                <strong>Current email: </strong>
                                abc@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount;