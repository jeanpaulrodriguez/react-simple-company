import React from "react"

const About = () => {
  const data = [
    {
      title: "Conocenos",
      desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
      desc2: "Suspendisse eget ornare dui. Ut iaculis malesuada lacinia. Ut malesuada nibh sit amet turpis placerat, at pulvinar mauris malesuada. Mauris rhoncus, risus suscipit.",
      desc3: "Nulla suscipit elit ut consequat ullamcorper. Phasellus facilisis quis risus ac tempor. Maecenas feugiat dolor elit, sed vestibulum arcu efficitur non. Sed et mollis.",
      cover: "./assets/about.jpg",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>Sobre Nosotros</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <button className='primary-btn'>Contactanos</button>
                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
