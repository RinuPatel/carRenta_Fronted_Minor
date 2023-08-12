import { useEffect, useState } from 'react';
import './index.modul.css'
import FetchApi from '../../../constants/FetchApi';
const CarBoking = () => {


    const [carStatus, setCarStatus] = useState([])
    const [carName, setCarName] = useState("")
    const hanlarCarBookingStatus = async () => {

        const data = await FetchApi("car-booking-status", "", {
            method: "GET"
        })
        console.log("my booking status === >", data.bookingDetails)
        if (data.status) {
            setCarStatus(data.bookingDetails)

        }
    }

    console.log(carName)
    useEffect(() => {
        hanlarCarBookingStatus()
    }, [])
    return (
        <>
            <div className="d-flex body-main">
                <div className="main-rides">
                    <div className='main-text'>
                        <div className='list-head'>
                            <h5 className='list-data'>Date</h5>
                            <h5 className='list-car'>Car</h5>
                            <h5 className='list-from'>From</h5>
                            <h5 className='list-crn'>CRN</h5>
                            <h5 className='list-km'>Km </h5>
                            <h5 className='list-total'>Total</h5>
                            <h5 className='list-status'>Status</h5>
                        </div>
                        {carStatus.map((data, index) => {
                            return (
                                <div key={index}>

                                    <div className='item-frame'>
                                        <table className='cb-table'>
                                            <tr className='table-item'>
                                                <td>Jan,07,2019</td>
                                                <td className='car-item'>  <img src="/image/caravatar.png" alt="" className='img-car' id='car-img'/>{data.carName.slice(0, 8) + '...'}</td>
                                                <td className='car-from'> <i className="fas fa-map-marker mx-2"></i>{data.from.slice(0, 10) + '...'}</td>

                                                <td className='car-phone'>{data.driveNO}</td>
                                                <td className='car-km'>{data.package}</td>
                                                <td className='car-total'>₹{data.totalPrice}</td>
                                                <td> <span className='status-item'>successfully</span></td>
                                            </tr>
                                        </table>

                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarBoking; 