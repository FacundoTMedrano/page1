import React from 'react'
import svg from "../imagenes/home/quotes.svg"
import hiking from "../imagenes/home/hiking-v1.jpg"
import walking from "../imagenes/home/walking-v1.jpg"
import sec4Img1 from "../imagenes/home/outdoor-image-01.jpg"
import sec4Img2 from "../imagenes/home/image-1.jpg"
import sec4Img3 from "../imagenes/home/snow-1.jpg"
import sec4Img4 from "../imagenes/home/outdoor-image-04.jpg"
export default function Home() {
    return (
        <main>
            <section className='sec-bg'>
                <div className='sec-opacity'></div>
                <div className='sec-cont'>
                    <h3>Explore the wonderful world</h3>
                    <div className='barra'></div>
                    <h1>A WOLDERFUL GIFT</h1>
                    <a href="" className='sec-link'>LEARN MORE</a>
                </div>
            </section>
            <section className="sec1">
                <div className='sec-quote'>
                    <img src={svg} className='quote' alt="quote" />
                    <p>"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."</p>
                    <p>Adam Sendler</p>
                </div>
            </section>
            <section className="sec2">
                <h2>Upcoming Events</h2>
                <div className='sec2-barrita'></div>
                <div className='events-group'>
                    <div>
                        <img src={hiking} alt="hiking" />
                        <h3>Everest Camp Trek</h3>
                        <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        <a href="#">LEARN MORE</a>
                    </div>
                    <div>
                        <img src={walking} alt="walk" />
                        <h3>Walking Holidays</h3>
                        <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                        <a href="#">LEARN MORE</a>
                    </div>
                </div>
            </section>
            <section className="sec3">
                <div className='sec3-bg-opacity'></div>
                <div className='sec3-cont'>
                    <h3>EXPLORE THE WORLD</h3>
                    <div className='sec3-barrita'></div>
                    <p>Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his. Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna. </p>
                    <a href="#">LEARN MORE</a>
                </div>
            </section>
            <section className='sec4'>
                <div className='sec4-wrapper'>
                    <div className='sec4-text'>
                        <h2>UPCOMING TOURS & DESTINATION</h2>
                        <div className='sec4-barrita'></div>
                        <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus.</p>
                        <a href="#">LEARN MORE</a>
                    </div>
                    <div className='sec4-img-part1'>
                        <img src={sec4Img1} alt="snow" />
                        <img src={sec4Img2} alt="snow" />
                    </div>
                    <div className='sec4-img-part2'>
                        <img src={sec4Img3} alt="snow" />
                        <img src={sec4Img4} alt="snow" />
                    </div>
                </div>
            </section>
        </main>
    )
}
