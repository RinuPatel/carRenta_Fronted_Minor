import { useEffect, useRef, useState } from 'react'
import FetchApi from '../../../constants/FetchApi'
import './index.modul.css'
import Footer from '../../Footer'
import ServerError from '../../Errors/ServerError'
import CustomButton from '../../Element/CustomButton'
import AppConfig from '../../../constants/AppConfig'

const CarDetails = () => {
    const [myCarDetails, setMyCarDetails] = useState({})
    const [isError, setIsError] = useState(false)
    const [from, setFrom] = useState("")
    const [date, setDate] = useState("")
    const [packages, setPackages] = useState("")
    const [carPrice, setCarPrice] = useState("")
    const [totalPrice, setTotalPrice] = useState("")
    const [houre, setHoure] = useState("")
    const pRef = useRef(null);
    const DOMAIN = AppConfig.SUB_DOMAIN


    var url_string = window.location;// it is get current page url
    var url = new URL(url_string);
    var myCarKey = url.searchParams.get("item_key");
    console.log("my car key",myCarKey)
    const handlerDisplayOneCarDetails = async () => {
        if (myCarKey) {
            const data = await FetchApi("/display-carlist?item_id=" + myCarKey, "", {
                method: "GET"
            })
            setMyCarDetails(data)
        } else {
            setIsError(true)
        }


    }
    console.log("my image here == > ", myCarDetails.registerYear);
    const dateString = myCarDetails.registerYear
    const makeYear = myCarDetails.makeYear
    const carRating = myCarDetails.schedule;
    // if (packages) {
    //     const hourse = packages.substring(packages, 2)
    //     console.log("my car schedule", hourse);
    //     setHoure(hourse)
    // }

    const formatDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const makeDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const handlarCarBooking = async() => {
        try {
            if (pRef.current && carRating) {
                const paragraph = pRef.current.textContent;
                const rentPerCar = parseInt(paragraph.match(/\d+$/)[0], 10);
                console.log("my car price",rentPerCar)
                const hourse = packages.substring(packages, 2)
                // const totalCarRent = hourse * paragraph
                const carValue = parseInt(carRating.match(/\d+$/)[0], 10);
                const totalCarPrice = carValue * hourse
                console.log("my hour and price", hourse, carValue)
                console.log("my total price", totalCarPrice)

                const carBookingDetails = {
                    from: from,
                    date: date,
                    package: packages,
                    price: rentPerCar,
                    carName: myCarDetails.carName,
                    totalPrice: totalCarPrice,
                    vehicalNo: myCarDetails.vehicalNo,
                    phone:myCarDetails.phone,
                    bookId:myCarKey
                }
                if(carBookingDetails){
                       
                    const carBookingStr = JSON.stringify(carBookingDetails)
                    localStorage.setItem("booking",carBookingStr);
                    
                    window.location.href = DOMAIN + "booking-confiem";
                }
            //     console.log("my booking data",carBookingDetails)
            //    const data = await FetchApi("car-booking",carBookingDetails,{
            //         method:"POST"
            //     })
            //     if(data.status === 200){
            //         alert("success")
            //     }
            }
           
        } catch (error) {
            console.log("car booking error", error)
        }
    }

    useEffect(() => {
        handlerDisplayOneCarDetails()
    }, [])

    return (
        <>
            <div className="d-flex blackgroun">

                <div className='car-del-main'>

                    {myCarDetails && myCarDetails.image && myCarDetails.city ? (
                        <div>
                            <div className='image-frame' style={{ marginTop: "5rem" }}>
                                <div className='mx-2'>
                                    <img src={"http://localhost:8000/carImage/" + myCarDetails.image[0]} alt="" className='image-display' />
                                </div>
                                <div className='car-imag-mul mx-1' style={{ overflow: 'auto', maxHeight: '400px', borderRadius: '0.5rem' }} id="mul-car">
                                    <img src={"http://localhost:8000/carImage/" + myCarDetails.image[1]} alt="" className='image-side mx-1 my-1' />
                                    <img src={"http://localhost:8000/carImage/" + myCarDetails.image[0]} alt="" className='image-side mx-1 my-1' />
                                    <img src={"http://localhost:8000/carImage/" + myCarDetails.image[2]} alt="" className='image-side  mx-1 my-1' />
                                    <img src={"http://localhost:8000/carImage/" + myCarDetails.image[3]} alt="" className='image-side mx-1 my-1' />
                                    <img src={"http://localhost:8000/carImage/" + myCarDetails.image[4]} alt="" className='image-side mx-1 my-1' />
                                    <img src={"http://localhost:8000/carImage/" + myCarDetails.image[5]} alt="" className='image-side mx-1 my-1' />
                                </div>
                            </div>

                            <div className='car-del '>

                                <div className='container-div' id='ove-del'>
                                    <div className='car-details'>

                                        <h2 className='car-name'> {myCarDetails.carName} </h2>


                                        <div className='car-frame'>
                                            <table></table>
                                            <hr />
                                            <div className='car-frame-line1'>
                                                <div className='line1'>
                                                    <h5>Make year</h5>
                                                    <p className="txt">{makeDate}</p>
                                                </div>
                                                <div className='line1'>
                                                    <h5>Registration year</h5>
                                                    <p className="txt">{formatDate}</p>

                                                </div>
                                                <div className='line1'>
                                                    <h5>Fuel type</h5>
                                                    <p className="txt">{myCarDetails.fuelType}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className='car-frame-line1'>
                                                <div className='line2'>
                                                    <h5>Km driven</h5>
                                                    <p >31K Km</p>
                                                </div>
                                                <div className='line2'>
                                                    <h5>Trasmission</h5>
                                                    <p className="txt">{myCarDetails.trasmission}</p>
                                                </div>
                                                <div className='line2'>
                                                    <h5>City</h5>
                                                    <p className="txt">{myCarDetails.city}</p>

                                                </div>
                                            </div>
                                            <hr />
                                            <div style={{ marginLeft: "2.8rem" }}>

                                                <h5 >Vehical No</h5>
                                                <p>{myCarDetails.vehicalNo}</p>
                                            </div>
                                            <div className='posted-by'>
                                                <h4 className=''>Posted By : {myCarDetails.admidName}</h4>
                                                <img src="/image/avatar.png" alt="" className='img-posted' />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='booking-side mx-4' style={{ backgroundColor: "rgb(226, 220, 220)", padding: "2rem", marginTop: "-0.1rem", marginLeft: "-2rem", width: "35rem", borderRadius: "0.8rem" }}>
                                        <h4 className='book-title'>Book This car</h4>
                                        <div className='amount-screen'>
                                            <p>Per Hourse</p>
                                            <h1 ref={pRef}>{carRating.substring(carRating.length - 4)}</h1>
                                        </div>
                                        <div style={{ marginLeft: "-4rem" }}>

                                            <div className='input-side'>

                                                <span className="input-lable" >FROM</span>
                                                <input
                                                    type="text"
                                                    className="my-input col-8"
                                                    placeholder='Your pickup location'
                                                    onChange={(e) => setFrom(e.target.value)}
                                                />
                                            </div>
                                            <div className='input-side-date'>

                                                <span className="input-lable" >DATE</span>
                                                <input
                                                    type="date"
                                                    style={{ width: "15.5rem" }}
                                                    className="my-input"
                                                    placeholder='Your pickup location'
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                            </div>

                                            <div className='my-pack' id='myDropdown' >
                                                <span className="input-lable-pack" >PACKAGES</span>
                                                <select name="" id="dropdown" className='dropdown1' onChange={(e) => setPackages(e.target.value)} >
                                                    <option value="">Select Packages</option>
                                                    <option value="1 hrs 10 km">1 hrs 10 km </option>
                                                    <option value="2 hrs 20 km">2 hrs 30 km</option>
                                                    <option value="3 hrs 40 km">3 hrs 40 km</option>
                                                    <option value="5 hrs 60 km">5 hrs 60 km</option>
                                                    <option value="7 hrs 80 km">7 hrs 80 km</option>
                                                    <option value="9 hrs 100 km">9 hrs 100 km</option>
                                                    <option value="10 hrs 110 km">10 hrs 110 km</option>
                                                </select>
                                            </div>
                                            <div className='btn-booking'>
                                                <CustomButton onClick={handlarCarBooking}> Continue</CustomButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                        : (

                            ""
                            //   <ServerError/>



                        )
                    }




                </div>

            </div>
            <Footer />
        </>
    )
}

export default CarDetails; 