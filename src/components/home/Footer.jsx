import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./assets/logo.png' alt='' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              
            </div>
          </div>

          

    

          <div className='box'>
            <h2>Contactanos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>Arroyo Hondo 2, Calle E, Distrito Nacional.</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Telefono: 829-422-0141</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email: jeanpaulrodriguezb@gmail.com</label>
            </div>
          </div>
        </div>
        <div className='legal container'>
          <p>Copyright @2022. All rights reserved.</p>
          
        </div>
      </footer>
    </>
  )
}

export default Footer
