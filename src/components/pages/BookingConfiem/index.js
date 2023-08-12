import FetchApi from '../../../constants/FetchApi';
import SuccessPopup from '../../Success';
import './index.modul.css'
import React, { useEffect, useState } from 'react';
import AppConfig from '../../../constants/AppConfig';

const BookingConfiem = () => {
    const [myBooking, setMyBooking] = useState([])
    const carImg = localStorage.getItem("bookCarImg")
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const DOMAIN = AppConfig.SUB_DOMAIN
    const handleCheckboxChange = () => {
        setIsChecked((prevChecked) => !prevChecked);
    };


    const handlerBookingCar = async () => {
        try {
            if (!isChecked) {
                setError(true)
                return false



            } if (myBooking) {
                const data = await FetchApi("car-booking", myBooking, {
                    method: "POST"
                })
                console.log("my booking data", myBooking);
                if(data.status === 200){
                    
                    setShowSuccess(true)
                    setTimeout(() => {
                        setShowSuccess(false)
                       window.location.href = DOMAIN+"car-booking-status";
                    }, 2000);
                }
            }
        } catch (error) {
            console.log("my booking error", error)
        }
    }
    useEffect(() => {
        const bookData = localStorage.getItem("booking")
        const parseData = JSON.parse(bookData)
        setMyBooking(parseData)
    }, [])
    return (
        <>
            <div className="main-screen">
                <div className='display-contant'>

                    <div className='car-del1' id='myConfirm'>
                        {myBooking && myBooking.from ? (
                            <div>
                                <div className='my-car-name'>
                                    <img src="image/ic_mini.png" alt="" style={{ width: "40px" }} />

                                    <h5>{myBooking.carName}</h5>
                                </div>
                                <div className='add-del'>
                                    {/* <div className='contant' style={{ display: "inline-flex" }}> */}
                                    <p className='pragraph'> PICKUP</p>
                                    <label htmlFor="" className='mx-3'>{myBooking.from}</label>
                                    {/* {'\n'}
                                <p className='pragraph'>DEPART</p>
                                <label htmlFor="" className='mx-3'>Dindoli</label> */}
                                    {/* </div> */}
                                </div>
                                <div className='pay-del'>
                                    <h5>{myBooking.package}</h5>

                                    <h3><i>₹</i>{myBooking.totalPrice}</h3>
                                    <h6> BASE FARE</h6>
                                    <p>includes {myBooking.package}</p>
                                    <div className='addtional'>
                                        <div className='info'>
                                            <h2>₹12</h2>
                                            <h2>Additional Km </h2>
                                            <h2>Fare After first 10 Km</h2>
                                        </div>
                                        <p></p>
                                        <div className='info1'>
                                            <h2>₹2/min</h2>

                                            <h2>Additional Ride Time Fare </h2>
                                            <h2>After first 1 hours</h2>
                                        </div>
                                    </div>

                                </div>
                                <div className='show-del'>
                                    <button>See teams and Conditions</button>
                                    <div className='notes'>

                                        <div>
                                            <p>Rental can be used for local travels only, package cannot be changed after booking is confirmed.</p>
                                            <p>For usage beyond selected package,additional fare will be application as per rates rates above.</p>
                                            <p>Base fare amount is the minimum bill amount a customer has to pay for the package.</p>
                                        </div>
                                        <div style={{ margin: "0.3rem" }}>

                                            <input type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                            />
                                            <span className='mx-2'>

                                                I accept team and condition
                                            </span>
                                        </div>
                                        {error && !isChecked ? (
                                            <p style={{ color: 'red' }}>Error: The checkbox is checked!</p>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='book'>
                                    No advance payment required for booking
                                </div>
                                <div className='cashPay'>
                                    <h5>PAY BY</h5>
                                    <img src="image/rupee1.png" alt="scfdsf" style={{ width: "30px" }} />
                                    <h4>Cash</h4>
                                </div>
                                <button className='btn-contine' onClick={handlerBookingCar}>Booking</button>
                            </div>
                        ) : ""}
                    </div>
                    {showSuccess ? (
                        <div>

                            <SuccessPopup message={"Congratulations, Your booking is confirm"} />
                        </div>
                    ) : ""}

                </div>

            </div>
        </>
    )
}
export default BookingConfiem; 