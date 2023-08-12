import SideNavbar from '../../SideNavber';
import './update.css'
const Updatepassword = () => {
    return (
        <>
            <div className='bg-color2'>
                <div className='my-nav2'>
                    <SideNavbar />
                </div>
                <div className='pass-change'>
                    <div className='head-pass'>

                        <h3>Update password</h3>
                    </div>
                    <div className='my-pass'>
                        <div className='pass-text'>
                            <h1>Password</h1>
                            <button>Change</button>

                        </div>
                      {/* <div> */}
                            <p className='pass-del'>
                                <strong>Current Password: </strong>
                                ***
                            </p>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Updatepassword;