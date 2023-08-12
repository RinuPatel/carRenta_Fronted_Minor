import React, { useState } from 'react'
import Button from '../../Element/CustomButton'
import Footer from '../../Footer'
import './index.mudel.css'
import AppConfig from '../../../constants/AppConfig'

export default function Dashbord() {

  const MY_DOMAIN = AppConfig.SUB_DOMAIN;
  const [selectCity, setSelectCity] = useState("");

  const handlerCityWise = () => {
    window.location = window.location.href.split('?')[0] + "?q=" + selectCity;
    window.location.href = MY_DOMAIN + "cars-list?city=" + selectCity;
    console.log("my city data == >", selectCity);
    console.log("my href ===>", window.location);
  }
  return (

    <>
      <div className="banner-image w-100 vh-100 d-flex justify-content-left align-items-center" >
        <div className='justify-content-left align-items-center display-content' id='display'>
          <div className="text-left" id='text-head'>
            <h1 className='text-white text-head' id='header-dashbord'>Book Your Cars Rental</h1>
            <h4 className='text-white text-mini' id='title-dashbord'>Fast & Easy Way To Rent A Car</h4>

          </div>
          <div className='my-select' id='my-from'>
            <div className='dropdown' style={{ display: "flex" }}>

              <select name="cars" id="cars" className=' ' onChange={(e) => { setSelectCity(e.target.value) }}>
                <option value="All City" className='city-option' >ALL CITY</option>
                <option value="Surat" className='city-option' >SURAT</option>
                <option value="Bardoli" className='city-option' >BARDOLI</option>
                <option value="Ahembadab" className='city-option' >AHEMBADAB</option>
              </select>
              <Button className="city-btn" onClick={handlerCityWise} >FIND CARS  </Button>
            </div>

          </div>
        </div>
      </div>
      <div className='our-benifit-main' id='benefit-main' >

        <h1 className='benefit-title' id='benefit-title'>Our Benefits</h1>
        <p className='benefit-line'>Cars Rantals Service</p>

      </div>
      <div className='beninit-item-main'>
        <div className='benenit-item'>
          <img src="/image/p2.png" alt="image not found" />
          <h3>Our Customer Always 100% Satisfied</h3>
          <p>Our team of experts is always available to assist you. We take pride in providing top-notch services and ensuring your needs are met with the utmost care and attention.</p>
        </div>
        <div className='benenit-item'>
          <img src="/image/p3.png" alt="image not found" />
          <h3>We Provide Easier<br></br>
            & Faster Bookings</h3>
          <p>We understand that your time is valuable, and we want to make your booking experience as  efficient as possible.we have streamlined our booking process to ensure that you can secure your booking  quickly.</p>
        </div>
        <div className='benenit-item'>
          <img src="/image/p1.png" alt="image not found" />
          <h3>Your Choice of <br></br>
            Any Pickup Location</h3>
          <p>We understand that convenience is important when it comes to choosing a pickup location. That is why we provide you the flexibility to choose the pickup location as per your needs and preferences.</p>
        </div>

      </div>
      <Footer />
    </>
  )
}
