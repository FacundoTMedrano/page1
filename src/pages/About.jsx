import React from "react";
import aboutImg from "../imagenes/about/outdoor-image-02.jpg";
import "../styles/about.css";
export default function About() {
  return (
    <main className="main-about">
      <section className="sec-bg-about">
        <div className="sec-opacity-about"></div>
        <div className="sec-text-about">
          <h1>WHO WE ARE?</h1>
        </div>
      </section>
      <section className="sec2-about">
        <div className="sec2-about-cont">
          <div className="sec2-about-text">
            <h2>OUR MISSION</h2>
            <div className="sec2-about-barrita"></div>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              adipiscing elit.{" "}
            </p>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="sec2-about-img">
            <img src={aboutImg} alt="mirada al agua" />
          </div>
        </div>
      </section>
      <section className="sec3-about">
        <div className="sec3-about-cont1">
          <h4>Extraordinary Experiences</h4>
          <div className="sec3-about-barrita"></div>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
          </p>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="sec3-about-cont2">
          <h4>Our Core Values</h4>
          <div className="sec3-about-barrita2"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
          </p>
          <ul>
            <li>Locavit liberioris possedit</li>
            <li>Diremit mundi mare undae</li>
            <li>Spectent tonitrua mutastis</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
