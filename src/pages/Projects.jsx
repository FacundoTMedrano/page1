import React from 'react'
import "../styles/projects.css"
import water1 from "../imagenes/projects/water/1.jpg"
import water2 from "../imagenes/projects/water/2.jpg"
import water3 from "../imagenes/projects/water/3.jpg"
import water4 from "../imagenes/projects/water/4.jpg"
import winter1 from "../imagenes/projects/winter/1.jpg"
import winter2 from "../imagenes/projects/winter/2.jpg"
import winter3 from "../imagenes/projects/winter/3.jpg"
import winter4 from "../imagenes/projects/winter/4.jpg"
import camping1 from "../imagenes/projects/camping/1.jpg"
import camping2 from "../imagenes/projects/camping/2.jpg"
import camping3 from "../imagenes/projects/camping/3.jpg"
import camping4 from "../imagenes/projects/camping/4.jpg"

import SwiperComp from '../components/SwiperComp'

const lista1 = [water1, water2, water3, water4]
const lista2 = [winter1, winter2, winter3, winter4]
const lista3 = [camping1, camping2, camping3, camping4]

export default function Projects() {
  return (
    <main>
      <section className='sec-img-proj'>
        <div className='sec-op-proj'></div>
        <h1>OUR PROJECTS</h1>
      </section>
      <section className='sec-swipers-proj'>

        <div className='div-cont1-swiper-proj'>
          <div className='cont1-div1-proj'>
            <h5>Adventure</h5>
            <div className='barrita-swiper-proj'></div>
          </div>
          <div className='cont1-div2-proj'>
            <h2>WATER SPORTS</h2>
            <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
          </div>
          <div className='cont1-div3-proj'>
            <SwiperComp lista={lista1} nombreLista={"swiper-water"} />
          </div>
        </div>

        <div className='div-cont2-swiper-proj'>
          <div className='cont2-div1-proj'>
            <h5>Snow Adventure</h5>
            <div className='barrita-swiper-proj'></div>
          </div>
          <div className='cont2-div2-proj'>
            <h2>WINTER SPORTS</h2>
            <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
          </div>
          <div className='cont2-div3-proj'>
            <SwiperComp lista={lista2} nombreLista={"swiper-winter"} />
          </div>
        </div>

        <div className='div-cont3-swiper-proj'>
          <div className='cont3-div1-proj'>
            <h5>Forest Tours</h5>
            <div className='barrita-swiper-proj'></div>
          </div>
          <div className='cont3-div2-proj'>
            <h2>CAMPING</h2>
            <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
          </div>
        </div>
        <div className='cont3-div3-proj'>
          <SwiperComp lista={lista3} nombreLista={"swiper-camping"} />
        </div>
      </section>
    </main>
  )
}
