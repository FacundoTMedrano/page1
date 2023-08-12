import React from 'react'
import "../styles/services.css"
import image1 from "../imagenes/services/outdoor-image-03.jpg"
import image2 from "../imagenes/services/services-2.jpg"
import image3 from "../imagenes/services/services-3.jpg"
import image4 from "../imagenes/services/outdoor-image-01.jpg"

export default function Services() {
  return (
    <main>
      <section className='sec-bg-services'>
        <div className='sec-op-services'></div>
        <h1>SERVICES</h1>
      </section>
      <section className='sec2-services'>
        <div className='sec2-text-services'>
          <h2>IT'S TIME TO START YOUR ADVENTURES</h2>
          <div className='sec2-services-barrita'></div>
          <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe pulvinar. </p>
        </div>
        <div className='sec2-images-services'>
          <div>
            <img src={image1} alt="Backpacking Trips" />
            <h5>Backpacking Trips</h5>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
          </div>
          <div>
            <img src={image2} alt="Family Hiking Trips" />
            <h5>Family Hiking Trips</h5>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
          </div>
          <div>
            <img src={image3} alt="Water Sports" />
            <h5>Water Sports</h5>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
          </div>
          <div>
            <img src={image4} alt="Winter Sports" />
            <h5>Winter Sports</h5>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
          </div>
        </div>
      </section>
      <section className='sec3-services'>
        <div>
          <h3>Why Outdoor Adventure</h3>
          <div className='sec3-barrita-services'></div>
          <p>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
          <ul>
            <li>Experience: Locavit liberioris possedit</li>
            <li>Reputation: Diremit mundi mare undae</li>
            <li>Guide Experience: Spectent tonitrua mutastis</li>
          </ul>
        </div>
        <div>
          <h3>What You Get</h3>
          <div className='sec3-barrita-services'></div>
          <p>Mas ande otro criollo pasa Martín Fierro ha de pasar, Nada la hace recular Ni las fantasmas lo espantan; Y dende que todos cantan Yo también quiero cantar.</p>
          <ul>
            <li>Private Hike: Locavit liberioris possedit</li>
            <li>Transportation: Diremit mundi mare undae</li>
            <li>Great Facilities: Spectent tonitrua mutastis</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
