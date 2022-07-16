import React from "react"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img src='./assets/home.png' alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              BLVCK
            </h1>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
            </div>
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='primary-btn'>Contactanos</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
